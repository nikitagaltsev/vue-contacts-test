<template>
  <div>
    <Main />
    <footer class="footer">
      <p class="footer__copyright">{{ getYear() }} © Nikita Galtsev</p>
    </footer>
  </div>
</template>

<script>
import Main from "../components/Main";

export default {
  components: {
    Main: Main,
  },
  methods: {
    getYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped></style>
