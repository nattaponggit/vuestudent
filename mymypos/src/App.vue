<template>
  <v-app>
    <v-container>
      <v-content>
        <v-card max-width="300" class="pa-5">
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="user.username"
              name="username"
              label="username"
              id="username"
            ></v-text-field>

            <v-text-field
              v-model="user.password"
              name="password"
              label="password"
              id="password"
            ></v-text-field>

            <v-btn type="submit" class="mt-5" block color="primary" dark>Register</v-btn>
          </v-form>
        </v-card>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      const result = await axios.post(
        "http://localhost:8081/register",
        this.user
      );
      if (result.data.status == "ok") {
        alert(result.data.message);
      } else {
        alert("Register failed : " + result.data.message);
      }
    },
  },
};
</script>

<style></style>
