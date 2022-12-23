<template>
  <div class="bbb mt-5">
    <section class="about container">
      <div class="row">
        <div class="lorem col-md-4">
          <h1>
            <v-icon x-large color="#d3f1e8"> mdi-train </v-icon>
          </h1>
          <p>Prices from hundreds of train and coach companies</p>
        </div>

        <div class="lorem col-md-4">
          <h1>
            <v-icon x-large color="#d3f1e8"> mdi-ticket </v-icon>
          </h1>
          <p>Go contactless with digital tickets on your phone</p>
        </div>

        <div class="lorem col-md-4">
          <h1>
            <v-icon x-large color="#d3f1e8"> mdi-map-marker</v-icon>
          </h1>
          <p>l Travel to thousands of destinations in 45 countries</p>
        </div>
      </div>

    </section>

<hr/>
    <div class="photes m-5">
      <template>
  <v-row>
    <v-col
      cols="6"
      md="4"
    >
      <v-img
        src="../assets/temple-debod-351201_1280.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      ></v-img>
      <p>Egypt to Aswan</p>
    </v-col>

    <v-col
      cols="6"
      md="4"
    >
      <v-img src="../assets/desert-1197972__480.jpg">
        <div class="fill-height bottom-gradient"></div>
      </v-img>
      <p>Egypt to Siwa</p>

    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img src="../assets/egypt-1489015__480.jpg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
      <p>Egypt to Luxer</p>

    </v-col>

    <v-col
      cols="6"
      md="4"
    >
      <v-img
        src="../assets/istockphoto-643355168-612x612.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      ></v-img>
      <p>Egypt to Alexandria</p>
    </v-col>

    <v-col
      cols="6"
      md="4"
    >
      <v-img src="../assets/istockphoto-1303311190-612x612.jpg">
        <div class="fill-height bottom-gradient"></div>
      </v-img>
      <p>Egypt to Port Said</p>

    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img src="../assets/istockphoto-472240503-612x612.jpg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
      <p>Egypt to Sohag</p>

    </v-col>
  </v-row>
</template>
    </div>

  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {};
  },
};
</script>

<style scoped>
.lorem {
  text-align: center;
  width: 300px;
  height: 250px;
  margin: -25px 35px;

}

.lorem span {
  border: 2px solid black;
  margin-top: 50px;
  padding: 25px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.lorem h5 {
  font-weight: bold;
  margin-top: 60px;
}
.lorem p {
  margin-top: 10px;
  color: #566573;
}

.v-image{border-radius: 10px;}

.photes p{margin-top: 16px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;}
</style>
