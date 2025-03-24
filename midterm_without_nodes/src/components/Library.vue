<template>
  <div>
    <h1>Books List</h1>

    <FilterNav @filterbooks="applyFilters"/>
    <Filterstatus @book-status="applyFilters2"/>

    <div class="book-list">
      <div v-for="book in filteredbooks" :key="book.id" class="book-item">

        <p><strong>{{ book.titre }}</strong> - {{ book.auteur }}</p>
        <img :src="book.img" class="photo">
        <div v-if="book.status">
        <p>Disponible</p>
        </div>
        <div v-else>
        <p>Emprunté</p>
        </div>
        
        <router-link :to="`/book/${book.id}`" class="book-link">
        Read More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from './FilterNav.vue';
import Filterstatus from './FiltrageParStatut.vue';


export default {
  components: { FilterNav,Filterstatus },
  props: ['books'],
  data() {
    return {
        filters: {
        titre: '',
        auteur: '',
            },
        status:-1,
    }
    
  },
  computed: {
    filteredbooks() {
      return this.books.filter(book => {
        const matchesTitre = book.titre.toLowerCase().includes(this.filters.titre.toLowerCase());
        const matchesauteur = book.auteur.toLowerCase().includes(this.filters.auteur.toLowerCase());
        if (this.status==-1){
            return matchesTitre && matchesauteur;   
        }
        else{
            const matchesstatus = (book.status===this.status);
            return matchesTitre && matchesauteur && matchesstatus;
        }
      });
    },
    
  },
  methods: {
    applyFilters(filters) {
      this.filters = filters;
    },
    applyFilters2(status) {
      this.status = status;
      if (this.status=="0"){
        this.status=false;
      }
      else{
        this.status=true;
      }
    },
  },
};
</script>

<style>
    .photo{
        width: 40px;
        
    }

    .book-link {
    text-decoration: none;
    color: red;
    font-size: large;
    }

    .book-link:hover {
    text-decoration: underline;
    }
    .book-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    }

    .book-item {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    border-color:  #97a166;
    }

    .book-item:hover {
    background-color: #97a166;
    }
</style>
