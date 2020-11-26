<template>
  <v-content>
    <v-fade-transition mode="out-in" duration="150">
      <router-view />
    </v-fade-transition>
  </v-content>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style></style>
