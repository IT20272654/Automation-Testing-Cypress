describe('Feedback Form', () => {
    beforeEach(() => {
      cy.visit('/contact');
  
      // Stub window.alert
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alert');
      });
    });
  
    it('should submit the form and show success alert', () => {
      // Fill in the form
      cy.get('input[name="Name"]').type('Nick John');
      cy.get('input[name="Email"]').type('john@example.com');
      cy.get('input[name="Subject"]').type('Testing');
      cy.get('textarea[name="Message"]').type('This is a test message.');
  
      // Submit the form
      cy.contains('Send').click();
  
      // Assert the alert message
      cy.get('@alert').should('have.been.calledWith', 'Your Feedback Sent');
    });
  
    it('should not submit the form if fields are empty', () => {
      cy.contains('Send').click();
  
      // Ensure no alert is shown
      cy.get('@alert').should('not.have.been.called');
    });
  });
  