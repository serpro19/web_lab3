import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import router from "../router/index.js";
import store from "../store/index.js";
import '@fortawesome/fontawesome-free/css/all.css';


createApp(App).use(router).use(store).mount('#app');


