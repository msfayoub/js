<template>
    <section class="filter-nav">
        <input type="text" v-model="titre" @input="submitForm()" placeholder="Title">
        <input type="text" v-model="auteur" @input="submitForm()" placeholder="Author">
    </section>
</template>
<script>
export default {
    data(){
        return {
            titre:"",
            auteur:"",
        }
    },
    methods: {
        submitForm() {
            const filtre={"titre":this.titre,"auteur":this.auteur};
            this.$emit('filterbooks', { ...filtre });
        }
  }
}
</script>

<style>
.filter-nav {
  margin-bottom: 20px;
}

.filter-nav input {
  padding: 10px;
  margin-right: 10px;
  border: 3px solid black;
    border-radius: 4px;
}

</style>
