<script lang='ts'>
	import TitledPage from '$lib/components/ui/custom-components/titled-page.svelte';
	import Lead from '../../lib/components/typography/lead.svelte';
	import ContactForm from './contact-form.svelte';
	import type { PageData } from "./$types.js";
	export let data: PageData;
</script>

<TitledPage title={'Contact Me'}>
	<div class='mx-auto text-center px-4'>
		<Lead>Have feedback or a project in mind? I'd love to hear from you — send me a message and let's chat!</Lead>
		<ContactForm {data} />
	</div>
</TitledPage>
