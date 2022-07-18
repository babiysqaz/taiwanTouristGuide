<template>
  <HeadBar />
  <router-view />
  <FootBar />
</template>

<script>
import HeadBar from "@/components/HeadBar.vue";
import FootBar from "@/components/FootBar.vue";

export default {
  name: "App",
  components: {
    HeadBar,
    FootBar,
  },
};
</script>

<style lang="scss">
</style>
