<template lang="html">
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-3" id="login">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <input v-model="username" type="text" class="form-control" placeholder="input your username...">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input v-model="password" type="password" class="form-control" placeholder="input your password">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button @click="login">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://localhost:8080',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post(this.url+'/login', {
        username: this.username,
        password: this.password
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.login {
  padding-top: 200px;
}

#login {
  padding-top: 20px;
  border: solid black;
}
</style>
