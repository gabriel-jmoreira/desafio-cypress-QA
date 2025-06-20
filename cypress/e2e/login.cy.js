describe('Cenários de Login - EBAC Store', () => {

  it('deve exibir mensagem de erro ao usar e-mail inválido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');

    cy.get('#username').type('naoexiste@teste.com');
    cy.get('#password').type('454622Gb@');
    cy.get('.woocommerce-form > .button').click();

    cy.get('.woocommerce-error')
      .should('contain', 'Endereço de e-mail desconhecido');
  });

  it('deve exibir erro ao usar senha incorreta com e-mail válido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  
    cy.get('#username').type('g.quadrado@outlook.com');
    cy.get('#password').type('senhaincorreta');
    cy.get('.woocommerce-form > .button').click();
  
    cy.get('.woocommerce-error')
      .should('contain', 'A senha fornecida para o e-mail')
      .and('contain', 'está incorreta');
  });
  

  it('deve realizar login com sucesso com e-mail e senha válidos', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');

    cy.get('#username').type('g.quadrado@outlook.com'); // altere se necessário
    cy.get('#password').type('454622Gb@'); // altere se necessário
    cy.get('.woocommerce-form > .button').click();

    // Verifica se logou com sucesso
    cy.url().should('include', '/minha-conta/');
    cy.get('body').should('contain', 'Olá');
  });

});

