import BasePage from "./BasePage"

export default class Header extends BasePage {
  private burgerMenuButton = '[id="react-burger-menu-btn"]'
  private crossBurgerMenuButton = '[id="react-burger-cross-btn"]'
  private inventorySidebarLink = '[id="inventory_sidebar_link"]'
  private aboutSidebarLink = '[id="about_sidebar_link"]'
  private logoutSidebarLink = '[id="logout_sidebar_link"]'
  private resetSidebarLink = '[id="reset_sidebar_link"]'
  private cartButton = '[data-test="shopping-cart-link"]'

  constructor() {
    super()
  }

  goToCart() {
    cy.get(this.cartButton).click()
  }

}