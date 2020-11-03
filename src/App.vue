<template>
  <div id="app">
    <header class="headed">
      <h1 class="header__title">Книга контактов</h1>
    </header>
    <Main />
    <footer class="footer">
      <p class="footer__copyright">{{ getYear() }} © Nikita Galtsev</p>
    </footer>
  </div>
</template>

<script>
import Main from "./components/Main";

export default {
  components: {
    Main: Main
  },
  methods: {
    getYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
div,
a,
section,
ul,
li,
span,
img,
p,
header,
main,
footer {
  border: 1px solid tomato;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #66fff3;
}
</style>
