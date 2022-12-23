<template>
  <v-app>
      <mainNav/>
      <router-view/>
      <Footer />
  </v-app>
  </template>

<script>
import mainNav from './components/main-nav.vue'
import Footer from './components/footer.vue'

export default {
  components:{mainNav,Footer},
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
