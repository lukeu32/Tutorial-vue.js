Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', { //The first argument is the name we choose for the component, and the second is an options object, similar to how we created our initial Vue instance.
	
	props: { //Props are essentially variables that are waiting to be filled with the data its parent sends down into it. 
		premium: {
			type: Boolean,
			required: true
		}
	},// We are specifying what props the product component is expecting to receive by adding a props object to our component.
	
	template: `
	  <div class="product">
        
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p>{{ sale }}</p>
	  <p>Shipping: {{ shipping }}</p>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>


        <div class="color-box"
             v-for="(variant, index) in variants" 
             :key="variant.variantId"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(index)" > <!--Now instead of passing in the variantImage, we’ll pass in the index. -->
        </div> 

        <button v-on:click="addToCart" 
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
          >
        Add to cart
        </button>

        <div class="cart">
          <p>Cart({{ cart }})</p>
        </div>

      </div>  
    
  </div>
	`,
	data() { //Since data is now a function that returns a data object, each component will definitely have its own data. If data weren’t a function, each product component would be sharing the same data everywhere it was used, defeating the purpose of it being a reusable component.
	return {
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
	}
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
        },
		shipping() {
			if(this.premium) {
				return "Free"
			}
			return 2.99
		}
    }
})
	
var app = new Vue({
    el: '#app',
	data: {
		premium: true
	}
    
  })
  