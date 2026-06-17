export default class BasePage {

  constructor() { }

  visit(path?: string) {
    cy.visit(path ? `/${path}` : '/')
  }

  takeScreenshot(name: string) {
    const date = new Date().toISOString().slice(0, 19)
      .replace('T', '_')
      .replaceAll(':', '-')
    Cypress.env("ENABLE_SCREENSHOTS") === "1"
      ? cy.screenshot(`${name}-${date}`, { capture: 'viewport' })
      : null
  }
}