import { defineConfig } from "@playwright/test";
export default defineConfig({
  webServer: [
    {
      command: "npm run start",
      url: "http://localhost:8080",
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],
  use: {
    baseURL: "http://localhost:8080",
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },
  testDir: "./e2e-tests",
  retries: 2,
});
