<template>
  <div id="app">
    <QuotaCalculator />
  </div>
</template>

<script>
import QuotaCalculator from "./components/quotaCalculator.vue";

export default {
  name: "app",
  components: {
    QuotaCalculator: QuotaCalculator,
  },
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
