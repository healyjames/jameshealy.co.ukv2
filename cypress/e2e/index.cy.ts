describe('Persimmon search tests', () => {
    it('titles are correct', () => {
        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('h1').should('have.text', 'Find your new Persimmon home');
    });

    it('search component rendered', () => {
        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('[data-testid="search-bar"]').should('exist');
    })

    it('no results returned for two or less characters typed', () => {
        cy.intercept('GET', 'https://www.persimmonhomes.com/umbraco/Api/*').as('apiRequest');

        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('[data-testid="search-bar-input"]').type('Ne');

        cy.wait(500); // Wait for any possible requests to fire

        cy.get('@apiRequest.all').should('have.length', 0);
    });

    it('api endpoint is healthy', () => {
        cy.intercept('GET', 'https://www.persimmonhomes.com/umbraco/Api/*').as('apiRequest');

        const page = cy.visit('http://localhost:4321/persimmon-demo');
        page.get('[data-testid="search-bar-input"]').type('Cheshire');

        cy.wait(500); // Wait for any possible requests to fire

        cy.wait('@apiRequest').its('response.statusCode').should('eq', 200);
    });

    // TODO: Write test to:
    // 1. make sure data is return
    // 2. make sure we handle no data being returned
    // 3. make sure we handle non 200 codes e.g. errors return from the api
});