// cypress/support/e2e.js
// Import commands.js using ES2015 syntax:
import './commands';

// Add code to set up test database before tests if needed
// You could make a call to a reset endpoint on your API that switches to a test database
before(() => {
  // This is where you could add code to initialize your test environment
  // For example, clearing test collections or setting up test data
  
  // Example (if you implement a reset endpoint):
  // cy.request('POST', 'http://localhost:4000/api/test/reset');
});