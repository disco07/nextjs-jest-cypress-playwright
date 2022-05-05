/// <reference types="cypress" />

describe('Navigation ', () => {
    it('should calculate operation on page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        cy.get('input[name=number1]').type("9")

        cy.get('input[name=number2]').type("3")

        cy.get('.addition').click()
        cy.get('.multiplication').click()
        cy.get('.division').click()
    })
})