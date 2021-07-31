import * as countries from "./countries.json";

export class GoogleAddressData {
  public static getSupportedCountries(): Array<string> {
    return countries;
  }
}
