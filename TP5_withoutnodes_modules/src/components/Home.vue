<template>
    <div class="container">
        <h1>Job List</h1>
        <button @click="toggle_form()" class="btn_aj">Ajouter</button>
        <job-form v-show="show_form" @cancel-form="handleCancelForm" @add-job="add_job" ></job-form>
        <filter-Nav   @apply_filter="filter_item"></filter-Nav>
        <section>
            <div v-for="job in jobs" :key="job.id" class="item">
                
                <router-link :to="`/job/${job.id}`"> 
                <h1 class="job_title">{{job.titre}}</h1>
                <div class="centrelize">
                <p class="job_sal">{{job.salaire}}</p></div>
                </router-link >

                <button @click="deleteJob(job.id)" class="spr_btn">Suprimmer</button>
            </div>
        </section>
    </div>
</template>


<script>

import JobForm from './JobForm.vue';
import FilterNav from './FilterNav.vue';
import JobDetail from './JobDetail.vue';

export default {
    components:{JobForm,FilterNav,JobDetail},
    props: {
    jobs: {
        type: Array,
        required: true
        }
    },

    data() {
        return {
            show_form:false
        }
    },

    methods:{
        filter_item(filter){
            this.$emit('apply_filter',filter);

        },
        toggle_form(){
            this.show_form=!this.show_form
        },
        add_job(newjob){
            
            this.$emit('add-job',newjob);
            

        },
        deleteJob(index) {
            this.$emit('delete-job', index); // Emit an event to delete the job
        },
        handleCancelForm() {
            this.show_form = false; // Hide the form when cancel is clicked
        },
    },

  
};
</script>


<style scoped>
    .body{
        font-size: large;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    .btn_aj{
        background-color: brown;
        padding: 10px;
        border-radius: 5px;
        color: white;
        width: 100px;
        margin: 20px;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid grey;
        margin: 10px;
        border-radius: 10px;
        padding: 10px;
        width: 100%;

    }
    .job_title{
        font-size: xx-large;
        color: black;
        text-decoration: none;
    }
    .centrelize{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .job_sal{
        font-size: x-large;
        color: black;
        text-decoration: none;
    }
    .spr_btn{
        background-color: blue;
        padding: 10px;
        border-radius: 5px;
        color: white;
        width: 100px;
        margin: 20px;
    }
</style>