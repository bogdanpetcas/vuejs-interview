import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import initRouter from '@/router'
import type { RouterHistory } from 'vue-router'
import { createWebHistory } from 'vue-router'

export function initApp(selector: string, webHistory?: RouterHistory) {
  if (!webHistory) {
    webHistory = createWebHistory(import.meta.env.BASE_URL);
  }
  const app = createApp(App);
  app.use(createPinia());
  app.use(initRouter(webHistory));
  app.mount(selector);
}
