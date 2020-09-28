<template>
  <div id="detail">
    <detail-nav-bar ref="detailnavbar" @titleClick="titleClick"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper class="detail-swiper"
                     :top-images="topImages">
      </detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo"
                         @imageLoad="imageLoad"/>
      <detail-param-info ref="param"
                         :paramInfo="paramInfo"/>
      <detail-comment-info ref="comment"
                           :commentInfo="commentInfo"/>
      <good-list ref="recommend"
                 :goods="recommends"
                 @detailItemImgLoad="goodsImageLoad"/>
    </scroll>
    <back-top @click.native="backClick"
              v-show="isShowBackTop"/>
    <detail-button-bar/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailButtonBar from "./childComps/DetailButtonBar";

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'

import Scroll from "components/common/scroll/Scroll";
import GoodList from "components/content/goods/GoodList";
import {debounce} from "../../common/utils";
import BackTop from "components/content/backTop/BackTop";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBackTop: false, //是否展示回到顶部按钮
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailButtonBar,
    GoodList,
    Scroll,
    BackTop
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
      // 6.获取评论信息
      if(result.rate.cRate != 0){
        this.commentInfo = result.rate.list[0]
      }
      // 7.给getThemeTopY赋值
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(-this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(-Number.MAX_VALUE)
      })
    })

    getRecommend().then(res => {
      this.recommends = res.data.list
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    goodsImageLoad(){
      this.$refs.scroll.refresh()
    },
    titleClick(index){
      switch (index){
        case 0: {
          this.$refs.scroll.scrollTo(0,this.themeTopYs[index]);
          break;
        }
        case 1:{
          this.$refs.scroll.scrollTo(0,this.themeTopYs[index]);
          break;
        }
        case 2:{
          this.$refs.scroll.scrollTo(0,this.themeTopYs[index]);
          break;
        }
        case 3:{
          this.$refs.scroll.scrollTo(0,this.themeTopYs[index]);
          break;
        }
      }
    },
    contentScroll(position){
      // console.log(position);
      // 1.获取Y值
      const positionY = position.y
      let length = this.themeTopYs.length
      // 2.positionY和主题中的值进行对比
      // [0, -7938, -9120, -9452, 负无穷]
      /*
      * positionY 在 0 和 -7938 之间，index = 0
      * positionY 在 -7938 和 -9120 之间，index = 1
      * positionY 在 9120 和 9452 之间，index = 2
      * positionY 在 9452 和 负无穷 之间，index = 3
      * */
      for(let i = 0; i < this.themeTopYs.length-1; i++){
        // if(positionY < this.themeTopYs[i] && positionY > this.themeTopYs[i+1]){
        //   console.log(i);
        // }
        // if(this.currentIndex !== i && ((i < length - 1 && positionY <= this.themeTopYs[i] && positionY >= this.themeTopYs[i+1])
        //   || (i == length - 1 && positionY <= this.themeTopYs[i]))){
        //   this.currentIndex = i;
        //   console.log(this.currentIndex);
        //   this.$refs.detailnavbar.currentIndex = this.currentIndex
        // }
        if (this.currentIndex !== i &&
          (positionY <= this.themeTopYs[i] && positionY >= this.themeTopYs[i+1])){
          this.currentIndex = i;
          this.$refs.detailnavbar.currentIndex = this.currentIndex
        }
      }
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)//把内容滚动到指定的坐标
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
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
