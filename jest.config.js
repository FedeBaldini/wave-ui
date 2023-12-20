module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"]
};
