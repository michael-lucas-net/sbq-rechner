<template lang="html">

    <section class="heart">
        <div class="heart mt-5 animated infinite pulse">
            <img src="../assets/herz.png" alt="Herz" class="heartImg"/>
        </div>
    </section>

</template>

<script lang="js">
	export default {
		name: 'heart'
	};
</script>

<style scoped lang="css">
    .heart {
        font-size: 35px;
        display: inline-block;
    }

    .heartImg {
        width: 35px;
    }
</style>
