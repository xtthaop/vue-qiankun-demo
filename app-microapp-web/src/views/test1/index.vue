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
import actions from "@/shared/actions"

export default {
  name: 'Test2',
  data() {
    return {
      msg: '测试消息'
    }
  },
  methods: {
    sendMsg() {
      actions.setGlobalState({ newMsg: this.msg })
    }
  }
}
</script>
