// cypress/e2e/job-api.cy.js
describe('Job Recruitment API', () => {
    let jobId; 
  
    it('should post a new job', () => {
      const newJob = {
        title: 'Software Engineer',
        company: 'Tech Corp',
        location: 'Remote',
        jobType: 'Full-time',
        salary: '80,000-100,000',
        description: 'Building web applications with MERN stack',
        requirements: 'Experience with React, Node.js, MongoDB',
        applicationDeadline: '2023-12-31'
      };
  
      cy.api('POST', '/post-job', newJob).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('insertedId');
        jobId = response.body.insertedId;
      });
    });
  
    it('should get all jobs', () => {
      cy.api('GET', '/all-jobs').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.at.least(1);
      });
    });
  
    it('should get a single job by ID', function() {
      // Skip this test if no job was created in the first test
      if (!jobId) this.skip();
      
      cy.api('GET', `/all-jobs/${jobId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('_id');
        expect(response.body.title).to.eq('Software Engineer');
      });
    });
  });