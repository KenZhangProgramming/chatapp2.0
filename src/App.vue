<template>
  <div id="app">
    <header>
      <page-header/>
    </header>
      <body>
        <v-app>
          <div id="app">
            <v-container fluid>
                <router-view/>
            </v-container>
          </div>
        </v-app>
      </body>
  </div>
</template>

<script>
import PageHeader from './components/header.vue'
export default {
  name: 'app',
  components: {
    'page-header': PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #99e6ff;
}

</style>
