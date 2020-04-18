var app= new Vue({ 
	el: '#app', 
	data: { 
		product: 'Socks', //example of attribute
		image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',  // or 'vmSocks-green-onWhite.png',
		inStock: true,
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
	//Our button is listening for click events with the v-on directive, which triggers the addToCart method. That method lives within the methods property of the Vue instance as an anonymous function. The body of that function adds 1 to the value of this.cart. Because this refers to the data of the instance we’re currently in, our function is adding 1 to the value of cart, because this.cart is the cart inside our data property.

	//If we just said cart += 1 here, we’d get an error letting us know that “cart is not defined”, so we use this.cart to refer to the cart from this instance’s data.
	
    updateProduct(variantImage) {
      this.image = variantImage
    }, 
	//But here, we are updating the value of image, and its updated value is now the variantImage from the variant that was just hovered on. We passed that variant’s image into the updateProduct function from the event handler itself
	
	//When it’s called, variant.variantImage is passed in as variantImage and is used to update the value of this.image. As we just learned, this.image is image. So the value of image is now dynamically updating based on the variant that was hovered on.
    removeFromCart() {
      this.cart -= 1
    }
  }
})