import BasePage from "./BasePage";

export default class CartPage extends BasePage {

  private checkoutButton = '[data-test="checkout"]'

  constructor() {
    super()
  }

  clickCheckout() {
    cy.get(this.checkoutButton).click()
  }

  checkUrl() {
    cy.url().should('include', `cart.html`)
  }
}