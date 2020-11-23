<template>
  <div>
  <label>{{label}}</label>
    <input v-model="username"  type="text" >
  </div>
</template>

<script>
export default {
    name:"CMEntry",
    props:["label"]

}
</script>

<style>

</style>