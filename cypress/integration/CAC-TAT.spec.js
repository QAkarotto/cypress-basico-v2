/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('../src/index.html')
})

describe('Central de Atendimento ao Cliente TAT', function () {
  it('verifica o título da aplicação', function () {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', function () {
    cy.get('#firstName').type('Goku')
    cy.get('#lastName').type('QA')
    cy.get('#email').type('qakarotto@gmail.com')
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus rutrum malesuada. Nam a leo lacinia, facilisis diam quis, aliquam odio. Cras id orci eget leo mollis dapibus. Suspendisse egestas sem sit amet risus varius porttitor. Vestibulum eleifend, ligula in ultricies pretium, ipsum ante hendrerit lectus, at ultrices est quam ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis quis tincidunt augue. Vivamus id neque est. Proin at aliquam mi. Sed dui arcu, vehicula sit amet accumsan quis, tristique vitae lacus. Suspendisse consequat augue nec eros gravida elementum. Phasellus eget nisl nisl. Curabitur efficitur libero ac lectus tempus, in vehicula mi mattis. Suspendisse dignissim facilisis dolor, at lobortis felis laoreet non. Duis viverra ante ipsum, nec ullamcorper arcu mattis porttitor. Donec vulputate, massa sagittis accumsan gravida, tellus dolor maximus ligula, a hendrerit ex justo vel dui. Proin eget sapien neque. Mauris lobortis dui id venenatis porttitor. Vestibulum a diam varius, mollis nisl ac, placerat diam. Integer non arcu nec felis posuere tempus id in velit. Fusce gravida elit vitae nunc feugiat elementum. Curabitur varius quam ut odio tincidunt laoreet. Maecenas eget lectus gravida, rhoncus metus placerat, pulvinar enim. Etiam sit amet volutpat libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sodales nunc quis malesuada varius. Curabitur eu euismod velit. Fusce iaculis consequat odio ac gravida. Nunc accumsan ultrices augue in vulputate. Sed fermentum vulputate metus, ut tincidunt quam posuere quis. Curabitur sollicitudin nunc leo, et accumsan ante dignissim quis. Maecenas quis sapien euismod, vulputate ipsum dictum, pharetra nibh. Nunc sed justo dolor. Phasellus a mauris vitae felis lobortis condimentum. Quisque laoreet efficitur lacus sit amet sollicitudin. Quisque eget justo erat. Suspendisse egestas dolor sit amet aliquet laoreet. Aenean porttitor mi at neque ultricies pellentesque. Fusce gravida consectetur lorem eget rutrum. Mauris dapibus aliquam ipsum at mattis. Suspendisse quis libero posuere, facilisis purus sit amet, fermentum turpis.', { delay: 0 })
    cy.get('.button').click().should('be.visible', '')
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
    cy.get('#firstName').type('Goku')
    cy.get('#lastName').type('QA')
    cy.get('#email').type('wrong@gmail')
    cy.get('#open-text-area').type('Teste erro')
    cy.get('.button').click().should('be.visible', '')
    cy.get('.error').should('be.visible')
  })

  it('telefone aceita apenas números', function () {
    cy.get('#phone').type('String').should('have.value', '')

  })

  it('exibe mensagem de erro ao submeter o formulário sem telefone quando telefone é obrigatório', function () {
    cy.get('#firstName').type('Goku')
    cy.get('#lastName').type('QA')
    cy.get('#email').type('wrong@gmail')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste erro')
    cy.get('.button').click().should('be.visible', '')
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa campos nome, sobrenome, email e telefone', function () {
    cy.get('#firstName').type('Goku').should('have.value', 'Goku').clear('').should('have.value', '')
    cy.get('#lastName').type('QA').should('have.value', 'QA')
    cy.get('#lastName').clear('').should('have.value', '')
    cy.get('#email').type('qakarotto@gmail.com').should('have.value', 'qakarotto@gmail.com')
    cy.get('#email').clear('').should('have.value', '')
    cy.get('#phone').type(4399999999).should('have.value', 4399999999)
    cy.get('#phone').clear('').should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem campos obrigatórios', function () {
    cy.get('.button').click().should('be.visible', '')
    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', function () {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.button')
      .click()
      .should('be.visible', '')
    cy.get('.success')
      .should('be.visible')
  })

  it('envia o formuário com sucesso usando o comando contains', function () {
    cy.fillMandatoryFieldsAndSubmit()
    cy.contains('.button', 'Enviar')
      .click()
      .should('be.visible', '')
    cy.get('.success')
      .should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', function () {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', function () {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', function () {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', function () {
    cy.get('[type="radio"][value="feedback"]')
      .check()
      .should('have.value', 'feedback')
  })

  it('marca cada tipo de atendimento', function () {
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function ($radio) {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
  })

  it('marca ambos checkboxes, depois desmarca o último', function () {
    cy.get('input[type="checkbox"]')
      .as('checkboxes')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })

  it('seleciona um arquivo da pasta fixtures', function () {
    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('cypress/fixtures/example.json')
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', function () {
    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function () {
    cy.fixture('example.json').as('exampleFile')
    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('@exampleFile')
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function () {
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicanco no link', function () {
    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()
      
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
  })

})