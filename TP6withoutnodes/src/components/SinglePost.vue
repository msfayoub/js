<template>
    <div class="item" v-bind="blog">
        <h1 class="blog-title">{{blog.titre}}</h1>
        <div class="tags-container">
            <p class="tag" v-for="tag in blog.tags" :key="tag">{{tag}}</p>
        </div>
        <p class="blog-snippet">{{blog.snippet}}</p>
        <router-link :to="`/Blogs/${blog.id}`">Read More</router-link>
    </div>
</template>

<script>
export default {
    props: {
        blog: Object
    },
    data() {
        return {
            blog: this.blog,
        };
    }
};
</script>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.blog-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
    text-align: center;
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
    justify-content: center;
}

.tag {
    padding: 5px 10px;
    background-color: #e0e0e0;
    border-radius: 12px;
    font-size: 14px;
    color: #555;
    margin: 0;
}

.blog-snippet {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    text-align: center;
    margin: 0;
}
</style>