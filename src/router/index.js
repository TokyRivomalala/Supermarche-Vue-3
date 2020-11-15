import { createRouter, createWebHistory } from 'vue-router'
import Article from '../views/Article.vue'

const routes = [
  {
    path: '/',
    name: 'Article',
    component: Article
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
