it('titles are correct', () => {
    const page = cy.visit('http://localhost:4321/persimmon-demo');
    page.get('h1').should('have.text', 'Find your new Persimmon home');
});