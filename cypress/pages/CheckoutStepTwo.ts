import BasePage from "./BasePage";

export default class CheckoutStepTwo extends BasePage {

  private finishButton = '[data-test="finish"]'
  private cartList = '[data-test="cart-list"]'
  private itemPrice = '[data-test="inventory-item-price"]'
  private paymentInfoLabel = '[data-test="payment-info-label"]'
  private paymentInfoValue = '[data-test="payment-info-value"]'
  private shippingInfoLabel = '[data-test="shipping-info-label"]'
  private shippingInfoValue = '[data-test="shipping-info-value"]'
  private subtotalValue = '[data-test="subtotal-label"]'
  private taxValue = '[data-test="tax-label"]'
  private totalValue = '[data-test="total-label"]'
  private taxRate: number = 0.08


  constructor() {
    super()
  }

  checkElementsVisibility() {
    cy.get(this.paymentInfoLabel).should('be.visible')
    cy.get(this.paymentInfoValue).should('be.visible')
    cy.get(this.shippingInfoLabel).should('be.visible')
    cy.get(this.shippingInfoValue).should('be.visible')
    cy.get(this.subtotalValue).should('be.visible')
    cy.get(this.taxValue).should('be.visible')
    cy.get(this.totalValue).should('be.visible')
    cy.get(this.finishButton).should('be.visible')
  }

  clickFinishButton() {
    cy.get(this.finishButton).click()
  }

  checkUrl() {
    cy.url().should('include', `checkout-step-two.html`)
  }

  getPricesFromCartList(): Cypress.Chainable<number[]> {
    return cy.get(this.cartList)
      .find(this.itemPrice)
      .then(($prices) => {
        return [...$prices].map((price) =>
          parseFloat(price.textContent!.replace('$', '')))
      })
  }

  calculateSubtotal(): Cypress.Chainable<number> {
    return this.getPricesFromCartList().then((prices) => {
      return prices.reduce((a, b) => a + b, 0)
    })
  }

  calculateTaxes(subtotal: number) {
    return subtotal * this.taxRate
  }

  calculateTotal(): Cypress.Chainable<number> {
    return this.calculateSubtotal().then((subtotal) => {
      const tax = this.calculateTaxes(subtotal)
      const total = subtotal + tax
      return parseFloat(total.toFixed(2))
    })
  }

  checkTotal() {
    this.calculateTotal().then((expectedTotal) => {
      cy.log("🚀 ~ CheckoutStepTwo ~ checkTotal ~ expectedTotal:", expectedTotal)
      cy.get(this.totalValue).should('contain', `$${expectedTotal}`)
    })
  }
}