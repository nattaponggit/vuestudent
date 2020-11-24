<template>
  <div>
    <h1>Hey VueJS</h1>
    <span>I am {{ myname }}</span>
    <div>I have {{ age }} years old</div>
    <div>My address is {{ address }}</div>
    <button @click="register">Register</button>
    <button @click="login">Login</button>
    <button @click="$store.dispatch({ type: 'clear' })">Reset</button>
    <br>
    <span>{{$store.state.count}}</span>
    <hr />

    <CMEntry v-model="username" :label="username_label" @changed="onChange" />
    <CMEntry v-model="password" label="Password" />
    <button  v-on:click="submit">Submit</button>
    <button @click="clear">Clear</button>
  </div>
</template>

<script>
import CMEntry from "./CMEntry";

export default {
  components: {
    CMEntry,
  },
  //Interpolation
  mounted() {
    this.username_label = "Init Username"
  },
  data() {
    return {
      myname: "lek",
      age: 42,
      address: "3761/135 ...",
      username: "",
      password: "",
      username_label:"Username"
    };
  },
  methods: {
    onChange(value){
      console.log("Input : " + value)
    },
    clear() {
      this.username = "";
      this.password = "";
    },
    submit() {
      alert(`username: ${this.username}, password: ${this.password}`);
    },
    register() {
      //alert("Register");
      this.$store.state.count++
    },
    login: function() {
      alert("Login");
    },
  },
};
</script>

<style></style>
