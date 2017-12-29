<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Login</h3>
            </div>
          </v-card-title>
          <form-element></form-element>
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
