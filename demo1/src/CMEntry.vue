<template>
  <div>
  <label>{{label}}</label>
    <input @input="onChange" type="text" >
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
        console.log(e.target.value)
      }
    },
}
</script>

<style>

</style>