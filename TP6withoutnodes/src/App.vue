<template>
  <NavBar></NavBar>
  <router-view/>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import Home from '@/views/HomeView.vue'
import PostList from './components/PostList.vue'


export default {
  components:{ NavBar, Home, PostList },
}
</script>