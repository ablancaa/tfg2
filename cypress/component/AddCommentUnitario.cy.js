import AddComments from '../../src/components/AddComment.vue'

describe('Renderización de componente AddComment', () => {
  it('playground', () => {
     cy.mount(<AddComments/>);
  })

  it('Comprueba el campo que muestra el usuario que redacta el comentario', () =>{
    cy.mount(<AddComments/>);
    cy.get('#email').should('exist');
    cy.get('#email').should('be.visible');
  })

  it('Comprueba el campo del usuario que redacta el comentario', () =>{
    cy.mount(<AddComments/>);
    cy.get('[placeholder="Descripción"]').should('exist');
    cy.get('[placeholder="Descripción"]').should('be.visible');
    
    //comprueba que se puede escribir en el area de texto
    cy.get('textarea[placeholder="Descripción"]').type("Hola esto es una prueba")
  })

  it('Comprueba que el botón cerrar funciona', () => {
    cy.mount(<AddComments/>);
    cy.get('button.btn.btn-primary.profile-button').contains('Cerrar').should('exist');
    cy.get('button.btn.btn-primary.profile-button').contains('Cerrar').should('be.visible');
    cy.get('button.btn.btn-primary.profile-button').contains('Cerrar').click();
  })

  it('Comprueba que el botón Guardar comentario funciona', () => {
    cy.mount(<AddComments/>);
    cy.get('button.btn.btn-primary.profile-button').contains('Save Comment').should('exist');
    cy.get('button.btn.btn-primary.profile-button').contains('Save Comment').should('be.visible');
    cy.get('button.btn.btn-primary.profile-button').contains('Save Comment').click();
  })
})