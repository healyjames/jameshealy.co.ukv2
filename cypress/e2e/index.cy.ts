describe('Persimmon search tests', () => {
    it('titles are correct', () => {
        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('h1').should('have.text', 'Find your new Persimmon home');
    });

    it('search component rendered', () => {
        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('[data-testid="search-bar"]').should('exist');
    })
});