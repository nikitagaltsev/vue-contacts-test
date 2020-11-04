<template>
  <div id="app">
    <header class="header">
      <h1 class="header__title">Книга контактов</h1>
    </header>

    <router-view />

    <footer class="footer">
      <p class="footer__copyright">
        {{ getYear() }} © Nikita Galtsev. Test task for LogicLLC.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
@include normalize();
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
  background-color: white;
}

.header {
  background-color: #145bb8;
  color: aliceblue;
  margin-bottom: 40px;
}

.footer {
  margin-top: 50px;
  background-color: #145bb8;
  color: aliceblue;
}
</style>
