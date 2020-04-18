var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0, //Instead of having image in our data, let’s replace it with selectedVariant, which we’ll initialize as 0. Because we’ll be setting this based on the index that we hover on.
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: 'green',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            variantQuantity: 10     
          },
          {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
            variantQuantity: 0     
          }
        ],
        cart: 0,
        onSale: true
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {  
            this.selectedVariant = index //In our updateProduct method, we’ll pass in the index, and instead of updating this.image, we’ll update this.selectedVariant with the index of whichever variant is currently hovered on. Let’s put a console.log in here too, to make sure it’s working.
			console.log(index) // optioonal, show the value of index in console
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product  
        },
		//We want brand and product to be combined into one string. In other words, we want to display “Vue Mastery Socks” in our h1 instead of just “Socks.
        image(){
            return this.variants[this.selectedVariant].variantImage
        },	//Inside, we are returning this.variants, which is our array of variants, and we are using our selectedVariant, which is either 0 or 1, to target the first or second element in that array, then we’re using dot notation to target its image.
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
          if (this.onSale) {
            return this.brand + ' ' + this.product + ' are on sale!'
          } 
            return  this.brand + ' ' + this.product + ' are not on sale'
        }
    }
  })
  
  
  //Computed properties are cached, meaning the result is saved until its dependencies change. So when quantity changes, the cache will be cleared and the **next time you access the value of inStock , it will return a fresh result, and cache that result.

  //With that in mind, it’s more efficient to use a computed property rather than a method for an expensive operation that you don’t want to re-run every time you access it.

  //It is also important to remember that you should not be mutating your data model from within a computed property. You are merely computing values based on other values. Keep these functions pure.