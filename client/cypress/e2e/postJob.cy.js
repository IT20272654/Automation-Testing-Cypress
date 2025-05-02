describe('Post Job Page', () => {
    beforeEach(() => {
      cy.visit('/post-job'); // Adjust if route protection requires login
    });
  
    it('fills out and submits the job form', () => {
      cy.get('input[placeholder="Enter position that you want to post..."]').type('Software Engineer');
      cy.get('input[placeholder="Enter company name here..."]').type('OpenAI');
      cy.get('input[placeholder="Ex: 80000"]').type('80000');
      cy.get('input[placeholder="Ex: 1000000"]').type('120000');
      cy.get('select[name="salaryType"]').select('Information Technology');
      cy.get('select[name="jobLocation"]').select('Western Province');
      cy.get('input[type="date"]').type('2025-05-01');
      cy.get('input[placeholder="Paste your company url logo here"]').type('https://logo.com/logo.png');
      cy.get('select[name="experienceLevel"]').select('Any experience');
      cy.get('input[placeholder="Enter your company email"]').type('jobs@openai.com');
      cy.get('select[name="employmentType"]').select('Full-time');
      
      // Now correctly select the input field for description
      cy.get('input[placeholder="Enter job description..."]').type('This is a great opportunity to work on AI projects.');
  
      cy.get('input[type="submit"]').click();
  
      // Confirm the success alert
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Job Posted Successfully');
      });
    });
  });
  