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
        variantColor: 'green'    
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],// still array of variants
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  } 
})