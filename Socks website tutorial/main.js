var app= new Vue({ 
	el: '#app', 
	data: { 
		product: 'Socks', //example of attribute
		image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',  // or 'vmSocks-green-onWhite.png',
		inStock: false,
		details: ['80% cotton', '20% polyester', 'Gender-neutral'], //array of details
	variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    }, 
	
    updateProduct(variantImage) {
      this.image = variantImage
    }, 
  }
})