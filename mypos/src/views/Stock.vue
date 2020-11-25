<template>
  <v-container>
    <h1>Stock</h1>
    <div>
      <ul>
        <li v-for="(item, index) in ['Angular', 'React', 'Vue']" :key="item">
          {{ index }}. {{ item }}
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "stock",
};
</script>

<style></style>
