// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Goku')
    cy.get('#lastName').type('QA')
    cy.get('#email').type('qakarotto@gmail.com')
    cy.get('#open-text-area').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus rutrum malesuada. Nam a leo lacinia, facilisis diam quis, aliquam odio. Cras id orci eget leo mollis dapibus. Suspendisse egestas sem sit amet risus varius porttitor. Vestibulum eleifend, ligula in ultricies pretium, ipsum ante hendrerit lectus, at ultrices est quam ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis quis tincidunt augue. Vivamus id neque est. Proin at aliquam mi. Sed dui arcu, vehicula sit amet accumsan quis, tristique vitae lacus. Suspendisse consequat augue nec eros gravida elementum. Phasellus eget nisl nisl. Curabitur efficitur libero ac lectus tempus, in vehicula mi mattis. Suspendisse dignissim facilisis dolor, at lobortis felis laoreet non. Duis viverra ante ipsum, nec ullamcorper arcu mattis porttitor. Donec vulputate, massa sagittis accumsan gravida, tellus dolor maximus ligula, a hendrerit ex justo vel dui. Proin eget sapien neque. Mauris lobortis dui id venenatis porttitor. Vestibulum a diam varius, mollis nisl ac, placerat diam. Integer non arcu nec felis posuere tempus id in velit. Fusce gravida elit vitae nunc feugiat elementum. Curabitur varius quam ut odio tincidunt laoreet. Maecenas eget lectus gravida, rhoncus metus placerat, pulvinar enim. Etiam sit amet volutpat libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sodales nunc quis malesuada varius. Curabitur eu euismod velit. Fusce iaculis consequat odio ac gravida. Nunc accumsan ultrices augue in vulputate. Sed fermentum vulputate metus, ut tincidunt quam posuere quis. Curabitur sollicitudin nunc leo, et accumsan ante dignissim quis. Maecenas quis sapien euismod, vulputate ipsum dictum, pharetra nibh. Nunc sed justo dolor. Phasellus a mauris vitae felis lobortis condimentum. Quisque laoreet efficitur lacus sit amet sollicitudin. Quisque eget justo erat. Suspendisse egestas dolor sit amet aliquet laoreet. Aenean porttitor mi at neque ultricies pellentesque. Fusce gravida consectetur lorem eget rutrum. Mauris dapibus aliquam ipsum at mattis. Suspendisse quis libero posuere, facilisis purus sit amet, fermentum turpis.', { delay: 0 })
})
