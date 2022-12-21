<template>
    <div>
        <div class="con mb-5 justify-content-center align-items-center">

<div class="user_register container">
<div class="row">

<form class="row g-3 col-md-7 needs-validation" noValidate>

<section class="row g-3 needs-validation section " style="justify-content: center;" noValidate>
<h3 style="margin:20px 0;color:#566573;text-align:center">Hi, I Hope Find You Well! </h3>

  <div class="col-md-6">
    <input type="text" class="form-control" id="validationCustom01" placeholder='First Name' required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>

  <div class="col-md-6">
    <input type="text" class="form-control" id="validationCustom02" placeholder='Last Name'  required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-12">
    <div class="input-group has-validation">
      <input type="text" class="form-control" id="validationCustomUsername" 
      placeholder='Email'
       aria-describedby="inputGroupPrepend" required />
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>


  <div class="col-md-6">
    <select class="form-select" id="validationCustom04" placeholder="City" required>
      <option selected disabled value="">City</option>
      <option>Cairo</option>
      <option>Alexandria</option>
      <option>Banha</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid City.
    </div>
  </div>


  <div class="col-md-6">
    <input type="text" class="form-control" id="validationCustom05" placeholder="Phone" required />
    <div class="invalid-feedback">
      Please provide a valid Id.
    </div>
  </div>
 

  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" 
  id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Leave your message here</label>
</div>

  <div class="col-md-12 mt-4">
    <button class="btn btn-purple form-control sign fw-bold" type="submit" 
    style="background-color:#e7ebeb;border-radius: 25px;"

    >Send</button>
  </div>

</section>

</form>



</div>
</div>
</div>

   

    </div>    
</template>

<script>

export default {
    name:'contactUS',
    data() {
      return{

      }   
    },
}
</script>


<style scoped>

</style>
