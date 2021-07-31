import { GoogleAddressData } from "./google-data";

export const getCountryCodes = (): Array<string> => {
  return GoogleAddressData.getSupportedCountries();
};
