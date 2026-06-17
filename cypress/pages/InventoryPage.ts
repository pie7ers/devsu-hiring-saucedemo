import BasePage from "./BasePage"
import productsList from "../fixtures/productsList"

export default class InventoryPage extends BasePage {
  private title = '[data-test="title"]'
  private sortSelect = '[data-test="product-sort-container"]'
  private products = productsList

  addProductToCart(product: keyof typeof this.products) {
    cy.get(this.products[`${product}`].selectors.addProductButtonCart).click()
  }

  checkUrl() {
    cy.url().should('include', `inventory.html`)
  }

}