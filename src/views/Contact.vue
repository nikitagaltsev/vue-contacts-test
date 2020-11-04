<template>
  <section>
    <h1>{{ contact.name }}</h1>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veniam
    doloremque illum et sequi cum consequuntur soluta, molestias reiciendis
    harum expedita qui ipsa laboriosam nemo fugiat quis aut quam quod.
    <router-link to="/">Home</router-link>
  </section>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
