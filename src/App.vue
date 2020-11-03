<template>
  <div id="app">
    <header class="headed">
      <h1 class="header__title">Книга контактов</h1>
    </header>
    <hr />

    <router-view />

  </div>
</template>

<script>
export default {};
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
