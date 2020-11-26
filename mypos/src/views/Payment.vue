<template>
  <div><v-btn @click="onSubmit" block color="success" dark>Payment</v-btn></div>
</template>

<script>
export default {
  name: "payment",
  methods: {
    onSubmit() {
      this.$emit("onResult", {
        status: "ok",
        change: 9,
      });
    },
  },
};
</script>

<style></style>
