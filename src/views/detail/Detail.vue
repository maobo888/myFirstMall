<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper class="detail-swiper" :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :paramInfo="paramInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

import {getDetail, Goods, Shop, GoodsParam} from 'network/detail'

import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
  },
  created() {
    // 1.保存传入的iid,并去除字符串前的"iid:"
    this.iid = this.$route.params.id.substr(4)

    // 2.根据iid请求相应数据
    getDetail(this.iid).then(res => {
      const result = res.result
      // 1.获取顶部的图片轮播数据
      this.topImages = result.itemInfo.topImages
      // 2.获取商品信息的对象
      this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
      // 3.获取店铺信息的对象
      this.shop = new Shop(result.shopInfo)
      // 4.获取商品的详情
      this.detailInfo = result.detailInfo;
      // 5.获取商品的参数
      this.paramInfo = new GoodsParam(result.itemParams.info, result.itemParams.rule)
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 256px;
}
#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}

.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
