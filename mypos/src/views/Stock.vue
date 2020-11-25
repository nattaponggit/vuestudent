<template>
  <v-container>
    <h1>Stock</h1>
    <div>
      <ul>
        <li v-for="(item, index) in dataArray" :key="item">
          {{ index }}. {{ item.name }}
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
import api from "@/services/api";
export default {
  name: "stock",
  async mounted() {
    console.log("Hey Mounted");
    const result = await api.getProducts();
    this.dataArray = result.data;
  },
  data() {
    return {
      dataArray: [],
    };
  },
};
</script>

<style></style>
