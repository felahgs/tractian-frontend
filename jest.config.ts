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
    "/\\types.ts",
    "\\.css$|\\.scss$|\\.sass$",
    "\\.json$",
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

export default createJestConfig(config);
