<template>
  <div class="container">
    <div class="title">404</div>
    <div class="tip">页面不存在 <router-link to="/">返回首页</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin-top: 100px;
  text-align: center;

  .title {
    font-size: 100px;
    font-weight: 200;
    color: #666;
  }

  .tip {
    font-size: 18px;
    font-weight: 200;
    color: #666;
  }
}
</style>
