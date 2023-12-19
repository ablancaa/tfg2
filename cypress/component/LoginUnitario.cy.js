import Login from '../../src/views/LoginView.vue'
beforeEach(() => {
  cy.mount(<Login/>);
})
describe('LoginView.vue [Unitario]', () => {
  it('Renderización de la vista', () => {
    cy.mount(<Login/>);
  })

  it('Valida el campo de email', ()=> {
    cy.get('input[type="text"][placeholder="Email"]').should('exist');
    cy.get('input[type="text"][placeholder="Email"]').should('be.visible');
    //Comprueba que se puede escribir en el campo Email
    cy.get('input[type="text"][placeholder="Email"]').type("Prueba")
    
  })

  it('Valida el campo de password', () => {
    // Comprueba si el campo de password está presente y es visible
   
    cy.get('input[type="password"][placeholder="Password"]').should('exist');
    cy.get('input[type="password"][placeholder="Password"]').should('be.visible');
    //Comprueba que se puede escribir en el campo Password
    cy.get('input[type="password"][placeholder="Password"]').type("Prueba")
  });

  it('Comprueba que esté el botón de Login y funcione', ()=> {
    cy.get('button').should('exist');
    cy.get('button').should('be.visible');
    cy.contains('Login').click();
  })

})