// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173', // Your frontend URL (if testing UI)
    supportFile: 'cypress/support/e2e.js',
    env: {
      apiUrl: 'http://localhost:4000', // Your backend API URL
    },
  },
});