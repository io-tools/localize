import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "js"],
  collectCoverageFrom: ["**/*.ts", "!**/node_modules/**"],
  testMatch: ["**/?(*.)spec.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
