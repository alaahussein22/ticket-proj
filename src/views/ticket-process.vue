<template>
  <div>
    <h3 class="mt-5">{{ ticketDetails }}</h3>
  </div>
</template>

<script>
export default {
  name: "ticketC",
  props: ["data"],
  data() {
    return {
      ticketDetails: [],
    };
  },

  created() {
    this.ticketDetails = this.data;
    console.log(this.ticketDetails);
  },
};
</script>
