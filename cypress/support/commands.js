// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('loginAsAdmin', () => {
    cy.visit('http://localhost:8080/?#/'); // Asegúrate de que esta sea la ruta correcta para tu página de inicio de sesión
    cy.get('[placeholder="Email"]').type('ablancaa@gmail.com');
    cy.get('[placeholder="Password"]').type('123456'); // Reemplaza con la contraseña correcta
    cy.get('.btn-dark').click();
    cy.url().should('not.include', 'http://localhost:8080/#/dashBoardAdmin'); // URL de redirección después del inicio de sesión
  });
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })