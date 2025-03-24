<template>
    <section>
        <div class="container">
            <div class="itemss">
            <div v-for="blogee in Posts" :key="blogee.id" >
                <SinglePost :blog=blogee></SinglePost>
            </div>
            </div>
            <div class="tagssss">
            </div>
        </div>
    </section>
</template>



<script>
import SinglePost from '@/components/SinglePost.vue'



export default {
    components:{ SinglePost},
    props:['Posts']
    
}
</script>



