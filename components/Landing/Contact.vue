<template>
  <v-sheet color="rgb(23, 24, 26)" dark>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            class="px-0"
            src="/logodark.png"
            max-height="100"
            max-width="100"
            contain
          />
          <v-card-text class="px-0">
            <div class="text-h5 hidden-sm-and-down">
              Lawber, Law made simple
            </div>
            <div class="text--subtitle-1 hidden-sm-and-down">
              Powered up research, now, at your service, everywhere.
            </div>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="6">
          <div class="font-weight-bold mb-4">
            Resources
          </div>
          <ul>
            <li>
              <NuxtLink to="/">
                Homepage
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/pcdrivacy">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/tos">
                ToS
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/careers">
                Careers
              </NuxtLink>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style scoped>
.v-application a,
.v-application a:visited {
  text-decoration: none;
  color: rgb(138, 143, 153) !important;
}

a:visited:hover {
  color: #da7676 !important;
}

a:hover {
  color: #da7676 !important;
}

li {
  padding: 0.05rem 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
