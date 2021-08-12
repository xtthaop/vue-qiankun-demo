<template>
  <div>
    <div class="mainweb-sidebar-title">{{ appName }}</div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="false"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem 
          v-for="route in appRoutes"
          :key="route.id"
          :item="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'appRoutes',
      'appName'
    ]),
    activeMenu(){
      const route = this.$route
      const { path } = route
      return path
    },
    variables() {
      return variables
    },
  }
}
</script>
