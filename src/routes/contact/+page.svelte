<script lang='ts'>
	import ContactMe from './contact.svelte';
	import type { PageData } from "./$types.js";
	export let data: PageData;
</script>

<section>
	<ContactMe {data} />
</section>
