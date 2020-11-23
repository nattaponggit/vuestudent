<template>
  <div>
    <h1>Register</h1>
    <form>
      <input type="text" v-model="account.username" placeholder="Username" />
      <input type="text" v-model="account.password" placeholder="Password" />
      <button type="submit">Submit</button>
      <span>#Debug {{ account }}</span>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      account: {
        username: "",
        password: ""
      }
    }
  },
};
</script>

<style></style>
