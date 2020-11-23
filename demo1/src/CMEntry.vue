<template>
  <div>
  <label>{{label}}</label>
    <input @change:="onChange" type="text" >
  </div>
</template>

<script>
export default {
    name:"CMEntry",
    props:["label"],
    methods: {
        onChange(target){
            console.log(target.value)
        }
    },  

}
</script>

<style>

</style>