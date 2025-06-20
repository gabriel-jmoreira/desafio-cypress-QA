describe('Fluxo de Compra - EBAC Store', () => {

    it('deve adicionar um produto ao carrinho com sucesso', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/');
  
      cy.get('.product-block').first().click();
  
      cy.get('.button-variable-item-S').should('be.visible').click();
      cy.get('.button-variable-item-Red').should('be.visible').click();
  
      cy.get('.single_add_to_cart_button').should('be.visible').click();
  
      cy.get('.woocommerce-message')
        .should('be.visible')
        .and('contain', 'foi adicionado no seu carrinho');
    });
  
    it('deve finalizar a compra com sucesso', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  
      cy.get('#username').type('teste@teste.com');
      cy.get('#password').type('123456');
      cy.get('.woocommerce-form > .button').click();
  
      cy.visit('http://lojaebac.ebaconline.art.br/');
      cy.get('.product-block').first().click();
  
      cy.get('.button-variable-item-S').should('be.visible').click();
      cy.get('.button-variable-item-Red').should('be.visible').click();
  
      cy.get('.single_add_to_cart_button').should('be.visible').click();
  
      cy.get('.woocommerce-message')
        .should('be.visible')
        .and('contain', 'foi adicionado no seu carrinho');
  
      cy.visit('http://lojaebac.ebaconline.art.br/carrinho/');
      cy.get('.checkout-button').should('be.visible').click();
  
      cy.get('#billing_first_name').type('Gabriel');
      cy.get('#billing_last_name').type('QA');
      cy.get('#billing_address_1').type('Rua Aimara, 79');
      cy.get('#billing_city').type('Rio de Janeiro');
      cy.get('#billing_postcode').type('21031000');
      cy.get('#billing_phone').type('+5521967732088');
      cy.get('#billing_email').clear().type('g.quadrado@outlook.com');
      cy.get('#billing_state').select('RJ', { force: true });
  
      cy.get('#terms').check();
      cy.get('#place_order').should('not.be.disabled').click();
  
      // Aguarda redirecionamento para a página de sucesso (URL atualizada)
      cy.url().should('include', '/order-received/');
  
      // Verifica mensagem de sucesso
      cy.get('.woocommerce-thankyou-order-received')
        .should('be.visible')
        .and('contain', 'Obrigado. Seu pedido foi recebido.');
  
      // Acessa diretamente /checkout/ e valida novamente (opcional)
      cy.get('body').should('contain', 'Obrigado. Seu pedido foi recebido.');
  
      // Screenshot final para evidência
      cy.screenshot('pedido-finalizado');
    });
  
    it('deve exibir alerta ao tentar adicionar produto sem selecionar variações', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/');
  
      cy.get('.product-block').first().click();
  
      // Captura o alerta nativo
      cy.on('window:alert', (msg) => {
        expect(msg).to.contain('Selecione uma das opções do produto');
      });
  
      cy.get('.single_add_to_cart_button').click();
    });
  
  });
  