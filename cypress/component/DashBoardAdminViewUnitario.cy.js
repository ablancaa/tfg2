import DaschBoardAdminView from '../../src/views/DaschBoardAdminView.vue'
beforeEach(() => {
  cy.mount(<DaschBoardAdminView/>);
})
describe('DashBoardAdminView.vue [Unitario]', () => {
  it('Renderización de vista DashBoardAdmin.vue', () => {
    cy.mount(<DaschBoardAdminView/>);
  })

  it('Verifica la presencia de contadores', () => {
    // Comprueba si los contadores se muestran correctamente
    cy.get('.cuadrado-numerador').should('exist');
    cy.get('.num-contador').should('exist');
    cy.get('.circulo-rojo').should('exist');
    cy.get('.circulo-verde').should('exist');
    cy.get('.circulo-naranja').should('exist');

    cy.get('.cuadrado-numerador').should('be.visible');
    cy.get('.num-contador').should('be.visible');
    cy.get('.circulo-rojo').should('be.visible');
    cy.get('.circulo-verde').should('be.visible');
    cy.get('.circulo-naranja').should('be.visible');
    
  })

  it('Comrpueba si cargan los iconos', () => {
    cy.get('[alt = "Imagen tickets"]').should('exist');
    cy.get('[alt = "Imagen tickets"]').should('be.visible');
  })


})