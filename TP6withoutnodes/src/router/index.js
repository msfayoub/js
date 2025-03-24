import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addpost from '../views/CreatePostView.vue'
import editpost from '../views/EditPost.vue'
import PostDeatailView from '../views/PostDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: addpost
  },
  {
    path: '/editpost',
    name: 'editpost',
    component: editpost
  },
  {
    path: '/Blogs/:id',
    name: 'PostDeatailView',
    component: PostDeatailView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
