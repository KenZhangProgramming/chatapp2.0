<template>
<body>
  <v-app>
    <div id="app">
      <v-container fluid>
          <router-view/>
      </v-container>
    </div>
  </v-app>
</body>
</template>

<script>
export default {
  name: 'app'
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
  background-color: #80d4ff;
}

body{
  height: 100%;
  width:  100%;
  margin:    0;
  padding:   0;
}
</style>
