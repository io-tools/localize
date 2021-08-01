import { getCountries } from "./index";

describe("Address localization", () => {
  it("should return countries supported", () => {
    const countries = getCountries();
    expect(countries).toMatchSnapshot();
  });
});
