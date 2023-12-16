
/// <reference types="cypress" />

describe('Login Form', () => {
  // beforeEach(() => {
  //   //cy.loginAsAdmin();
  //   // Visitar la página de inicio de sesión antes de cada prueba
    
  // });

  it('Valida el campo de email', () => {
    cy.visit('http://localhost:8080/?#/');
    // Comprueba si el campo de email está presente y es visible
    cy.get('input[type="text"][placeholder="Email"]').should('be.visible');
  });

  it('Valida el campo de password', () => {
    // Comprueba si el campo de password está presente y es visible
    cy.visit('http://localhost:8080/?#/');
    cy.get('input[type="password"][placeholder="Password"]').should('be.visible');
  });

  it('Realiza un intento de inicio de sesión con campos vacíos', () => {
    cy.visit('http://localhost:8080/?#/');
    // Hacer clic en el botón de inicio de sesión sin rellenar los campos
    cy.get('button.btn-dark').click();
   

    // Verificar si se muestra un mensaje de error
    cy.get('div.error').should('be.visible');
    
  });

  it('Realiza un intento de inicio de sesión con campos completos', () => {
    cy.visit('http://localhost:8080/?#/');
    // Rellenar los campos de email y password
    cy.get('input[type="text"][placeholder="Email"]').type('ablancaa@gmail.com');
    cy.get('input[type="password"][placeholder="Password"]').type('123456');

    // Hacer clic en el botón de inicio de sesión
    cy.get('button.btn-dark').click();

    // Verificar la redirección o cualquier otro comportamiento esperado después del inicio de sesión
    //cy.url().should('include', 'http://localhost:8080/#/dashBoardAdmin');
  });
});