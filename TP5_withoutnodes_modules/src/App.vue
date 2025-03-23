<template>
  <router-view :jobs="filtered" @add-job="addJob" @delete-job="deleteJob" @apply_filter="apply_filter"></router-view>
</template>


<script>
export default {
  data(){
    return {
      jobs:[],
      filtered:[]
    }
  },

  async created() {
    await this.fetchJobs();
  },
  methods :{
      async fetchJobs() {
        try {
          const response = await fetch('http://localhost:3000/jobs'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.jobs = await response.json();
          this.filtered=this.jobs;
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      },
      addJob(newJob) {
      newJob.id = this.jobs.length + 1; 
      this.jobs.push(newJob); 
      this.filtered.push(newJob);

      },
      deleteJob(id) {
        this.jobs = this.jobs.filter(job => job.id !== id); 

        this.filtered = this.filtered.filter(job => job.id !== id);
      },
      apply_filter(filter){
        this.filtered=this.jobs.filter(job => {
        const matchesTitre = job.titre.toLowerCase().includes(filter.titre.toLowerCase());
        const matchesSalaire = job.salaire.toLowerCase().includes(filter.salaire.toLowerCase());
        return matchesTitre && matchesSalaire;
        });

      }
  },

}
</script>




