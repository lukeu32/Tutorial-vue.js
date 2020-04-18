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
              <h1>{{ product }}</h1>
              <p v-if="inStock">In Stock</p>
              <p v-else>Out of Stock</p>
              <p>Shipping: {{ shipping }}</p>

              <ul>
                <li v-for="detail in details">{{ detail }}</li>
              </ul>

              <div class="color-box"
                   v-for="(variant, index) in variants" 
                   :key="variant.variantId"
                   :style="{ backgroundColor: variant.variantColor }"
                   @mouseover="updateProduct(index)"
                   >
              </div> 

              <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }"
                >
              Add to cart
              </button>

              <button @click="removeFromCart" 
                >
              Remove from cart
              </button>

           </div>  

        </div>
       `,
	   data() { //Since data is now a function that returns a data object, each component will definitely have its own data. If data weren’t a function, each product component would be sharing the same data everywhere it was used, defeating the purpose of it being a reusable component.
      return {
          product: 'Socks',
          brand: 'Vue Mastery',
          selectedVariant: 0,
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
          ]
      }
    },
      methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId) //Now, along with the announcement that the click event occurred, the id of the product that was just added to the cart is sent as well.
        },
        updateProduct: function(index) {  
            this.selectedVariant = index
        },
        removeFromCart: function() {
             this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        }
      },
      computed: {
          title() {
              return this.brand + ' ' + this.product  
          },
          image(){
              return this.variants[this.selectedVariant].variantImage
          },
          inStock(){
              return this.variants[this.selectedVariant].variantQuantity
          },
          shipping() {
            if (this.premium) {
              return "Free"
            }
              return 2.99
          }
      }
  })
  
  var app = new Vue({
      el: '#app',
      data: {
        premium: true,
        cart: [] //Instead of just incrementing the number of cart, we can now make cart an array
      },
      methods: {
        updateCart(id) {
          this.cart.push(id)
        },
        removeItem(id) {
          for(var i = this.cart.length - 1; i >= 0; i--) {
            if (this.cart[i] === id) {
               this.cart.splice(i, 1);
            }
          }
        }
      }
  })
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	