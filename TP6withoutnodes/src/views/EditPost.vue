<template>
  <section class="edit-post">
    <div class="form-container">
      <h2>Edit Post</h2>
      <input type="text" v-model="titre" placeholder="Title" class="input-field" />
      <textarea v-model="description" placeholder="Description" class="textarea-field"></textarea>
      <input type="text" v-model="tags" placeholder="Tags (comma-separated)" class="input-field" />
      <button @click="update_blog" class="update-button">UPDATE</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titre: '',
      description: '',
      tags: '',
    };
  },
  async created() {
    const postId = this.$route.params.id;
    const response = await fetch(`http://localhost:3000/Blogs/${postId}`);
    const post = await response.json();
    this.titre = post.titre;
    this.description = post.body;
    this.tags = post.tags.join(', ');
  },
  methods: {
    async update_blog() {
      const updatedBlog = {
        id: this.$route.params.id,
        titre: this.titre,
        tags: this.tags.split(',').map((tag) => tag.trim()),
        snippet: this.description.substring(0, 50),
        body: this.description,
      };

      await fetch(`http://localhost:3000/Blogs/${updatedBlog.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });

      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.edit-post {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.form-container {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

.input-field:focus,
.textarea-field:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.textarea-field {
  height: 150px;
  resize: vertical;
}

.update-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.update-button:hover {
  background-color: #0056b3;
}
</style>