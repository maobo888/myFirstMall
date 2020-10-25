import BackTop from "components/content/backTop/BackTop";
import {NEW, POP, SELL} from "../../../mall/src/common/const";

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

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
