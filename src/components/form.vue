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
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'PassWord is required'
        ]
      }
    },
    methods: {
      updatePasswordAndName: function () {
        console.log('testing')
        if (this.name !== '' && this.password !== '') {
          this.$emit('credentials', {'name': this.name, 'password': this.password})
        }
      }
    }
  }
</script>

<style scoped>


</style>
