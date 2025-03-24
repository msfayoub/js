<template>
  <div class="home">
    <div class="container">
            <div class="itemss">
                <PostList :Posts=Posts></PostList>

            </div>
            <div class="tagssss">
              <TagCloud :tags=tags ></TagCloud>
            </div>

    </div>

  </div>
  <CreatePostView @add-blog="addNewBlog"></CreatePostView> 
</template>

<script>
import PostList from '@/components/PostList.vue';
import addpost from '@/views/CreatePostView.vue';
import CreatePostView from '@/views/CreatePostView.vue';

import TagCloud from '@/components/TagCloud.vue'

export default {
  components: {PostList,TagCloud,addpost,CreatePostView},
  data() {
        return {
            Posts:[],
            ahh:false,
            tags:[]

        }
    },
    async created() {
    await this.fetchBlogs();
    this.get_tags();
    },
  methods: {
        async fetchBlogs() {
        try {
            const response = await fetch('http://localhost:3000/Blogs'); 
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            this.Posts = await response.json();
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
        },
        get_tags() {
        const allTags = this.Posts.flatMap(blog => blog.tags);
        this.tags = [...new Set(allTags)]; 
        },
        addNewBlog(newBlog) {
            this.posts.push(newBlog);
        }
        

    },
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 5fr 1fr; 
}

.itemss {
    grid-column: 1 / 2; 
}

.tagssss {
    grid-column: 2 / 3; 
}


</style>

