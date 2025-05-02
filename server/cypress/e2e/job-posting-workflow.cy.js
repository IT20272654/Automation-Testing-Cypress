// Complete end-to-end test example
describe('Job Posting Workflow', () => {
    beforeEach(() => {
      // Start at the home/job listing page
      cy.visit('http://localhost:5173/');
    });
  
    it('should complete the full job posting workflow', () => {
      // Navigate to the post-job page
      cy.contains('Post a Job').click();
      cy.url().should('include', '/post-job');
  
      // Fill out the job posting form
      cy.get('[data-cy=job-title]').type('Full Stack Developer');
      cy.get('[data-cy=company-name]').type('MERN Solutions');
      cy.get('[data-cy=job-location]').type('Remote');
      cy.get('[data-cy=job-type]').select('Full-time');
      cy.get('[data-cy=job-salary]').type('90,000-120,000');
      cy.get('[data-cy=job-description]').type('We are looking for a talented Full Stack Developer...');
      cy.get('[data-cy=job-requirements]').type('3+ years of experience with MERN stack');
      cy.get('[data-cy=application-deadline]').type('2023-12-31');
  
      // Submit the form
      cy.get('[data-cy=submit-job]').click();
  
      // Verify success message
      cy.contains('Job posted successfully').should('be.visible');
  
      // Verify job appears in the job listings
      cy.visit('/');
      cy.contains('Full Stack Developer').should('be.visible');
      cy.contains('MERN Solutions').should('be.visible');
  
      // Click on job to view details
      cy.contains('Full Stack Developer').click();
      cy.url().should('include', '/job/');
      
      // Verify job details page shows correct information
      cy.contains('Full Stack Developer').should('be.visible');
      cy.contains('MERN Solutions').should('be.visible');
      cy.contains('Remote').should('be.visible');
      cy.contains('Full-time').should('be.visible');
      cy.contains('90,000-120,000').should('be.visible');
    });
  });