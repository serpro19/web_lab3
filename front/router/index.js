import { createRouter, createWebHistory } from 'vue-router';

import Register from "@/components/Register.vue";
import Profile from "@/components/Profile.vue";
import Login from "@/components/Login.vue";
import About from "@/components/About.vue";
import Work from "@/components/Work.vue";

const routes = [
    { path: '/', component: Work },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
