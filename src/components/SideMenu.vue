<template>
  <el-menu class="side-menu" :default-active="$route.path">
    <router-link to="/user">
      <el-menu-item index="/user" >用户管理</el-menu-item>
    </router-link>
    <el-submenu index="2">
      <template slot="title">menu-2</template>
      <el-menu-item index="2-1">menu-item-2-1</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
    }
  }
}
</script>

<style>
.side-menu {
  height: 100%;
}
</style>

