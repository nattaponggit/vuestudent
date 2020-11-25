<template>
  <v-container>
    <h1>Stock</h1>
    <div>
      <ul>
        <li v-for="(item, index) in dataArray" :key="item.product_id">
          {{ index }}. {{ item.name }}
        </li>
      </ul>

      <hr />
      <v-data-table
        :headers="headers"
        :items="dataArray"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
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

      headers: [
        { text: "ID", value: "product_id" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
      ],
    };
  },
};
</script>

<style></style>
