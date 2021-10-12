<template>
  <v-col cols="4">
    <v-card flat>
      <v-img contain width="45" height="45" :src="icon"> </v-img>
      <v-card-title class="pl-0 py-1">{{ title }} </v-card-title>
      <p>
        {{ text }}
      </p>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["icon", "title", "text"],
};
</script>

<style>
</style>
