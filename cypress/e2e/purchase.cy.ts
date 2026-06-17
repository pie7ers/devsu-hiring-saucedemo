import LoginPage from "../pages/LoginPage"
import users from "../fixtures/users.json"
import InventoryPage from "../pages/InventoryPage"
import Header from "../pages/Header"
import CartPage from "../pages/CartPage"
import CheckoutStepOne from "../pages/CheckoutStepOne"
import CheckoutStepTwo from "../pages/CheckoutStepTwo"
import CheckoutComplete from "../pages/CheckoutComplete"

describe("E2E Purchase", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let header: Header;
  let cartPage: CartPage;
  let checkoutStepOne: CheckoutStepOne;
  let checkoutStepTwo: CheckoutStepTwo;
  let checkoutComplete: CheckoutComplete;

  beforeEach(() => {
    loginPage = new LoginPage()
    inventoryPage = new InventoryPage()
    header = new Header()
    cartPage = new CartPage()
    checkoutStepOne = new CheckoutStepOne()
    checkoutStepTwo = new CheckoutStepTwo()
    checkoutComplete = new CheckoutComplete()
    loginPage.visit()
  })

  it("Successful Purchase", () => {
    loginPage.login(users.standardUser.username, users.standardUser.password)
    loginPage.assertionLoginSuccess()
    inventoryPage.checkUrl()
    inventoryPage.takeScreenshot('2-inventory-page')
    inventoryPage.addProductToCart('backpack')
    inventoryPage.addProductToCart('bikeLight')
    inventoryPage.takeScreenshot('3-products-added')
    header.goToCart()
    cartPage.checkUrl()
    cartPage.takeScreenshot('4-cart-page')
    cartPage.clickCheckout()
    checkoutStepOne.checkUrl()
    checkoutStepOne.takeScreenshot('5-checkout-step-one')
    checkoutStepOne.fillInformation(
      'John',
      'Doe',
      '12345'
    )
    checkoutStepOne.takeScreenshot('6-checkout-step-one-filled')
    checkoutStepOne.clickContinue()
    checkoutStepTwo.checkUrl()
    checkoutStepTwo.takeScreenshot('7-checkout-step-two')
    checkoutStepTwo.checkElementsVisibility()
    checkoutStepTwo.checkTotal()
    checkoutStepTwo.clickFinishButton()
    checkoutComplete.takeScreenshot('9-checkout-complete')
    checkoutComplete.checkUrl()
    checkoutComplete.checkMesagges()
    checkoutComplete.clickBackToProductsButton()
    inventoryPage.checkUrl()
    inventoryPage.takeScreenshot('10-inventory-page-after-purchase')
  })
})