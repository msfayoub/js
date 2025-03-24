<template>
  <div class="post-detail">
    <div v-if="post">
      <h1>{{ post.titre }}</h1>
      <p>{{ post.body }}</p>
      <div class="tags">
        <strong>Tags:</strong>
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <router-link to="/">Back to Home</router-link>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
    };
  },
  async created() {
    const postId = this.$route.params.id; // Get the post ID from the route
    await this.fetchPost(postId); // Fetch the post details
  },
  methods: {
    async fetchPost(postId) {
      try {
        const response = await fetch(`http://localhost:3000/Blogs/${postId}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        this.post = await response.json(); // Set the post data
      } catch (error) {
        console.error('Error fetching post:', error);
        this.post = null;
      }
    },
  },
};
</script>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.tags {
  margin-top: 20px;
}

.tag {
  display: inline-block;
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 0.9rem;
}

a {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>