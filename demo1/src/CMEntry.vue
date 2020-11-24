<template>
  <div>
  <label>{{label}}</label>
    <input v-on:input="onChange" type="text" >
  </div>
</template>

<script>
export default {
    name:"CMEntry",
    // props:["label"],
    props: {
      label:String
    },
    methods: {
      onChange(e){
        // console.log(e.target.value)
        this.$emit("changed", e.target.value)
      }
    },
}
</script>

<style>

</style>