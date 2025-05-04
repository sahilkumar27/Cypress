//cypress - Spec

describe('Login Test on Demo Site', () => {
    it('logs in with valid credentials', () => {
      // Visit the login page
      cy.visit('https://the-internet.herokuapp.com/login');
  
      // Fill in login form
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();
  
      // Assert success message
      cy.get('.flash.success').should('contain', 'You logged into a secure area!');
    });
  
    it('shows error with invalid credentials', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
  
      cy.get('#username').type('wronguser');
      cy.get('#password').type('wrongpassword');
      cy.get('button[type="submit"]').click();
  
      cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });
  });
  