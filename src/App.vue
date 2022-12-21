<template>
  <div id="app">
      <mainNav/>
      <router-view/>
      <Footer />
  </div>
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
