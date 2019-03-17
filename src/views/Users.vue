<template>
  <el-main>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="Name" >
      </el-table-column>
      <el-table-column prop="roles" label="Roles">
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Users',
  computed: {
    ...mapGetters({
      tableData: 'users'
    })
  },
  mounted() {
    this.$store.dispatch('getUserList')
  }
}
</script>

<style>

</style>
