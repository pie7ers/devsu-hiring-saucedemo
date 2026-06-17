export default {
  backpack: {
    id: '4',
    name: 'Sauce Labs Backpack',
    description: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    price: '$29.99',
    selectors: {
      addProductButtonCart: '[data-test="add-to-cart-sauce-labs-backpack"]',
      removeProductButtonCart: '[data-test="remove-sauce-labs-backpack"]',
    }
  },
  bikeLight: {
    id: '0',
    name: 'Sauce Labs Bike Light',
    description: `A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.`,
    price: '$9.99',
    selectors: {
      addProductButtonCart: '[data-test="add-to-cart-sauce-labs-bike-light"]',
      removeProductButtonCart: '[data-test="remove-sauce-labs-bike-light"]',
    }
  }
}
