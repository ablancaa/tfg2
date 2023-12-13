describe('Navbar Component', () => {
  beforeEach(() => {
   
    
    // Visitar la URL donde está el componente
    cy.visit('http://localhost:8080/#/dashBoardAdmin');
  });

  it('Muestra el menú al hacer clic en el botón hamburguesa', () => {
    // Verificar que inicialmente el menú no esté visible
    cy.get('.menu-items').should('not.be.visible');

    // Hacer clic en el botón hamburguesa
    cy.get('.checkbox').click();

    // Verificar que el menú ahora esté visible
    cy.get('.menu-items').should('be.visible');
  });

  it('Muestra el correo electrónico del usuario', () => {
    cy.loginAsAdmin();
    // Visita la página principal o la página donde se muestra el correo electrónico
    cy.visit('http://localhost:8080/#/dashBoardAdmin');

    // Busca el elemento que contiene el correo electrónico y verifica que exista
    cy.get('.currenUser').should('exist');

    // Obtiene el texto del elemento y verifica que contenga un formato de correo electrónico
    cy.get('.currenUser').invoke('text').should('match', 'ablancaa@gmail.com');
  });

  // Agrega más pruebas según sea necesario para verificar otras funcionalidades
});
