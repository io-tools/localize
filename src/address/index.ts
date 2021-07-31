import { GoogleAddressData } from "./google-data";

export const getCountries = (): Array<{ code: string; name: string }> => {
  return GoogleAddressData.getSupportedCountries();
};
