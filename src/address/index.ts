import { GoogleAddressData, CountryCode } from "./google-data";
import { AddressInput } from "./interfaces";

export const getCountries = (): Array<{ code: CountryCode; name: string }> => {
  return GoogleAddressData.getSupportedCountries();
};

export const format = (address: AddressInput) => {};
