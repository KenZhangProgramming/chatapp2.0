<template>
  <v-toolbar fixed color="orange darken-1" height="60px">
    <v-toolbar-title class="mr-4">Chat App</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn flat color = "white"
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>

      <v-btn flat color="white">
        Log Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>


</template>

<script>
export default {
  name: 'header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
.mr-4{
  color: white;
}

</style>
