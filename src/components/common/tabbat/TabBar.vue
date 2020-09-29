<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  display: flex; /*规定元素应该生成的框的类型*/
  background-color: #f6f6f6;
  z-index:auto;

  position: fixed; /*规定元素的定位类型*/
  left: 0;
  right: 0;
  bottom: 0;

  /*导航栏上方阴影*/
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .09);
}
</style>
