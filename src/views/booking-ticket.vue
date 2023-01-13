<template>
  <div>

    <section v-for="e in trainData"  :key="e.id">
      <div class="mt-4 d-flex justify-content-between">
        <h5 class="from">
          From
          <v-icon dark right color="black"> mdi-arrow-right </v-icon>
          {{ e.from }}
        </h5>

        <h5 class="to">
          To
          <v-icon dark right color="black"> mdi-arrow-right </v-icon>
          {{ e.to }}
        </h5>
      </div>

      <div>
        <v-card class="mt-5" max-width="385" style="border-radius: 10px">
          <v-card-text>
            <p class="text-h6 text--primary">
              <strong class="cheap">Cheapest</strong> Coach fares
            </p>

            <span >
              <h6>
                The number of places available : {{ e.person_num }}
              </h6>
              <h6>Trip departure date: {{ e.out }}</h6>
              <h6>Trip return date : {{ e.return }}</h6>

              <p class="mt-5">Trip times</p>
              <div class="text--primary">
                <hr />
                <h5 class="d-flex align-items-center">
                  <input type="radio" />
                  <strong class="ms-3">{{ e.time_out1 }}</strong>
                  <v-icon dark right color="black"> mdi-arrow-right </v-icon>
                  <strong class="ms-3">{{ e.time_return1 }}</strong>
                  <strong class="price">{{ e.ticket_price }}</strong>
                </h5>
                <hr />

                <h5 class="d-flex align-items-center">
                  <input type="radio" />
                  <strong class="ms-3">{{ e.time_out2 }}</strong>
                  <v-icon dark right color="black"> mdi-arrow-right </v-icon>
                  <strong class="ms-3">{{ e.time_return2 }}</strong>
                  <strong class="price">{{ e.ticket_price }}</strong>
                </h5>
                <hr />

                <h5 class="d-flex align-items-center">
                  <input type="radio" />
                  <strong class="ms-3">{{ e.time_out3 }}</strong>
                  <v-icon dark right color="black"> mdi-arrow-right </v-icon>
                  <strong class="ms-3">{{ e.time_return3 }}</strong>
                  <strong class="price">{{ e.ticket_price }}</strong>
                </h5>
                <hr />
                <Continue />
              </div>
            </span>
          </v-card-text>
        </v-card>
      </div>
    </section>


  </div>
</template>

<script>
import Continue from "./continue.vue";
export default {
  name: "bookingC",
  components: { Continue },
  props: ["trainData"],
  data() {
    return {
      data: this.trainData,
      from: "",
      to: "",
      return1: "",
      return2: "",
      return3: "",
      person: "",
      out1: "",
      out2: "",
      out3: "",
      ret: "",
      out: "",
      ticket_price: "",
    };
  },

  created() {
    for (let i in this.trainData) {
      this.from = this.trainData[i].from;
      this.out = this.trainData[i].out;
      this.ret = this.trainData[i].return;
      this.ticket_price = this.trainData[i].ticket_price;

      this.out1 = this.trainData[i].time_out1;
      this.out2 = this.trainData[i].time_out2;
      this.out3 = this.trainData[i].time_out3;
      this.return1 = this.trainData[i].time_return1;
      this.return2 = this.trainData[i].time_return2;
      this.return3 = this.trainData[i].time_return3;
      this.person = this.trainData[i].person_num;
      this.to = this.trainData[i].to;
    }
  },
};
</script>

<style scoped>
.from,
.to {
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 20px 5px;
  margin: 0px 7px 0px 0px;
  border-radius: 10px;
  /* font-weight: bold;
           font-size:20px */
}

.cheap {
  background: #00a88f;
  padding: 4px;
  border-radius: 10px;
}

.price {
  margin-left: 45%;
  background: #00a88f;
  padding: 4px;
  border-radius: 10px;
}
</style>
