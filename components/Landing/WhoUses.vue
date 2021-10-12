<template>
  <div class="bgone">
    <v-container>
      <h1>Who uses Lawber?</h1>
      <p>Big brands, small businesses, academics and individuals</p>
      <div class="main">
        <div class="img1">
          <v-img
            src="https://res.cloudinary.com/breather-com/image/upload/q_auto,f_auto,c_scale,w_267/Homepage/facebook"
          ></v-img>
        </div>
        <div class="img2">
          <v-img height="25" src="vmware.png"></v-img>
        </div>
        <div class="img3">
          <v-img src="ey.png"></v-img>
        </div>
        <div class="img4">
          <v-img height="29" src="kpmg.png"></v-img>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
.bgone {
  background: #e6e6ee;
}
.img1 {
  max-width: 6.625rem;
  max-height: 2.8rem;
  margin: 0px 1.75rem 1.625rem;
  display: inline-block;
  width: auto;
  height: auto;
}
.img2 {
  max-width: 6.625rem;
  max-height: 1.5rem;
  margin: 0px 1.75rem 1.95rem;
  display: inline-block;
  width: auto;
  height: auto;
}
.img3 {
  max-width: 7.8rem;
  max-height: 2.9rem;
  margin: 0px 1.75rem 1.625rem;
  display: inline-block;
  width: auto;
  height: auto;
  filter: alpha(opacity=40);
  opacity: 0.7;
}
.img4 {
  max-width: 4.625rem;
  max-height: 1.2srem;
  margin: 0px 1.75rem 1.625rem;
  display: inline-block;
  width: auto;
  height: auto;
}
</style>
