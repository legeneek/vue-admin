<template>
  <el-main class="login-container">
    <el-form :model="form" ref="form" label-width="80px" class="login-form">
      <el-form-item label="Username:">
        <el-input v-model="form.username" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="Password:">
        <el-input v-model="form.password" placeholder="" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">login</el-button>
    </el-form-item>
    </el-form>
  </el-main>
  
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const me = this
      this.$store.dispatch('login', this.form).then(() => {
        me.$router.push({path: '/dashboard'})
      })
    }
  }
}
</script>

<style>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.login-form {
  width: 400px;
}
</style>
