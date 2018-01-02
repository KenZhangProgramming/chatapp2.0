<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Register</h3>
            </div>
          </v-card-title>
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
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>
            </v-flex>
          </v-form>
          <v-btn
            dark
            class="cyan"
            @click="register">
            Register
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'register',
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
    register () {
      let uri = 'http://localhost:4000/users/register'
      var user = {'name': this.name, 'password': this.password}
      console.log(user)
      this.axios.post(uri, {"name": this.name, "password": this.password}).then((response) => {
        console.log(response)
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style>

</style>
