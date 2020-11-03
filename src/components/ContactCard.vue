<template>
  <li class="contracts__person">
    <h2 class="contracts__name">{{ name }}</h2>
    <p class="contracts__number">{{ number }}</p>
  </li>
</template>

<script>
  export default {
     props: ['name', 'number', 'id'],
  }
</script>

<style lang="scss" scoped>

</style>