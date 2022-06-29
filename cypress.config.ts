import { defineConfig } from "cypress";

export default defineConfig({
	// These settings apply everywhere unless overridden
	defaultCommandTimeout: 10000,
	viewportHeight: 1000,
	viewportWidth: 1280,
	env: { fixtureFile: "testData.json" },
	e2e: {
		baseUrl: "https://docs.cypress.io/",
		specPattern: "cypress/e2e/cypress/*.spec.{js,jsx,ts,tsx}",
		supportFile: "cypress/support/e2e.ts",
		setupNodeEvents(on, config) {
			// Setup your plugins here
		},
	},
});
