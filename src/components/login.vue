<template>
  <div>
    <h1>Login</h1>
    <h3>If you don't have an account, please <router-link to="/register">REGISTER</router-link>.</h3>
    <form-element></form-element>
  </div>
</template>

<script>
import Form from './form.vue'

export default {
  name: 'login',
  components: {
    'form-element': Form
  }
}
</script>

<style>

</style>
