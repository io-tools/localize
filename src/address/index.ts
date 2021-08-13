import { GoogleAddressData } from "./google-data";
import { AddressInput } from "./interfaces";

export const getCountries = (): Array<{ code: string; name: string }> => {
  return GoogleAddressData.getSupportedCountries();
};

export const format = (address: AddressInput) => {};
