// Example authentication testing (if you add it later)
describe('Authentication API', () => {
    let authToken;
  
    it('should register a new user', () => {
      const user = {
        email: `test${Date.now()}@example.com`,
        password: 'password123',
        name: 'Test User'
      };
  
      cy.api('POST', '/register', user).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('token');
      });
    });
  
    it('should login a user', () => {
      const credentials = {
        email: 'test@example.com',
        password: 'password123'
      };
  
      cy.api('POST', '/login', credentials).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        authToken = response.body.token;
      });
    });
  
    it('should access protected routes with valid token', function() {
      // Skip if login failed
      if (!authToken) this.skip();
      
      cy.request({
        method: 'GET',
        url: 'http://localhost:4000/protected-route',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });