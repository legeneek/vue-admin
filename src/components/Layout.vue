<template>
  <el-container class="top-container">
    <el-aside width="200px" class="aside">
      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-header class="header">header</el-header>
      <view-container></view-container>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import ViewContainer from '@/components/ViewContainer'

export default {
  name: 'Layout',
  components: {
    SideMenu,
    ViewContainer
  }
  
}
</script>

<style>
.top-container {
  height: 100%;
}
.aside {
  height: 100%;
}
.header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
</style>
