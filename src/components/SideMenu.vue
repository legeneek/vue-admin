<template>
  <el-menu class="side-menu" :default-active="$route.path">
    <menu-item v-for="(r,i) in routes" :key="i" :route="r"></menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import routes from '@/router'
import MenuItem from '@/components/MenuItem'
import { check } from '@/utils/role'

export default {
  name: 'SideMenu',
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters(['roles']),
    routes() {
      const me = this

      function getRoutes (routes) {
        let res = []
        routes.map(r => {
          if (!r.hide && check(me.roles, r.roles)) {
            const route = {...r}
            res.push(route)
            if (Array.isArray(route.children)) {
              route.children = getRoutes(route.children)
            }
          }
        })
        return res
      }

      return getRoutes(routes)
    }
  }
}
</script>

<style>
.side-menu {
  min-height: 100%;
}
</style>

