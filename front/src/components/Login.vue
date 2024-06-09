<template>
  <div>
    <Header />
    <div class="container mt-5">
      <div v-if="loginSuccess" class="alert alert-success mt-3" role="alert">
        Login successful!
      </div>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text py-3"><i class="fas fa-envelope"></i></span>
            </div>
            <input type="email" class="form-control" id="email" v-model="email">
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text py-3"><i class="fas fa-lock"></i></span>
            </div>
            <input type="password" class="form-control" id="password" v-model="password">
          </div>
        </div>
        <button type="submit" class="btn btn-primary my-3"><i class="fas fa-sign-in-alt"></i>Login</button>
      </form>
    </div>

  </div>
</template>

<script>
import Header from './Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  components: {
    Header,

  },
  data() {
    return {
      email: '',
      password: '',
      loginSuccess: false
    };
  },
  methods: {
    ...mapActions(['login']),
    handleLogin() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.login(user);
      this.loginSuccess = true;
      setTimeout(() => {
        this.loginSuccess = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>
</style>
