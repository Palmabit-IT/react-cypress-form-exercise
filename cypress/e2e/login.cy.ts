describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Should have an H2 heading', () => {
    cy.get('h2').should('exist');
  });

  it('Should have an H2 heading with the correct contents', () => {
    cy.get('h2').should('contain.text', 'Sign in to your account');
  });

  it('Should have an image element with the correct src attribute', () => {
    cy.get('img').should('have.attr', 'src', 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600');
  });

  it('Should have an image element with the correct alt attribute', () => {
    cy.get('img').should('have.attr', 'alt', 'Your Company');
  });

  it('Should have an email input', () => {
    cy.findByLabelText('Email address').should('exist');
  });

  it('Should have a password input', () => {
    cy.findByLabelText('Password').should('exist');
  });

  it('Should require email input', () => {
    cy.findByText('Sign in').click();
    cy.findByText('Email is required').should('exist');
  });

  it('Should require password input', () => {
    cy.findByText('Sign in').click();
    cy.findByText('Password is required').should('exist');
  });

  it('Should validate the email input', () => {
    cy.findByLabelText('Email address').type('AnInvalidEmail');
    cy.findByText('Sign in').click();
    cy.findByText('Invalid email').should('exist');
  });

  it('Should have a sign-in button', () => {
    cy.get('button')
      .should('have.text', 'Sign in')
      .and('have.attr', 'type', 'submit');
  });

  it('Should have a password recover anchor (before sign-up anchor)', () => {
    cy.get('a')
      .first()
      .should('have.attr', 'href', '#')
      .and('contain.text', 'Forgot password?');
  });

  it('Should have a sign-up anchor (after password recover anchor)', () => {
    cy.get('a')
      .last()
      .should('have.attr', 'href', '#')
      .and('contain.text', 'Start a 14 day free trial');
  });
});
