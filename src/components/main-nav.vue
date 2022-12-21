<template>
    <div>
        
      <v-layout row justify-center>
        <v-toolbar color="white">
          <v-toolbar-title>
            <div class="logoWrapper-Na8Fx" data-testid="logo-wrapper">
              <a
                href="/"
                title="Trainline"
                class="logoLink-m6nF+"
                data-testid="trainline-logo-link"
                ><picture
                  ><source
                    srcset="
                      https://static.trainlinecontent.com/content/vul/logos/trainline-mint.svg
                    "
                    media="(min-width: 992px)" />
                  <img
                    data-testid="trainline-logo-image"
                    class="logo-oVgUw"
                    alt="Trainline logo"
                    src="https://static.trainlinecontent.com/content/vul/logos/trainline-mint.svg" /></picture
              ></a>
            </div>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn v-for="item in nav" :key="item.icon" :title="item.title" :to="item.to">{{
              item.text
            }}</v-btn>
          </v-toolbar-items>

          <v-btn
          to="/login"
            class="ms-3 sign"
            style="border-radius: 25px; background-color: #e7ebeb"
            >Sign in</v-btn
          >
        </v-toolbar>
      </v-layout>
      
    </div>
</template>

<script>

export default{
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
        {
          text: "Contact Us",
          title: "About this demo",
          active: false,
          to:'/contactUS'
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
