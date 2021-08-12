<template>
  <div v-if="!item.hidden">
    <template v-if="hasNoShowingChild(item.children)">
      <AppLink :to="item.path">
        <el-menu-item :index="item.path" :class="{ 'submenu-title-nodropdown': !isNest }">
          <Item :icon="item.meta && item.meta.icon" :title="item.meta && item.meta.title" />
        </el-menu-item>
      </AppLink>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.path">
      <template slot="title">
        <Item :icon="item.meta && item.meta.icon" :title="item.meta && item.meta.title" />
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.id"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'
import AppLink from './Link'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasNoShowingChild(children = []){
      const showingChildren = children.filter(item => {
        if(item.hidden){
          return false
        }else{
          return true
        }
      })

      if(showingChildren.length === 0){
        return true
      }

      return false
    }
  }
}
</script>
