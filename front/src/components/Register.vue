<template>
  <div>
    <Header />
    <div class="container mt-5">
      <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="name">Name:</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text py-3"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" class="form-control" id="name" v-model="name">
            </div>
          </div>
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
          <label for="gender">Sex:</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text py-3"><i class="fas fa-venus-mars"></i></span>
            </div>
            <select class="form-control" id="gender" required>
              <option value="male">Man</option>
              <option value="female">Woman</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="dob">Date of birth:</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text py-3"><i class="fas fa-calendar-alt"></i></span>
            </div>
            <input type="date" class="form-control" id="dob" required>
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

        <button type="submit" class="btn btn-primary my-3">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  components: {
    Header,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      showModal: false
    };
  },
  methods: {
    ...mapActions(['register']),
    handleRegister() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.register(user);
      this.showModal = true;
      this.$router.push('/profile');
    }
  }
}
</script>

<style scoped>
</style>
