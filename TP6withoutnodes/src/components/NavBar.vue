<template>
    <section class="roots"> 
        <router-link class="root" to="/">Home</router-link>
        <router-link class="root" to="/addpost">addPost</router-link>
        <router-link class="root" to="editpost">EditPost</router-link>
    </section>
    
</template>


<style scoped>
    .roots{
        margin: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        
    }
    .root{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size:  large;
        border: 3px dotted black;
        border-radius: 5px;
        padding: 15px;

    }
</style>
