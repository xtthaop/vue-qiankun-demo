<template>
  <div class="mainapp-navbar">
    <div class="mainapp-navbar-left">
      <div class="mainapp-title" @click="$router.push({ name: 'Home' })">
        vue-qiankun-demo
      </div>
      <div class="mainapp-navigation">
        <span class="mainapp-navigation-item" @click="$store.dispatch('app/openMenu')">
          <AppLink to="/app/microapp/web/test1" class="link-type">微应用</AppLink>
        </span>
      </div>
    </div>
    <div class="mainapp-navbar-right">
      <el-popover
        placement="bottom"
        width="200"
        trigger="click"
        popper-class="mainapp-msg-list"
      >
        <ul v-if="msgList.length">
          <li 
            v-for="(item, index) in msgList" 
            :key="index"
          >
            {{ (index + 1) + '. ' + item }}
          </li>
        </ul>
        <div v-else class="msg-default">信息列表为空</div>
        <el-badge 
          :value="msgList.length" 
          :hidden="!msgList.length" 
          class="item" 
          type="danger" 
          slot="reference"
        >
          <i class="el-icon-message" style="font-size:22px;cursor:pointer;color:#333;"></i>
        </el-badge>
      </el-popover>
    </div>
  </div>
</template>

<script>
import AppLink from './Sidebar/Link'

export default {
  name: 'Navbar',
  components: { AppLink },
  data() {
    return {
      msgList: [],
    }
  },
  created() {
    this.$actions.setGlobalState({ newMsg: '' })
    this.$actions.onGlobalStateChange(state => {
      if(state.newMsg){
        this.msgList.push(state.newMsg)
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.mainapp-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
  z-index: 1002;

  .mainapp-navbar-left {
    display: flex;
    align-items: center;

    .mainapp-title {
      width: $sideBarWidth;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
    }

    .mainapp-navigation {
      padding: 0 20px;
      margin-left: 30px;

      .mainapp-navigation-item {
        font-size: 16px;
        font-weight: 300;
        cursor: pointer;

        .link-type {
          color: #333;
          text-decoration: none;

          &:hover {
            color: #409EFF;
          }
        }
      }
    }
  }

  .mainapp-navbar-right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>

<style lang="scss">
.mainapp-msg-list {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      line-height: 30px;
    }
  }

  .msg-default {
    width: 200px;
    text-align: center;
    color: #ccc;
  }
}
</style>
