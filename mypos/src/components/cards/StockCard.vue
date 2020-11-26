<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar>
        <v-icon>{{ avatar_ic }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "StockCard",
  props: {
    title: String,
    subtitle: String,
    avatar_ic: String,
  },
};
</script>

<style></style>
