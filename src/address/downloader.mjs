import path from "path";
import url from "url";
import fs from "fs";
import axios from "axios";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const GOOGLE_DATA_URL = "https://chromium-i18n.appspot.com/ssl-address/data";

const saveAs = (filename, data) => {
  fs.writeFileSync(
    path.resolve(__dirname, "google-data", filename),
    JSON.stringify(data),
    { encoding: "utf-8" }
  );
};

const getCountries = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(GOOGLE_DATA_URL)
      .then(({ data }) => {
        const countries = data.countries.split("~");
        saveAs("countries.json", countries);
        resolve(countries);
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
  try {
    const countries = await getCountries();
    const COUNTRY_DATA = await Promise.all(
      [...countries, "ZZ"].map((countryCode) => getCountryData(countryCode))
    );
    let JSONData = COUNTRY_DATA.reduce((acc, country) => {
      return {
        ...acc,
        [country.id.split("/")[1]]: country,
      };
    }, {});
    saveAs("data.json", JSONData);
  } catch (e) {
    console.error(e);
  }
})();
