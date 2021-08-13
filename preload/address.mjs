import path from "path";
import fs from "fs";
import axios from "axios";

const GOOGLE_DATA_URL = "https://chromium-i18n.appspot.com/ssl-address/data";

const saveAs = (filename, data) => {
  fs.writeFileSync(
    path.resolve("src", "address", "google-data", filename),
    JSON.stringify(data),
    { encoding: "utf-8" }
  );
};

const getCountries = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(GOOGLE_DATA_URL)
      .then(({ data }) => {
        resolve(data.countries.split("~"));
      })
      .catch(reject);
  });
};

const getCountryData = async (countryCode) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${GOOGLE_DATA_URL}/${countryCode}`, {})
      .then(({ data }) => {
        try {
          resolve(data);
        } catch (e) {
          console.error(e);
        }
      })
      .catch(reject);
  });
};

(async function () {
  console.log("Downloading Google address data...");
  try {
    const countries = await getCountries();
    const COUNTRY_DATA = await Promise.all(
      [...countries, "ZZ"].map((countryCode) => getCountryData(countryCode))
    );
    let JSONData = COUNTRY_DATA.sort((a, b) => a.key - b.key).reduce(
      (acc, country) => {
        return {
          ...acc,
          [country.id.split("/")[1]]: country,
        };
      },
      {}
    );
    saveAs("data.json", JSONData);
    console.log("Done.");
  } catch (e) {
    console.error(e);
  }
})();