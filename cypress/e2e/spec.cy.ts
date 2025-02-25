describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.bg-gradient-to-tl').click();
    cy.contains('Category').should('be.visible');

    cy.get('[href="/"]').click();
    cy.contains('Category').should('not.exist');
  });
});
