describe('Teste prátivo Webjump', () => {
	let selectors;

	before(() => {
    	cy.fixture('page/elements').then(elements => {
            selectors = elements;
        });
  	})

	it('Validar ausência dos botões "One", "Two" e "Four"', () => {
		cy.visit('/');
		cy.get(selectors.btn_one).click();
		cy.get(selectors.btn_two).click();
		cy.get(selectors.btn_four).click();

		cy.get(selectors.btn_one).should('not.be.visible');
		cy.get(selectors.btn_two).should('not.be.visible');
		cy.get(selectors.btn_four).should('not.be.visible');
	})

	it('Validar ausência dos botões "One", "Two" e "Four" do "IFRAME BUTTONS"', () => {
		cy.visit('/');
		cy.get('iframe').then($iframe => {
			const $body = $iframe.contents().find('body');

			cy.wrap($body).find(selectors.btn_one).click();
			cy.wrap($body).find(selectors.btn_two).click();
			cy.wrap($body).find(selectors.btn_four).click();

			cy.wrap($body).find(selectors.btn_one).should('not.be.visible');
			cy.wrap($body).find(selectors.btn_two).should('not.be.visible');
			cy.wrap($body).find(selectors.btn_four).should('not.be.visible');
		})
	})

	it('Preencher campo "YourFirstName", clicar no botão "One", checkar opção "Option Three", selecionar opção "ExampleTwo" e validar imagem do Selenium', () => {
		cy.visit('/');
		cy.get(selectors.firstName).type('Eder');
		cy.get(selectors.btn_one).click();
		cy.get(selectors.optionThree).check();
		cy.get(selectors.selectBox).select('ExampleTwo');
		cy.get(selectors.imgSelenium).should('be.visible');
	})
})