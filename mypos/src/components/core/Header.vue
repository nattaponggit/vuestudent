<template lang="html">
  <v-app-bar app color="#1c2835" dark>
    <v-btn icon @click="$router.back()" v-if="isShowBackBtn">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>CMPOS Workshop V{{ version }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <span>{{ $store.getters["username"] | capitalize }}</span>
    <v-btn icon @click="onClickLogOff">
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="js">
const sub_paths = [
  "stock-create",
  "stock-edit"]

import api from "@/services/api";
  export default  {
    name: 'Header',
    props: [],
    mounted () {
    },
    computed: {
      version(){
        return process.env.VUE_APP_VERSION
      },
      isShowBackBtn(){
        return this.$route.matched.some(({ name }) => {
          let index = sub_paths.indexOf(name)
          return index != -1
          })
      }
    },
    data () {
      return {
      }
    },
    methods: {
      onClickLogOff(){

        this.$store.dispatch('doLogout')
      }
    }
}
</script>

<style scoped lang="scss"></style>
