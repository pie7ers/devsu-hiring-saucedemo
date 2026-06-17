import BasePage from "./BasePage"

export default class LoginPage extends BasePage {
  private readonly usernameInput = '[data-test="username"]';
  private readonly passwordInput = '[data-test="password"]';
  private readonly loginButton = '[data-test="login-button"]';
  private readonly errorMessage = '[data-test="error"]';
  readonly errorMessageLoginText = {
    wrongCredentials: 'Epic sadface: Username and password do not match any user in this service',
    lockedOutUser: 'Epic sadface: Sorry, this user has been locked out.',
  }

  constructor() {
    super();
  }

  login(user: string, password: string,) {
    cy.get(this.usernameInput).type(user)
    cy.get(this.passwordInput).type(password)
    this.takeScreenshot('1-login-data-filled')
    cy.get(this.loginButton).click()
  }

  assertionLoginSuccess() {
    cy.url().should('include', '/inventory.html')
  }

  assertionLoginError(expectedTextError: string) {
    cy.get(this.errorMessage).should('contain.text', expectedTextError)
  }
}
