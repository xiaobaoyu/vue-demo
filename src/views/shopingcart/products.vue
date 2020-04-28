<template>
  <div class='products-container'>
    <h2>Shopping Cart Example</h2>
    <h4>Products</h4>
    <ul>
      <!-- {{all}} -->
      <li v-for="item in all"
          :key="item.id">
        {{item.title}}--{{item.price | formatMoney }}
        <button :disabled='!item.inventory'
                @click="addToCart(item)">
          Add to cart
        </button>
      </li>

    </ul>

  </div>

</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  props: [],
  data: function() {
    return {
      allSelectedItems: []
    };
  },
  filters: {},
  computed: {
    ...mapState("products", ["all"])
  },
  created: function() {
    this.$store.dispatch("products/getAllProducts");
  },
  mounted() {},
  methods: {
    addToCart(item){
       this.$store.dispatch("carts/addProductToCart",item);
    }
  }
};
</script>
<style>
</style>