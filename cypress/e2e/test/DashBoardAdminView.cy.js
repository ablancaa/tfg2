
describe('Dashboard Admin', () => {
  beforeEach(() => {
   //Logar el usuario de prueba
   //cy.loginAsAdmin();
   //
  });
 
  it('Verifica la presencia de contadores', () => {
    // Espera a que los contadores se carguen (ajustar según el tiempo necesario)
    cy.wait(2000);
    cy.visit('http://localhost:8080/?#/dashBoardAdmin');
    // Comprueba si los contadores se muestran correctamente
    cy.get('.cuadrado-numerador').should('be.visible');
    cy.get('.num-contador').should('be.visible');
    cy.get('.circulo-rojo').should('be.visible');
    cy.get('.circulo-verde').should('be.visible');
    cy.get('.circulo-naranja').should('be.visible');
  });

  it('Verifica la navegación a ticketsView', () => {
    cy.visit('http://localhost:8080/?#/dashBoardAdmin');
    // Haz clic en el enlace a ticketsView
    cy.get('.bloque-tickets a').click();

    // Espera a que la URL cambie a /ticketsView 
    cy.url().should('include', '/ticketsView');
  });

  it('Verifica la navegación a usersView', () => {
    cy.visit('http://localhost:8080/?#/dashBoardAdmin');
    // Haz clic en el enlace a usersView
    cy.get('.bloque-usuarios a').click();

    // Espera a que la URL cambie a /usersView 
    cy.url().should('include', '/usersView');
  });

  it('Verifica la navegación a tecnicosView', () => {
    cy.visit('http://localhost:8080/?#/dashBoardAdmin');
    // Haz clic en el enlace a tecnicosView
    cy.get('.bloque-tecnicos a').click();

    // Espera a que la URL cambie a /tecnicosView
    cy.url().should('include', '/tecnicosView');
  });
  // it('Verifica la navegación a estadísticasView', () => {
    
  //   // Haz clic en el enlace a estadísticasView
  //     cy.get('.bloque-estadiscicas a').click();
  //    // Espera a que la URL cambie a /estadisticasView 
  //    cy.url().should('include', '/estadisticasView');
  //   });
});