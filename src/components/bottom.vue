<template lang="html">

    <div>
        <Heart/>
        <section class="bottom">
            <p class="mt-3 mb-3 text-muted small">
                &copy; 2019 Michi für Chrischi
            </p>
        </section>
    </div>

</template>

<script lang="js">
	import Heart from './heart';

	export default {
		name: 'bottom',
		components: {
			Heart
		}
	};
</script>