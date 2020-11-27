<template>
  <h1>Hey {{msg}}</h1>
  <h4>{{name}}</h4>
  <h4>{{version}}</h4>
  <h4>{{isYes}}</h4>
  <h4>{{account}}</h4>
  <h4>{{user}}</h4>
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
    let user = reactive({username: "admin",password: "1234"})

    setInterval(()=>{
      isYes.value = !isYes.value
      account.value.username = !isYes.value
      user.username = !isYes.value
    },300)

    return {name, version, isYes, account, user}
  },

}
</script>

<style>

</style>