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
            :rules="emailRules" required 
            required
          />

          <v-text-field
            v-model="account.password"
            name="password"
            label="password"
            id="password"
          />

          <v-layout row justify-space-between>
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
