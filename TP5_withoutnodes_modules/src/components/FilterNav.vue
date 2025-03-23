<template>
  <section class="filter-container">
    <input type="text" v-model="filter_job_title" placeholder="Enter title" @input="search()">
    <input type="text" v-model="filter_job_salary" placeholder="Enter salary" @input="search()">
    <button @click="search()">Search</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filter_job_title: "",
      filter_job_salary: "",
    };
  },

  methods: {
    search() {
      this.$emit('apply_filter', { titre: this.filter_job_title, salaire: this.filter_job_salary });
    }
  }
}
</script>

<style scoped>
.filter-container {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 200px;
  transition: border 0.3s;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #0056b3;
}
</style>
