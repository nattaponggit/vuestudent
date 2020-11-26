<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import api from "@/services/api";
export default {
  name: "transaction",
  async mounted() {
    const result = await api.getTransactions();
    this.data = result.data;
  },
  data() {
    return {
      headers: [{ text: "Id", value: "transaction_id" }],
      data: [],
    };
  },
};
</script>

<style></style>
