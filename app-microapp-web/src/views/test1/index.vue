<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item>
        <el-input v-model="msg" style="width:360px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sendMsg">发送消息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    sendMsg() {
      console.log(this.msg)
    }
  }
}
</script>
