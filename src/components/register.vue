<template>
  <div>
    <h1>Register</h1>
    <form-element></form-element>
  </div>
</template>

<script>
import Form from './form.vue'

export default {
  name: 'register',
  components: {
    'form-element': Form
  },
  data(){
        return{
          item:{}
        }
    },
    methods: {
      registerUser(){
        let uri = 'http://localhost:4000/users/register';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'DisplayItem'})
        })
    }
  }
}
</script>

<style>

</style>
