<template>
  <v-dialog transition="dialog-top-transition" max-width="600" >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mb-2"
        v-bind="attrs"
        v-on="on"
        style="
          background-color: #00a88f;
          color: #fff;
          width: 100%;
          height: 55px;
          border-radius: 10px;
          font-weight: bold;
        "
        >Continue
        <v-icon class="ms-5" dark right color="#fff" style="font-size: 20px">
          mdi-arrow-right
        </v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="#e7ebeb"
          >Please Enter These Information To Continue</v-toolbar
        >
        <v-card-text>
          <div class="mt-4">
            <validation-observer ref="observer">
              <form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required|max:10"
                >
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :error-messages="errors"
                    label="Name"
                    required
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    digits: 11,
                    regex: '^(010|012|010|011|015)\\d{8}$',
                  }"
                >
                  <v-text-field
                    v-model="phoneNumber"
                    :counter="11"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="personalID "
                  :rules="{
                    required: true,
                    digits: 14,
                    regex: '^([0-9]{14})',
                  }"
                >
                  <v-text-field
                    v-model="personalID"
                    :counter="14"
                    :error-messages="errors"
                    label="Personal ID"
                    required
                  ></v-text-field>
                </validation-provider>

                <v-btn
                  class="mr-4 mt-4 me-3"
                  type="submit"
                  style="background-color: #00a88f; border-radius: 25px"
                >
                  submit
                </v-btn>
                <v-btn
                  @click="clear"
                  class="mt-4 me-2"
                  style="background-color: #e7ebeb; border-radius: 25px"
                >
                  clear
                </v-btn>
              </form>
            </validation-observer>
          </div>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("personalID ", {
  ...email,
  message: "personalID  must be valid",
});

export default {
  name: "continuC",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    personalID: "",
    phoneNumber: "",
    dialog: false,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
      alert("You Are booking Ticket Successfully");
      this.$router.push("/");
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.personalID = "";
      this.$refs.observer.reset();
    },
  },
};
</script>
