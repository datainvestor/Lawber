<template>
  <div class="pic-box">
    <div class="grad">
      <h2 class="text-title">
        How Lawber works
      </h2>
      <h3 style="padding-left: 2%" class="my-3">
        1. Easily check law people
        <v-divider class="divider1 mt-1" />
      </h3>
      <p class="text-box">
        Whether looking up instantly using person's credentials or via advanced
        search, it’s easy to find law person or entity with curated data for
        them.
      </p>
      <h3 style="padding-left: 2%" class="my-3">
        2. Simple and secure access
        <v-divider class="divider1 mt-1" />
      </h3>
      <p class="text-box">
        All data is gathered from public resources and according to all latest
        GDPR laws and measures. It is stored safely and audited periodically to
        ensure its safety.
      </p>
      <h3 style="padding-left: 2%" class="my-3">
        3. Take a tour
        <v-divider class="divider1 mt-1" />
      </h3>
      <p class="text-box">
        Want to check what is possible with our app? Conenct with our customer
        care team to set up a 100% remote tour.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pic-box {
  margin-left: 50px;
  margin-top: 50px;
  width: 100%;
  height: 500px;
  background: url("~/static/app.jpg") right;
  background-repeat: no-repeat;
  background-size: 1000px 600px;
}
@media (max-width: 580px) {
  .pic-box {
    padding-left: 10px;
    margin-left: 0px;
    margin-top: 30px;
    width: 100%;
    height: 500px;
    background: none;
  }
}

.grad {
  width: 90%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}

.text-box {
  width: 40%;
  padding-left: 2%;
  font-size: 1em;
}

@media (max-width: 480px) {
  .text-box {
    width: 100%;
    padding-left: 2%;
    font-size: 1em;
  }
}

.text-title {
  padding-left: 2%;
  padding-bottom: 1%;
  color: rgb(131, 84, 84);
  font-weight: bold;
  font-size: 1.65em;
}

@media (max-width: 480px) {
  .text-title {
    padding: 1%;
    color: rgb(23, 24, 26);
    font-family: MaisonNeue,sans-serif!important;
    font-weight: normal;
    font-size: 1.4em;
  }
}

.divider1 {
  width: 100px;
  border-color: rgba(3, 3, 206, 0.685) !important;
}
</style>
