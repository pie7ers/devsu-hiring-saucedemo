import BasePage from "./BasePage";

export default class CheckoutStepOne extends BasePage {

  private firstNameInput = '[data-test="firstName"]'
  private lastNameInput = '[data-test="lastName"]'
  private postalCodeInput = '[data-test="postalCode"]'
  private continueButton = '[data-test="continue"]'

  constructor() {
    super()
  }

  fillInformation(firstName: string, lastName: string, postalCode: string) {
    cy.get(this.firstNameInput).type(firstName)
    cy.get(this.lastNameInput).type(lastName)
    cy.get(this.postalCodeInput).type(postalCode)
  }

  clickContinue() {
    cy.get(this.continueButton).click()
  }

  checkUrl() {
    cy.url().should('include', `checkout-step-one.html`)
  }
}