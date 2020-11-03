<template>
  <li class="contracts__person">
    <router-link to="./contact">
      <h2 class="contracts__name">{{ name }}</h2>
      <p class="contracts__number">{{ number }}</p>
    </router-link>
    
  </li>
</template>

<script>
export default {
  props: ["name", "number", "id"]
};
</script>

<style scoped>
.contracts__person {
  width: 200px;
  background-color: aliceblue;
  border-radius: 10px;
  margin: 5px;
}
</style>
