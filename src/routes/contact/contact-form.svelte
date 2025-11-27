<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';

	let { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zod4Client(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex p-10">
<form method="POST" use:enhance class=" flex flex-col gap-4 w-md mx-auto">
	<Form.Field {form} name="name">
		<Form.Control>
			{#snippet children({ props })}
				<Input placeholder="Name" {...props} bind:value={$formData.name} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Input placeholder="Email" {...props} bind:value={$formData.email} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="message">
		<Form.Control>
			{#snippet children({ props })}
				<Textarea class='h-80' placeholder="Type your message here." {...props} bind:value={$formData.message} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class='w-fit mx-auto'>Submit</Form.Button>
</form>
</div>