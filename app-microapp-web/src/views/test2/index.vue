<template>
  <div class="app-container">
    <p>应用间跳转</p>
    <el-button type="primary" @click="goBackHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  methods: {
    goBackHome() {
      history.pushState({}, '', '/')
    },
  },
}
</script>
