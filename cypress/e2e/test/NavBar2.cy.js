describe('Navbar Component', () => {
  beforeEach(() => {
   
    cy.loginAsAdmin();
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
  it('Verifica la navegación a ticketsView', () => {
    // Haz clic en el enlace a ticketsView
    cy.get('.bloque-tickets a').click();

    // Espera a que la URL cambie a /ticketsView 
    cy.url().should('include', '/ticketsView');
  });

  it('Verifica la navegación a usersView', () => {
    // Haz clic en el enlace a usersView
    cy.get('.bloque-usuarios a').click();

    // Espera a que la URL cambie a /usersView 
    cy.url().should('include', '/usersView');
  });

  it('Verifica la navegación a tecnicosView', () => {
    // Haz clic en el enlace a tecnicosView
    cy.get('.bloque-tecnicos a').click();

    // Espera a que la URL cambie a /tecnicosView
    cy.url().should('include', '/tecnicosView');
  });

  it('Muestra el correo electrónico del usuario y la imagen del usuario', () => {
    cy.visit('http://localhost:8080/#');
    cy.loginAsAdmin();
    // Visita la página principal o la página donde se muestra el correo electrónico
    //cy.visit('http://localhost:8080/#/dashBoardAdmin');

    // Busca el elemento que contiene el correo electrónico y verifica que exista
    cy.get('.currenUser').should('exist');
    cy.get('.profile-image').should('exist');

    // Obtiene el texto del elemento y verifica que contenga un formato de correo electrónico
    cy.get('.currenUser').contains('ablancaa@gmail.com');
  });

  // Agrega más pruebas según sea necesario para verificar otras funcionalidades
});
