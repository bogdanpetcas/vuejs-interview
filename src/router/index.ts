import { createRouter, type RouterHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import DynamicRoute from '@/views/DynamicRoute.vue'
import NestedRoute from '@/views/NestedRoute.vue'
import MoreDetails from '@/views/MoreDetails.vue'

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
        path: '/dynamic/:id',
        name: 'dynamic',
        component: DynamicRoute,
        props: true
      },
      {
        path: '/nested',
        name: 'nested',
        component: NestedRoute,
        children: [
          {
            path: 'inside',
            name: 'nested.inside',
            component: MoreDetails
          }
        ]
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
