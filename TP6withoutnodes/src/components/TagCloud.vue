<template>
    <section class="tag-container">
        <div v-for="tag in tags" :key="tag" class="tag-item">
            <p>{{ tag }}</p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array
        }
    },
};
</script>

<style scoped>
/* Container for all tags */
.tag-container {
    display: flex;
    flex-wrap: wrap; /* Allow tags to wrap to next line */
    gap: 10px; /* Space between tags */
    padding: 10px;
}

/* Individual tag item */
.tag-item {
    background-color: #f0f0f0;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 14px;
    color: #333;
    text-transform: capitalize; /* Make the first letter of each tag uppercase */
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Hover effect for tags */
.tag-item:hover {
    background-color: #007BFF;
    color: white;
}

/* Optional: Style for the <p> element */
.tag-item p {
    margin: 0; /* Remove margin from the p element */
}
</style>
