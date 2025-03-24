<template>
  <section v-if="book">
    <div class="boook">

    <p class="main"><strong>{{ book.titre }}</strong> - {{ book.auteur }}</p>
    <p>{{ book.year }}</p>
    <div v-if="book.status">
            <p>Disponible</p>
          </div>
          <div v-else>
            <p>Emprunté</p>
    </div>
    <p>Resumé:   {{ book.résumé }}</p>

    <router-link to="/" class="back-button">Back to Home</router-link>
    </div>
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id, 
      books: [],
      book: null, 
    };
  },
  
  async created() {
    await this.fetchBooks();
    console.log(this.id);
    this.find_book(); 
  },
  
  methods: {
    async fetchBooks() {
      try {
        const response = await fetch('http://localhost:3000/Books');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.books = await response.json();
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    },
    
    find_book() {
      this.book = this.books.find(book => book.id == this.id); 
    },
    
  }
};
</script>
<style>
.boook{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid red;
    padding: 20px;
    border-radius: 10px;
    background-color: burlywood;
}
.main{
    font-size:xx-large ;
}
</style>

