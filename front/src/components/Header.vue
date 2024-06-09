<template>
  <header class="px-1">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="https://legendscondos.com/wp-content/uploads/2018/09/product5.jpg" alt="Logo" class="img-fluid mb-4 mx-2 logo">
        Time Tracking
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ul-style">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Work Page</router-link>
          </li>
        </ul>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;}
.ul-style{
  margin-left: auto;
}
.logo{
  max-width: 50px;
  height: auto;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
