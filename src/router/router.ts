import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home/Home.vue";
import About from "../pages/About/About.vue";

const routes = [
  {path:'/home', component: Home},
  {path:'/about', component: About},
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router