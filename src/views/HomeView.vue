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
// import Footer from '../components/footer.vue'
export default {
  name: "HomeC",

  components: { Navbar,Header},
};
</script>
