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

          <v-layout row justify-space-between class="mt-4">
            <v-btn flat color="primary">Cancel</v-btn>
            <v-btn color="success" type="submit">Login</v-btn>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "login",
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
        alert(JSON.stringify(this.account));
      }
    },
  },
};
</script>

<style></style>
