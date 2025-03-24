<template>
  <section>
    <div>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
      <router-view :books="books"></router-view>
    </div>
  </section>
</template>


<script>

export default {
    data() {
        return {
            books: []
        }
    },
   
    mounted() {
        fetch('http://localhost:3000/Books')
        .then((resp) => resp.json()) 
        .then((data) => this.books = data)
        .catch((err) => console.log(err))
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
