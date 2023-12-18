import Login from '../../src/views/LoginView.vue'

describe('LoginUnitario.cy.js', () => {
  it('Renderización de la vista', () => {
    cy.mount(<Login/>);
  })

  it('Valida el campo de email', ()=> {
    cy.mount(<Login/>);
    cy.get('input[type="text"][placeholder="Email"]').should('exist');
    cy.get('input[type="text"][placeholder="Email"]').should('be.visible');
    
  })

  it('Valida el campo de password', () => {
    // Comprueba si el campo de password está presente y es visible
    cy.mount(<Login/>);
    cy.get('input[type="password"][placeholder="Password"]').should('exist');
    cy.get('input[type="password"][placeholder="Password"]').should('be.visible');
  });

  it('Comprueba que esté el botón de Login y funcione', ()=> {
    cy.mount(<Login/>);
    cy.get('button').should('exist');
    cy.get('button').should('be.visible');
    cy.contains('Login').click();
  })

})