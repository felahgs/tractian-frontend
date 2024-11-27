import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    // "./src/components/**",
    "./src/lib/**",
    "./src/services/**",
    "./src/contexts/**",
  ],
  coveragePathIgnorePatterns: [
    "/\\index.ts",
    "\\.css$|\\.scss$|\\.sass$",
    "\\.json$",
    "types\\.ts$",
    "\\.types\\.ts$",
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust this based on your folder structure
  },
};

export default createJestConfig(config);
