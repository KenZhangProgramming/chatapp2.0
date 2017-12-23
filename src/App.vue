<template>
<body>
    <div id="app">
      <router-view/>
    </div>
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
}

body{
  height: 100%;
  width:  100%;
  margin:    0;
  padding:   0;
  background-color: #80d4ff;
}
</style>
