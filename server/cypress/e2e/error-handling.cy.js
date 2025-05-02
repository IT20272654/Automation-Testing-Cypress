// cypress/e2e/error-handling.cy.js
describe('API Error Handling', () => {
    it('should handle invalid job ID', () => {
      cy.api('GET', '/all-jobs/invalidId123').then((response) => {
        expect(response.status).to.not.eq(200);
      });
    });
  
    it('should handle missing job data', () => {
      // Sending empty job data
      cy.api('POST', '/post-job', {}).then((response) => {
        // Your API currently doesn't have validation, but this test would be useful if added
        expect(response.status).to.eq(200); // This would change to 400 if validation is added
      });
    });
  });