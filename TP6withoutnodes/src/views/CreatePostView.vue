<template>
    <section>
        <div>
            <input type="text" v-model="titre" placeholder="Title">
            <textarea v-model="description" placeholder="Description"></textarea>
            <input type="text" v-model="tags" placeholder="Tags (comma-separated)">
            <button @click="add_blog()">ADD</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            titre: "",
            description: "",
            tags: ""
        };
    },
    methods: {
        add_blog() {
            if (!this.titre || !this.description) {
                alert("Please fill in all fields.");
                return;
            }

            const newBlog = {
                id: Date.now(), 
                titre: this.titre,
                tags: this.tags.split(",").map(tag => tag.trim()), 
                snippet: this.description
            };

            this.$emit("add-blog", newBlog);
            this.titre = "";
            this.description = "";
            this.tags = "";
        }
    }
};
</script>

<style scoped>
input, textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
}
button {
    padding: 10px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
}
button:hover {
    background: darkblue;
}
</style>
