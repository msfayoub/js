<template>
  <section class="job-detail" v-if="job">
    <h1>{{ job.titre }}</h1>
    <p><strong>Description:</strong> {{ job.description }}</p>
    <p><strong>Salary:</strong> {{ job.salaire }}</p>
    <p><strong>Date de création:</strong> {{ job['date de création'] }}</p>
    
    <!-- Button to toggle editing mode -->
    <button v-if="!isEditing" @click="editJob()">Edit Job</button>
    
    <!-- Edit form when editing -->
    <div v-if="isEditing" class="edit-form">
      <input v-model="job.titre" placeholder="Enter new title" />
      <textarea v-model="job.description" placeholder="Enter new description"></textarea>
      <input v-model="job.salaire" placeholder="Enter new salary" />
      <input type="date" v-model="job['date de création']" />

      <button @click="saveJob()">Save Changes</button>
      <button @click="cancelEdit()">Cancel</button>
    </div>
    
    <!-- Back button to go to the homepage -->
    <router-link to="/" class="back-button">Back to Home</router-link>
  </section>
  
  <p v-else>Loading job details...</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id, 
      jobs: [],
      job: null, 
      isEditing: false, 
    };
  },
  
  async created() {
    await this.fetchJobs();
    this.find_job(); 
  },
  
  methods: {
    async fetchJobs() {
      try {
        const response = await fetch('http://localhost:3000/jobs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.jobs = await response.json();
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    },
    
    find_job() {
      this.job = this.jobs.find(job => job.id == this.id); 
    },
    
    editJob() {
      this.isEditing = true;
    },

    saveJob() {
      fetch(`http://localhost:3000/jobs/${this.job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.job),
      })
      .then(response => response.json())
      .then(updatedJob => {
        this.job = updatedJob; 
        this.isEditing = false;
      })
      .catch(error => console.error('Error updating job:', error));
    },

    cancelEdit() {
      this.isEditing = false;
      this.find_job();
    }
  }
};
</script>

<style scoped>
.job-detail {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.job-detail h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.job-detail p {
  font-size: 16px;
  margin-bottom: 10px;
}

.job-detail .back-button {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #0056b3;
  color: white;
}

.edit-form input, .edit-form textarea {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
}

.edit-form textarea {
  height: 100px;
  resize: none;
}

.edit-form button {
  background: #28a745;
  color: white;
}

.edit-form button:hover {
  background: #218838;
}

button.cancel-btn {
  background: #dc3545;
}

button.cancel-btn:hover {
  background: #a71d2a;
}
</style>
