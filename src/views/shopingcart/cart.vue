<template>
  <div class='cart-container'>
    Your Cart
    <p v-if="!cartProducts.length">Please add some products to cart.</p>
    <ul v-else>
      <li v-for="(item,i) in cartProducts"
          :key="i">
        {{item.title}}-{{item.price}}*{{item.quantity}}
      </li>
    </ul>
    <p>Total:{{cartTotalPrice}}</p>
    <button :disabled='cartProducts.length==0||checkoutStatus=="successful"'
            @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">checkoutStatus：{{checkoutStatus}}</p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {},
  props: [],
  data: function() {
    return {
  
    };
  },
  computed: {
    ...mapState("carts", ["checkoutStatus"]),
    ...mapGetters("carts", ["cartProducts","cartTotalPrice"])
  },
  created: function() {},
  methods: {
    checkout() {
      this.$store.dispatch("carts/checkout");
      
    }
  }
};
</script>
<style>
</style>