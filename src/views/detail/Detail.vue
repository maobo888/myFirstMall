<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
export default {
  name: "Detail",
  data() {
    return {
      iid: 666
    }
  },
  components: {
    DetailNavBar
  },
  activated() {
    // 1.保存传入的iid
    this.iid = this.$route.params.id

    // 2.根据iid请求相应数据

  }
}
</script>

<style scoped>

</style>
