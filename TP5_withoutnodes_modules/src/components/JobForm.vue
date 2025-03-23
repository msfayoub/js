<template>
  <div class="form-container">
    <input type="text" v-model="new_job_title" placeholder="Enter title" required>
    <textarea v-model="new_job_description" placeholder="Enter description" required></textarea>
    <input type="text" v-model="new_job_salary" placeholder="Enter salary" required>
    <input type="date" v-model="new_job_date" required>

    <!-- Error message -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <div class="button-group">
      <button class="submit-btn" @click="add_job()">Submit</button>
      <button class="cancel-btn" @click="cancel_form()">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      new_job_title: "",
      new_job_description: "",
      new_job_salary: "",
      new_job_date: "",
      errorMessage: "", // For error messages
    };
  },
  
  methods: {
    add_job() {
      // Validate input fields
      if (!this.new_job_title || !this.new_job_description || !this.new_job_salary || !this.new_job_date) {
        this.errorMessage = "All fields are required!";
        return;
      }

      // Reset error message if validation passes
      this.errorMessage = "";

      const newJob = {
        titre: this.new_job_title,
        description: this.new_job_description,
        salaire: this.new_job_salary,
        'date de création': this.new_job_date,
      };
      
      this.$emit('add-job', newJob); // Emit new job to parent
      this.cancel_form(); // Reset form
    },

    cancel_form() {
      this.new_job_title = "";
      this.new_job_description = "";
      this.new_job_salary = "";
      this.new_job_date = "";
      this.errorMessage = ""; // Clear error message
      this.$emit('cancel-form');
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  transition: border 0.3s;
}

textarea {
  resize: none;
  height: 80px;
}

input:focus, textarea:focus {
  border-color: #007bff;
  outline: none;
}

.error-message {
  color: red;
  font-size: 14px;
  text-align: center;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn {
  background: #007bff;
  color: white;
}

.submit-btn:hover {
  background: #0056b3;
}

.cancel-btn {
  background: #dc3545;
  color: white;
}

.cancel-btn:hover {
  background: #a71d2a;
}
</style>
