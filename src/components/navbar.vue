<template>
   <div>
  <div>
    <v-app id="inspire">

      <span class="bg d-flex">
        <div class="header-train">
          <h1>Trains To Egypt</h1>
          <p>Save 61% on average when you buy in advance†</p>
        </div>

        <div class="booking">
          
          <v-card class="mx-auto" max-width="330" height="404">
            <span class="d-flex">
              <v-col cols="12" md="6">
                <v-select :items="fromAllCities" filled label="From"
                 v-model="newData.from"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select :items="toAllCities" filled label="To"
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
        <v-date-picker
        v-model="newData.out"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
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
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </span>

            <v-col>
              <v-text-field label="Person" single-line filled append-icon=""
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
                @click="getAllData()"
                >Get times and tickets
              </v-btn>
            </v-col>
          </v-card>
        </div>
      </span>

<mainNav />
    </v-app>
  </div>



  <span> 
    <ticketProcess :trainData="trainData"/>
    </span>
  </div>

</template>

<script>
import axios from "axios";
import mainNav from './main-nav.vue'
import ticketProcess from '../views/ticket-process.vue'
export default {
  name: "NavbarComponent",
  components:{mainNav,ticketProcess},
  data() {
    return {
      dialog: false,
      modal:'',
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
      nav: [
        {
          text: "Basket",
          title: "Back to Home page",
          active: true,
        },
        {
          text: "My Bookings",
          title: "About this demo",
          active: false,
        },
      ],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

      newData:{
        from:'',
        to:'',
        person_num:'',
        out:'',
        return:''
      }  ,
      trainData:[]
    };
  },

  methods:{

    async getAllData(){
    await axios
      .get("http://localhost:3000/data",{
        params: {
          from:this.newData.from,
        to:this.newData.to,
        person_num:this.newData.person_num,
        out:this.newData.out,
        return:this.newData.return
  },
      })
      .then((res) => {
        console.log(res.data);
        this.trainData=res.data
        // this.$router.go('/ticket')
        // this.$router.push({ path: '/ticket' })

      })
      .catch((err) => {
        console.log(err);
      });
  },

  async addAppointementData(){
    await axios
      .post("http://localhost:3000/data"),{
        "from": "Siwa",
      "to": "Cairo",
      "time_out": "2",
      "time_return": "12",
      "out": "2022-12-19",
      "return": "2022-12-19",
      "person_num": "2",
      "ticket_price": "100 LE"
      }
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
},

mounted(){
  this.getAllData()
}
}
</script>

<style scoped>
#inspire {
  position: relative;
}
.bg {
  width: 100%;
  height: 85%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("../assets/pyramids-2371501_1280.jpg") no-repeat center center;
  background-size: cover;
  background-color: #e7ebeb;
  transform: scale(1.1);
}

.header-train {
  position: absolute;
  padding-bottom: 0;
  top: 55%;
  right: 58%;
}

.booking {
  position: absolute;
  padding-bottom: 0;
  top: 25%;
  left: 65%;
  border-radius: 10px;
}
.header-train h1 {
  color: #fff;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, PingFang SC, Microsoft YaHei New, Microsoft Yahei,
    微软雅黑, STXihei, 华文细黑, sans-serif;
  letter-spacing: -0.015em;
}

.header-train p {
  color: #d3f1e8;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, PingFang SC, Microsoft YaHei New, Microsoft Yahei,
    微软雅黑, STXihei, 华文细黑, sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.theme--light.v-btn.v-btn--has-bg {
  background-color: #fff;
}

.theme--light.v-btn.v-btn--has-bg[data-v-688b5e20]:hover {
  background-color: #e7ebeb;
}

.v-application .white {
  border-bottom-right-radius: 40px;
}
.v-btn--is-elevated {
  box-shadow: none;
}
</style>
