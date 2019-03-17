<template>
  <el-container class="top-container">
    <el-aside width="200px" class="aside">
      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <el-button type="text" disabled>{{name}}</el-button>
        <el-button type="text" @click="logout">logout</el-button>
      </el-header>
      <el-main>
        <view-container></view-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import ViewContainer from '@/components/ViewContainer'
import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    SideMenu,
    ViewContainer
  },
  computed: {
    ...mapGetters({
      name: 'username'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({path: '/login'})
      })
    }
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
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  text-align: right;
}
</style>
