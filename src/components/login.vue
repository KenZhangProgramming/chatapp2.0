<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Login</h3>
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
            @click="login">
            Login
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'login',
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
  methods: {}
}
</script>

<style>

</style>
