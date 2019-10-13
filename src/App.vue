<template>
  <div id="app">
    <Quotenrechner />
  </div>
</template>

<script>
import Quotenrechner from "./components/QuotenRechner.vue";

export default {
  name: "app",
  components: {
    Quotenrechner
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
