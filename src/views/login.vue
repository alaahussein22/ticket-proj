<template>
      <div class="ggg">
 
 <div class="user_register container">
<div class="row">

<section class="userSignIn  col-md-6">

      <h2>User Sign-In</h2>
      <validation-observer
    ref="observer"
  >
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
          digits: 7,
          regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="7"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>
   

      <v-btn
        class="mr-4 mt-4 me-3"
        type="submit"
        style="background-color:#00a88f;border-radius: 25px;"
      >
        submit
      </v-btn>
      <v-btn @click="clear"         class=" mt-4 me-2"
      style="background-color:#e7ebeb;border-radius: 25px;"

>
        clear
      </v-btn>
    </form>
  </validation-observer>


</section>


<div class="col-md-6 pho">
  <img alt="user" src='../assets/a1941e50cb262271d6f737449e4d8233.jpg' />
</div>

</div>
</div>

    </div>
</template>
<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    name:"loginC",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      email: '',

    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''    
        this.$refs.observer.reset()
      },
    },
  }
</script>
<style scoped>


</style>
