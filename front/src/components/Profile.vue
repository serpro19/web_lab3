<template>
  <div>
    <Header />
    <div class="container mt-5" v-if="user">
      <h2>Profile</h2>
      <table class="table table-striped">
        <tbody>
        <tr>
          <th scope="row">Name</th>
          <td id="profile-name">{{ user.name }}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td id="profile-email">{{ user.email }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Profile',
  components: {
    Header
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['logout']),
    logout() {
      this.logout();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
</style>
