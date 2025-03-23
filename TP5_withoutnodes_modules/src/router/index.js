import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import JobDetail from '../components/JobDetail.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/job/:id',
    component: JobDetail,
    props: route => ({ job: route.params.job ? JSON.parse(route.params.job) : null })
  }
  
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
