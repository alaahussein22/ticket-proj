<template>
<div>
    <h1>{{ trainData }}</h1>
</div>
</template>


<script>

export default{
      name: 'ticketC',
      props:["trainData"],
    data() {
       return{
        ticket:this.trainData
       }  
    },
}
</script>

