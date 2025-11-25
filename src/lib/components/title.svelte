<script lang="ts">
	import BaseData from '$lib/data/base';

	export let title = 'Title';
</script>

<svelte:head>
	<title>{`${title} | ${BaseData.meta}`}</title>
</svelte:head>