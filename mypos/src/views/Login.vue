<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="@/assets/login_header.jpg"
      >
        <v-card-title>Login</v-card-title>
      </v-img>

      <v-card-text>
        <v-form @submit.prevent="submit" ref="form">
          <v-text-field
            v-model="account.username"
            name="username"
            label="username"
            id="username"
            :rules="emailRules"
            required
          />

          <v-text-field
            v-model="account.password"
            name="password"
            label="password"
            id="password"
            :rules="passwordRules"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            @click:append="e1 = !e1"
            :type="e1 ? 'password' : 'text'"
            counter
          />

          <v-layout row class="mt-4">
            <v-btn type="button" icon @click="clear">
              <v-icon>mdi-cached</v-icon>
            </v-btn>
            <v-btn text color="primary" @click="$router.push('/register')"
              >Register</v-btn
            >

            <div style="flex:1;"></div>

            <v-btn color="success" type="submit">Login</v-btn>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/services/api";
export default {
  name: "login",
  mounted() {
    if (api.isLoggedIn()) {
      this.$router.push("/stock");
    }
  },
  data() {
    return {
      account: {
        username: "",
        password: "",
      },
      emailRules: [(v) => !!v || "E-mail is required"],
      passwordRules: [(v) => !!v || "Password is required"],
      valid: false,
      e1: true,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch({ type: "doLogin", ...this.account });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
