// cypress/integration/ticket_view_spec.js

// Abre la aplicación antes de cada prueba
beforeEach(() => {
  
  cy.visit('http://localhost:8080/?#/ticketDetail/darca0s580f/title/Prueba%20desde%20Ernesto/description/Prueba%20desde%20Ernesto/category/Asistencia/state/procces/priority/Urgente/date/6%2F12%2F2023/idUser/pedqi4ot042/technical/d1i08cedqp6/comments/[%7B%22comment%22:%22El%20ticket%20ha%20sido%20guardado%20correctamente,%20lo%20antes%20posible%20se%20le%20asignar%C3%A1%20un%20t%C3%A9cnico%20para%20su%20resoluci%C3%B3n%22,%22email%22:%22No%20Asignado%20a%20t%C3%A9cnico%22,%22date%22:%226%2F12%2F2023%22%7D,%7B%22date%22:%226%2F12%2F2023%22,%22comment%22:%22Un%20t%C3%A9cnico%20ha%20sido%20asignado%20a%20su%20incidencia,%20pronto%20recibir%C3%A1%20informaci%C3%B3n%20de%20su%20parte,%20Gracias%22,%22email%22:%22Mensaje%20del%20sistema%22%7D]')  // Asegúrate de reemplazar con la ruta correcta de tu componente
  
});

describe('Pruebas del componente Ticket Detail View', () => {
  
  it('Debe mostrar el número de ticket correctamente', () => {
    cy.get('.nticket').should('exist');  // Verificar que el elemento con la clase 'nticket' exista
    cy.get('.nticket').contains('darca0s580f');   // Verifica que nº de ticket esté presente en el elemento con la clase 'nticket'
    
  });

 
  it('Debe mostrar la información Prioridad', () => {
    cy.get('.flex-container').contains('Prioridad:').should('exist');  // Verifica que el elemento exista
  });

  it('Debe mostrar la asignación de técnico correctamente', () => {
    cy.get('.flex-container').contains('Asignado:').should('exist');
  });

  it('Debe mostrar el estado correctamente', () => {
    cy.get('.flex-container').contains('Estado:').should('exist');
  });
  
   it('Debe mostrar la información del usuario correctamente', () => {
     cy.get('.informacion').should('exist');  // Verifica que el elemento con la clase 'informacion' exista
   
   });

  


  // Agrega más pruebas según sea necesario
  // it('Debe permitir la asignación de técnico por parte de un administrador', () => {
  //   // Simula el inicio de sesión como administrador (ajusta según tu lógica de autenticación)
  //   cy.loginAsAdmin();

  //   // Haz clic en el botón para asignar técnico
  //   cy.get('.flex-container').contains('Asignado:').siblings('.flex-item').find('button').click();

  //   // Asegúrate de que el modal de asignación de técnico se muestre
  //   cy.get('.modal-assignment').should('be.visible');

  //   // Realiza la asignación de técnico (simulado, ajusta según tus necesidades)
  //   cy.get('.modal-assignment').contains('Nombre de Técnico').select('Técnico de Prueba');
  //   cy.get('.modal-assignment').contains('Asignar').click();

  //   // Verifica que el estado del ticket cambie a "active"
  //   cy.get('.flex-container').contains('Estado:').siblings('.flex-item').should('contain', 'Activo');
  // });

});
