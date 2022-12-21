<template>
  <div class="fff">
    <footer class="footer container">
      <div class="row">
        <div class="col-md-3 left">
          <h3>trainline</h3>
          <span class="d-flex">
            <v-icon large color="#d3f1e8"> mdi-facebook </v-icon>
            <v-icon large color="#d3f1e8"> mdi-youtube </v-icon>
            <v-icon large color="#d3f1e8"> mdi-instagram </v-icon>
          </span>
        </div>

        <div class="col-md-3 right">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Basket</li>
            <li>Bookings</li>

            <li>Guide Videos</li>
          </ul>
        </div>

        <div class="col-md-3 right">
          <h3>Useful Links</h3>
          <ul>
            <li>FAQ`s</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div class="col-md-3 right">
          <h3>Contact</h3>
          <ul>
            <li>
              <v-icon large color="#d3f1e8"> mdi-phone </v-icon>

              +123 4456 01234
            </li>
            <li>
              <v-icon large color="#d3f1e8"> mdi-map-marker </v-icon>

              Giza,Egypt
            </li>
            <li>
              <v-icon large color="#d3f1e8"> mdi-mail </v-icon>
              trainline@gmail.com
            </li>
          </ul>
        </div>

        <p class="copy">&copy;Copyrights 2022 by trainline</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {};
  },
};
</script>

<style scoped>
.fff {
  background-color: #00a88f;
}

.footer {
  background-color: #00a88f;

  /* margin:80px 0 0 0;
       padding:20px 0;  */
}
.footer .left {
  margin: 10px 0;
}
.footer .right {
  margin: 20px 0;
}

.footer .left h3 {
  color: #e7ebeb;
  font-weight: bold;
  font-size: 40px;
}

.footer .left span {
  color: white;
  text-align: center;
  padding: 10px 20px;
  margin: 7px;
}

.footer .right h3 {
  color: #d0d3d4;
  font-weight: bold;
  font-size: 25px;
}
.footer .right ul {
  list-style: none;
}

.footer .right ul li {
  padding: 0;
  color: #d0d3d4;
  margin: 7px -20px;
}

.footer .copy {
  text-align: center;
  color: #d0d3d4;
  font-size: 20px;
  margin: 15px 0 0 0;
}
</style>
