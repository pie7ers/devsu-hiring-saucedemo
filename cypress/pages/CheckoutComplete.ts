import BasePage from "./BasePage";

export default class CheckoutComplete extends BasePage {

  private thankyouMessage = '[data-test="complete-header"]'
  private completeText = '[data-test="complete-text"]'
  private backToProductsButton = '[data-test="back-to-products"]'
  private thankyouMessageText = 'Thank you for your order!'
  private completeTextValue = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'

  constructor() {
    super()
  }

  checkUrl() {
    cy.url().should('include', `checkout-complete.html`)
  }

  checkMesagges() {
    cy.get(this.thankyouMessage).should('have.text', this.thankyouMessageText)
    cy.get(this.completeText).should('have.text', this.completeTextValue)
  }

  clickBackToProductsButton() {
    cy.get(this.backToProductsButton).click()
  }

}