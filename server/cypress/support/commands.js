// cypress/support/commands.js
Cypress.Commands.add('api', (method, url, body) => {
    return cy.request({
      method: method,
      url: `http://localhost:4000${url}`,
      body: body,
      failOnStatusCode: false
    });
  });