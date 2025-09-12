import { createRouter, type RouterHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import AboutView from '@/views/AboutView.vue'
import DynamicRoute from '@/views/DynamicRoute.vue'
import NestedView from '@/views/NestedView.vue'

function initRouter(webHistory: RouterHistory) {
  return createRouter({
    history: webHistory,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/dynamic/:id/:slug',
        name: 'dynamic',
        component: DynamicRoute,
        props: true,
        children: [
          {
            path: 'nested',
            name: 'nested.route',
            component: NestedView
          }
        ]
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
      }
    ],
  })
}

export default initRouter
