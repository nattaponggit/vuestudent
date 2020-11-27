<template>
  <h1>Hey {{msg}}</h1>
  <h4>{{name}}</h4>
  <h4>{{version}}</h4>
  <h4>{{isYes}}</h4>
  <h4>{{account}}</h4>
  <h4>{{nameR}}</h4>
</template>

<script>
import {ref, reactive} from "vue"
export default {
  name: "HelloWorld",
  props:{
    msg:String
  },
  setup(){
    const name = ref("lek")
    const version = ref(3)
    const isYes = ref(true)
    const account = ref({username: "admin",password: "1234"})
    var nameR = reactive("codemobiles")

    setInterval(()=>{
      isYes.value = !isYes.value
      account.value = {username: "", password: ""}
      nameR = "ttttt"
    },3000)

    return {name, version, isYes, account, nameR}
  },

}
</script>

<style>

</style>