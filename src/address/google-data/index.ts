export type { CountryCode } from "./country-codes.type";
import * as countries from "./data.json";

export class GoogleAddressData {
  public static getSupportedCountries(): Array<{ code: string; name: string }> {
    return Object.values(countries as any)
      .filter(({ id }) => id !== "data/ZZ")
      .map(({ key, name }) => ({
        code: key,
        name,
      }));
  }
}
