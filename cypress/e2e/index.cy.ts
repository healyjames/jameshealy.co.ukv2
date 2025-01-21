describe('Persimmon search tests', () => {
    it('titles are correct', () => {
        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('h1').should('have.text', 'Find your new Persimmon home');
    });

    it('search component rendered', () => {
        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('[data-testid="search-bar"]').should('exist');
    })

    it('no results returned for three or less characters typed', () => {
        cy.intercept('GET', 'https://www.persimmonhomes.com/umbraco/Api/*').as('apiRequest');

        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('[data-testid="search-bar-input"]').type('New');

        cy.wait(500); // Wait for any possible requests to fire

        cy.get('@apiRequest.all').should('have.length', 0);
    });
});