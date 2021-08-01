import { GoogleAddressData } from "./index";

describe("Google address data class", () => {
  it("should have static method 'getSupportedCountries'  defined", () => {
    expect(GoogleAddressData.getSupportedCountries).toBeDefined();
  });
});
