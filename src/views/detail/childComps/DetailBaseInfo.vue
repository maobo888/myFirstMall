<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object
    }
  }
}
</script>

<style scoped>
.base-info {
  margin-top: 15px; /*设置上外边距*/
  padding: 0 8px; /*设置4个内边距*/
  color: #999;
  border-bottom: 5px solid #f2f5f8; /*设置下边框的样式 width style color|solid:实线*/
}

.info-title {
  color: #222
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 23px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 10px;
  text-decoration: line-through;
}

.info-price .discount {
  margin-left: 10px;
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px; /*添加圆角边框*/
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  font-size: 13px;
  display: flex; /*规定元素应该生成的框的类型:弹性布局*/
  justify-content: space-between; /*元素在主轴（页面）上左右两端或者上下两端开始排列*/
  line-height: 30px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 12px;
  color: #333;
}

</style>
