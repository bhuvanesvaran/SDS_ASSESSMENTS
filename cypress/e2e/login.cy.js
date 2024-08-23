describe('LoginForm', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('password is missing', () => {
    cy.get('input#email').type('testUser@example.com');
    cy.get('button').click();
    cy.contains('Email and password fields are required').should('be.visible');
  });

  it('email is missing', () => {
    cy.get('input#password').type('password@123');
    cy.get('button').click();
    cy.contains('Email and password fields are required').should('be.visible');
  });

  it('success message', () => {
    cy.get('input#email').type('testUser@example.com');
    cy.get('input#password').type('password@123');
    cy.get('button').click();
    cy.contains('Successfully logged in').should('be.visible');
  });
});
