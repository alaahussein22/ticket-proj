<template>
  <div class="ticket">
    <div class="booking mt-5 mb-5 d-flex justify-content-between">
      <div class="col-md-4">
        <h2>Hello Dear!</h2>
        <p class="mt-3">Are You Ready To Book A Ticket ?</p>
        <strong>You Choose ...</strong>

          <BookingTicket :trainData="trainData" />
      </div>

      <div class="col-md-8" style="margin-left: 15%; margin-top: 1%">
        <v-card class="mx-auto" max-width="430" height="410">
          <span class="d-flex">
            <v-col cols="12" md="6">
              <v-select
                :items="fromAllCities"
                filled
                label="From"
                v-model="newData.from"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                :items="toAllCities"
                filled
                label="To"
                v-model="newData.to"
              ></v-select>
            </v-col>
          </span>

          <span class="d-flex">
            <v-col cols="12" md="6">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="newData.out"
                    label="Out"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="newData.out" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" md="6">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="newData.return"
                    label="Return"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="newData.return" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </span>

          <v-col>
            <v-text-field
              label="Number Of Person"
              single-line
              filled
              append-icon=""
              v-model="newData.person_num"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-btn
              style="
                background-color: #00a88f;
                color: #fff;
                width: 100%;
                height: 55px;
              "
              @click.native="getAllData()"
              >Get times and tickets
              <i class="fa-solid fa-arrow-right"></i>
            </v-btn>
          </v-col>
        </v-card>
      </div>
    </div>

    <About />
  </div>
</template>

<script>
import axios from "axios";
import BookingTicket from "./booking-ticket.vue";
import About from "./AboutView.vue";

export default {
  name: "ticketC",
  components: { BookingTicket, About },
  data() {
    return {
      dialog: false,
      modal: "",
      menu: false,

      fromAllCities: [
        "Siwa",
        "Alexandria",
        "Sohag",
        "Aswan",
        "Luxer",
        "Port Said",
        "EL-Mansora",
        "El-Bahira",
        "Qena",
        "Zagazig",
        "Banha",
        "Demmiet",
        "Ismalia",
        "Asuit",
        "Cairo",
        "Matroh",
        "Tanta",
        "El-Menia",
        "Sharm elshikh",
        "Fayoum",
      ],
      toAllCities: [
        "Siwa",
        "Alexandria",
        "Sohag",
        "Aswan",
        "Luxer",
        "Port Said",
        "EL-Mansora",
        "El-Bahira",
        "Qena",
        "Zagazig",
        "Banha",
        "Demmiet",
        "Ismalia",
        "Asuit",
        "Cairo",
        "Matroh",
        "Tanta",
        "El-Menia",
        "Sharm elshikh",
        "Fayoum",
      ],

      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

      newData: {
        from: "",
        to: "",
        person_num: "",
        out: "",
        return: "",
      },
      trainData: [],
      data: "",
    };
  },

  methods: {
    async getAllData() {
      console.log("ffffffffffffff");
      await axios
        .get("http://localhost:3000/data", {
          params: {
            from: this.newData.from,
            to: this.newData.to,
            person_num: this.newData.person_num,
            out: this.newData.out,
            return: this.newData.return,
          },
        })
        .then((res) => {
          console.log(res.data);

          this.trainData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.getAllData();
  },
};
</script>

<style scoped>
.ticket {
  background-color: #e7ebeb;
  padding: 22px;
}
</style>
