import BackTop from "components/content/backTop/BackTop";

export const MiXinBackTop = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowBackTop: false, //是否展示回到顶部按钮
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0)//把内容滚动到指定的坐标
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}
