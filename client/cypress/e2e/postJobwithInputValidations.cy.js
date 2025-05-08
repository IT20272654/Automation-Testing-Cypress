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
    cy.get('input[placeholder="Paste your company url logo here"]').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4vUpbQvMf1fisaGhqiUkD920StNHPaTXUW3kZBLWrSeypViBuTdDrnsFKA&s');
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

  it('shows error for invalid email format', () => {
    cy.get('input[placeholder="Enter position that you want to post..."]').type('Software Engineer');
    cy.get('input[placeholder="Enter company name here..."]').type('OpenAI');
    cy.get('input[placeholder="Ex: 80000"]').type('80000');
    cy.get('input[placeholder="Ex: 1000000"]').type('120000');
    cy.get('select[name="salaryType"]').select('Information Technology');
    cy.get('select[name="jobLocation"]').select('Western Province');
    cy.get('input[type="date"]').type('2025-05-01');
    cy.get('input[placeholder="Paste your company url logo here"]').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4vUpbQvMf1fisaGhqiUkD920StNHPaTXUW3kZBLWrSeypViBuTdDrnsFKA&s');
    cy.get('select[name="experienceLevel"]').select('Any experience');
    cy.get('input[placeholder="Enter your company email"]').type('invalid-email'); // Invalid email
    cy.get('select[name="employmentType"]').select('Full-time');
    cy.get('input[placeholder="Enter job description..."]').type('Testing invalid email.');

    cy.get('input[type="submit"]').click();

    // Wait for the error message
    cy.get('.error-message', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Enter a valid email address');
  });

  it('shows error for salary minimum greater than maximum', () => {
    cy.get('input[placeholder="Enter position that you want to post..."]').type('Software Engineer');
    cy.get('input[placeholder="Enter company name here..."]').type('OpenAI');
    cy.get('input[placeholder="Ex: 80000"]').type('150000'); // Min salary greater than max
    cy.get('input[placeholder="Ex: 1000000"]').type('120000');
    cy.get('select[name="salaryType"]').select('Information Technology');
    cy.get('select[name="jobLocation"]').select('Western Province');
    cy.get('input[type="date"]').type('2025-05-01');
    cy.get('input[placeholder="Paste your company url logo here"]').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4vUpbQvMf1fisaGhqiUkD920StNHPaTXUW3kZBLWrSeypViBuTdDrnsFKA&s');
    cy.get('select[name="experienceLevel"]').select('Any experience');
    cy.get('input[placeholder="Enter your company email"]').type('jobs@openai.com');
    cy.get('select[name="employmentType"]').select('Full-time');
    cy.get('input[placeholder="Enter job description..."]').type('Testing salary validation.');

    cy.get('input[type="submit"]').click();

    // Wait for the error message
    cy.get('.error-message', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Minimum salary cannot be greater than maximum salary');
  });

  it('shows error when job title exceeds character limit', () => {
    cy.get('input[placeholder="Enter position that you want to post..."]').type(
      'Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer Software Engineer'
    ); // Exceeds character limit
    cy.get('input[placeholder="Enter company name here..."]').type('OpenAI');
    cy.get('input[placeholder="Ex: 80000"]').type('80000');
    cy.get('input[placeholder="Ex: 1000000"]').type('120000');
    cy.get('select[name="salaryType"]').select('Information Technology');
    cy.get('select[name="jobLocation"]').select('Western Province');
    cy.get('input[type="date"]').type('2025-05-01');
    cy.get('input[placeholder="Paste your company url logo here"]').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4vUpbQvMf1fisaGhqiUkD920StNHPaTXUW3kZBLWrSeypViBuTdDrnsFKA&s');
    cy.get('select[name="experienceLevel"]').select('Any experience');
    cy.get('input[placeholder="Enter your company email"]').type('jobs@openai.com');
    cy.get('select[name="employmentType"]').select('Full-time');
    cy.get('input[placeholder="Enter job description..."]').type('Valid description');

    cy.get('input[type="submit"]').click();

    // Wait for the error message
    cy.get('.error-message', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Job title exceeds maximum character limit');
  });

  it('shows error when job description is too short', () => {
    cy.get('input[placeholder="Enter position that you want to post..."]').type('Software Engineer');
    cy.get('input[placeholder="Enter company name here..."]').type('OpenAI');
    cy.get('input[placeholder="Ex: 80000"]').type('80000');
    cy.get('input[placeholder="Ex: 1000000"]').type('120000');
    cy.get('select[name="salaryType"]').select('Information Technology');
    cy.get('select[name="jobLocation"]').select('Western Province');
    cy.get('input[type="date"]').type('2025-05-01');
    cy.get('input[placeholder="Paste your company url logo here"]').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4vUpbQvMf1fisaGhqiUkD920StNHPaTXUW3kZBLWrSeypViBuTdDrnsFKA&s');
    cy.get('select[name="experienceLevel"]').select('Any experience');
    cy.get('input[placeholder="Enter your company email"]').type('jobs@openai.com');
    cy.get('select[name="employmentType"]').select('Full-time');
    cy.get('input[placeholder="Enter job description..."]').type('Hi'); // Too short

    cy.get('input[type="submit"]').click();

    // Wait for the error message
    cy.get('.error-message', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Job description must be at least 20 characters');
  });
});
