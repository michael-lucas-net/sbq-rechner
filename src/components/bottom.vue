<template lang="html">
  <div>
    <div class="herz mt-5 animated infinite pulse">
      <img src="../assets/herz.png" alt="Herz" class="herzImg" />
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
  data: function() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #333;
}
.herz {
  font-size: 35px;
  display: inline-block;
}

.herzImg {
  width: 35px;
}
</style>
