<template lang="html">
  <section class="ergebnis">
    <div class="feldContainer">
      <div
        class="alert"
        v-bind:class="{
          'alert-success': result > 0,
          'alert-secondary': result === 0
        }"
        role="alert"
      >
        <small>
          Anteil benachteiligter Mitarbeiter:
          <span>{{ result }}%</span>
        </small>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
    name: "ergebnis",
    props: ["result"],
};
</script>

<style scoped>
.feldContainer {
  margin: 10px 0;
}
</style>
