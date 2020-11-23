<template lang="html">
  <v-container>
    <v-row align="center" justify="center" class="pt-10">
      <v-card style="width:400px" :elevation="1">
        <v-img class="white--text align-end" height="200px" src="@/assets/docks.jpg">
          <v-card-title>Register</v-card-title>
        </v-img>

        <v-card-text>
          <v-form @submit.prevent="submit" v-model="valid" ref="form">
            <!-- Username field -->
            <v-text-field label="Username" v-model="account.username" :rules="emailRules" required />

            <!-- Password field -->
            <v-text-field
              label="Password"
              v-model="account.password"
              min="8"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              @click:append="e1 = !e1"
              :type="e1 ? 'password' : 'text'"
              counter
              required
            />

            <!-- Buttons  -->
            <v-layout justify-space-between class="mt-5">
              <v-btn text small class="gray" @click="$router.go(-1)">Cancel</v-btn>
              <v-btn
                type="submit"
                :class="{
                  'blue darken-4 white--text': valid,
                  disabled: !valid
                }"
              >
                Confirm
              </v-btn>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="js">
import api from '@/services/api'

  export default  {
    name: 'register',
    props: [],
    mounted () {

    },
   data () {
          return {
            account:{
              username:"",
              password:""
            },
            valid: false,
            e1: false,
            password: '',
            passwordRules: [
              (v) => !!v || 'Password is required',
            ],
            email: '',
            emailRules: [
              (v) => !!v || 'E-mail is required',
            ],
          }
        },
        methods: {
           async submit () {
            if (this.$refs.form.validate()) {
              await api.register(this.account)
            }
          },
          clear () {
            this.$refs.form.reset()
          }
        },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.register {
}
</style>
