<template>
<v-container grid-list-md>
    <v-form v-model="valid">
      <v-flex xs6 offset-xs3>
          <v-text-field
            label="User Name"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="PassWord"
            v-model="password"
            :rules="passwordRules"
            required
          ></v-text-field>
      </v-flex>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'form',
  data () {
  }
}
</script>

<style scoped>


</style>
