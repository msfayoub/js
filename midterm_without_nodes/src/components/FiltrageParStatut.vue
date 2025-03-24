<template>
    <section>
        <select v-model="status" name="stock" @input="submitForm()" class="status">
            <option value="0">Disponibles</option>
            <option value="1">Empuntés</option>
        </select>
    </section>
</template>
<script>
export default {
    data(){
        return {
            status:0,
        }
    },
    methods: {
        submitForm() {
            this.$emit('book-status', this.status);
        }
  }
}
</script>

<style scoped>
.status{
    padding: 10px;
    margin: 15px;
    border: 3px solid black;
    border-radius: 4px;
}


</style>
