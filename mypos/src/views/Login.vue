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
        <v-form>
          <v-text-field name="username" label="username" id="username" />

          <v-text-field name="password" label="password" id="password" />

          <v-layout row>
            <v-btn flat color="primary">Cancel</v-btn>
            <v-btn color="success">Login</v-btn>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "login",
};
</script>

<style></style>
