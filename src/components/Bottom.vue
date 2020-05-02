<template lang="html">
  <div>
    <div class="heart mt-5 animated infinite pulse">
      <img src="../assets/heart.png" alt="Heart" class="heartImage" />
    </div>
    <section class="bottom">
      <p class="mt-3 mb-3 text-muted small">
        &copy; 2019-{{ year }}
        <a href="https://github.com/michael-lucas-net/" target="_blank">
          Michi
        </a>
        für Chrischi
      </p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    year: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #333;
}
.heart {
  font-size: 35px;
  display: inline-block;
}

.heartImage {
  width: 35px;
}
</style>
