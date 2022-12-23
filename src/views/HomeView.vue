<template>
  <div>
    <Navbar />
    <Header />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Header from "../components/header.vue";

export default {
  name: "HomeC",

  components: { Header ,Navbar},
};
</script>

<style scoped>
.v-toolbar__content,
.v-toolbar__extension {
  z-index: 1;
}
</style>
