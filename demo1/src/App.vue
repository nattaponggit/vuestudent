<template>
  <div>
    <h1>Hey VueJS</h1>
    <span>I am {{ myname }}</span>
    <div>I have {{ age }} years old</div>
    <div>My address is {{ address }}</div>
    <button @click="register">Register</button>
    <button @click="login">Login</button>
    <hr>
    
    <input v-model="username"  type="text" placeholder="Username"> <br>
    <input v-model="password" type="text" placeholder="Password"> <br>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
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
