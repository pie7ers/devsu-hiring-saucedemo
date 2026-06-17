import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  allowCypressEnv: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'cypress-reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    screenshotOnRunFailure: true,
    baseUrl: process.env.BASE_URL,
    env: {
      BASE_URL: process.env.BASE_URL,
      ENABLE_SCREENSHOTS: process.env.ENABLE_SCREENSHOTS,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      //force browser window size to avoid cut-off screenshots
      on('before:browser:launch', (browser, launchOptions) => {
        launchOptions.args.push('--window-size=1920,1080')
        return launchOptions
      })
    },
  },
});
