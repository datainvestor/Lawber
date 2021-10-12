<template>
  <div class="features1">
    <h1>Law made simple</h1>
    <v-row class="mt-4">
      <CardFeature
        v-for="item in cardItems"
        v-bind:key="item.id"
        :icon="item.icon"
        :title="item.title"
        :text="item.text"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardItems: [
        {
          icon: "/icons/bus.svg",
          title: "Distraction-free space",
          text: "Breather gives you and your team private space to focus and innovate, without the distractions of shared coworking spaces and overcrowded offices.",
        },
        {
          icon: "/icons/bus.svg",
          title: "Distraction-free space",
          text: "Breather gives you and your team private space to focus and innovate, without the distractions of shared coworking spaces and overcrowded offices.",
        },
        {
          icon: "/icons/bus.svg",
          title: "Distraction-free space",
          text: "Breather gives you and your team private space to focus and innovate, without the distractions of shared coworking spaces and overcrowded offices.",
        },
        {
          icon: "/icons/bus.svg",
          title: "Distraction-free space",
          text: "Breather gives you and your team private space to focus and innovate, without the distractions of shared coworking spaces and overcrowded offices.",
        },
        {
          icon: "/icons/bus.svg",
          title: "Distraction-free space",
          text: "Breather gives you and your team private space to focus and innovate, without the distractions of shared coworking spaces and overcrowded offices.",
        },
        {
          icon: "/icons/bus.svg",
          title: "Distraction-free space",
          text: "Breather gives you and your team private space to focus and innovate, without the distractions of shared coworking spaces and overcrowded offices.",
        },
      ],
    };
  },
};
</script>

<style>
</style>
