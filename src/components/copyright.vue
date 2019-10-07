<template lang="html">

    <div>
        <Heart/>
        <section class="bottom">
            <p class="mt-3 mb-3 text-muted small">
                &copy; 2019 
                <a
                    href="https://github.com/michael-lucas-net/" 
                    target="_blank">
                    Michi
                </a> für Chrischi
            </p>
        </section>
    </div>

</template>

<script lang="js">
	import Heart from './herz';

	export default {
		name: 'copyright',
		components: {
			Heart
		}
	};
</script>

<style scoped>
    a {
        font-weight: bold;
        color: #333;
    }
</style>
