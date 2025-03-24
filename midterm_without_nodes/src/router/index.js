import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Library.vue';
import BookDetail from '../components/BookDetail.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/book/:id',
    component: BookDetail,
    
    meta: {
      books: [] 
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
