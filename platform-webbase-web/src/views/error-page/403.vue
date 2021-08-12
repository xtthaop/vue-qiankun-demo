<template>
  <div class="container">
    <div class="title">403</div>
    <div class="tip">无权限访问页面 <router-link to="/">返回首页</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Page403'
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin-top: 100px;
  text-align: center;

  .title{
    font-size: 100px;
    font-weight: 200;
    color: #666;
  }

  .tip{
    font-size: 18px;
    font-weight: 200;
    color: #666;
  }
}
</style>
