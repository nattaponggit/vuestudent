<template>
  <div>
    <h1>Hey VueJS</h1>
    <span>I am {{ myname }}</span>
    <div>I have {{ age }} years old</div>
    <div>My address is {{ address }}</div>
    <button @click="register">Register</button>
    <button @click="login">Login</button>
    <hr>
    
    <label>Username</label>
    <input v-model="username"  type="text" > <br>
    
    <label>Password</label>
    <input v-model="password" type="text" > <br>
    <button @click="submit">Submit</button>
    <button @click="clear">Clear</button>
  
      <CMEntry/>
  </div>
</template>

<script>

import CMEntry from "./CMEntry"

export default {
  components:{
    CMEntry
  },
  //Interpolation
  data() {
    return {
      myname: "lek",
      age: 42,
      address: "3761/135 ...",
      username: "",
      password: ""
    };
  },
  methods: {
    clear(){
      this.username = ""
      this.password = ""
    },
    submit(){
      alert(`username: ${this.username}, password: ${this.password}`)
    },
    register(){
      alert("Register")
    },
    login: function(){
      alert("Login")
    }
  },
};
</script>

<style></style>
