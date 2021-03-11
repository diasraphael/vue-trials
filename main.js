const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Woollen socks used to wear in winter',
      url: 'http://vuemastery.com',
      greenSocks: './assets/images/socks_green.jpg',
      blueSocks: './assets/images/socks_blue.jpg',
      onSale: false,
      inventory: 3,
      sizes: ['small', 'medium', 'large'],
      colors: [
        { color: 'green', id: '501' },
        { color: 'blue', id: '502' },
      ],
      cart: 0,
      variant: true,
      brand: 'Jack and Jones',
    };
  },
  methods: {
    increment() {
      this.cart += 1;
    },
    decrement() {
      this.cart -= 1;
    },
    changeColor(color) {
      this.variant = color.color === 'green' ? true : false;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
  },
});
