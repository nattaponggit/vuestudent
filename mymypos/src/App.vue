<template>
  <v-app>
    <v-container>
      <v-content>
        <v-card max-width="300" class="pa-5">
          <v-form>
            <v-text-field
              name="username"
              label="username"
              id="username"
            ></v-text-field>

            <v-text-field
              name="password"
              label="password"
              id="password"
            ></v-text-field>

            <v-btn class="mt-5" block color="primary" dark>Register</v-btn>
          </v-form>
        </v-card>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>