module.exports = {
  moduleFileExtensions: ["js", "json", "jsx"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  verbose: false,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileTransformer.js",
    "\\.(css)$": "identity-obj-proxy"
  }
};
