<template>
  <div>
    <Header />
    <div class="container mt-5">
      <div class="jumbotron">
        <h1 class="display-4">Time Tracking</h1>
        <p class="lead">{{ applicationDescription }}</p>
        <hr class="my-4">
        <p>{{ timerFunctionality }}</p>
        <img src="https://www.softactivity.com/wp-content/uploads/Employee-Time-Tracking-1400.jpg" alt="image">
      </div>
    </div>
  </div>
</template>


<script>
import Header from './Header.vue';

export default {
  name: 'About',
  components: {
    Header,
  },
  data() {
    return {
      applicationDescription: '',
      timerFunctionality: '',
    };
  },
  async mounted() {
    const response = await fetch('http://127.0.0.1:5000/text');
    const data = await response.json();
    this.applicationDescription = data[0].question;
    this.timerFunctionality = data[1].question;
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
}

.jumbotron {
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #007bff;
  font-weight: bold;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
