<template>
  <div class="cart">
<!--    导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

<!--    商品列表-->
    <scroll class="content"
            :probeType="3">
      <cart-list></cart-list>
    </scroll>

<!--    底部汇总-->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import Scroll from "components/common/scroll/Scroll";

import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    Scroll
  },
  computed:{
    // cartLength() {
    //   return this.$store.getters.cartLength
    // }
    ...mapGetters([
      'cartLength'
    ])
    // ...mapGetters({
    //   length:'cartLength'
    // })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: white;
  /*font-weight: 700;*//*加粗*/
}

.cart {
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
