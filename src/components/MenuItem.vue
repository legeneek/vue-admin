<template>
  <el-submenu v-if="route.children && route.children.length > 1" :index="route.path">
    <template slot="title">{{route.title}}</template>
    <template v-for="(r, i) in route.children">
      <menu-item v-if="r.children && r.children.length > 1" route="r" :key="resolvePath(route, i)">
      </menu-item>
      <router-link v-else :key="resolvePath(route, i)" :to="resolvePath(route, i)">
        <el-menu-item class="menu-item sub-menu" :index="resolvePath(route, i)">
          {{resolveName(route, i)}}
        </el-menu-item>
      </router-link>
    </template>
  </el-submenu>
  <router-link v-else :to="resolvePath(route)">
    <el-menu-item class="menu-item" :index="route.path">{{resolveName(route)}}</el-menu-item>
  </router-link>
</template>

<script>
import path from '@/utils/path'

export default {
  name: 'MenuItem',
  props: {
    route: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    resolvePath(route, sub) {
      const i = sub || 0
      return path.join(route.path, route.children ? route.children[i].path : '')
    },
    resolveName(route, sub) {
      const i = sub || 0
      return route.children[i].name
    }
  }
}
</script>

<style>
</style>
