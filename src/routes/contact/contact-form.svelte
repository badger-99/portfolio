<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import HomeData from '$lib/data/home';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Icon } from 'svelte-awesome';

	let { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } = $props();

	let loading = $state(false);

	const form = superForm(data.form, {
		validators: zod4Client(formSchema),

		onSubmit: () => {
			loading = true;
		},

		onResult: ({ result }) => {
			loading = false;

			if (result.type === 'success') {
				toast.success('Message sent!', {
					description: "Thank you for reaching out, I'll respond ASAP!"
				});
			}

			if (result.type === 'failure') {
				toast.error('Oops! Looks like something went wrong.', {
					description:
						'You can send me an email at contact@alfredm.me, or click the button to use your app.',
					action: {
						label: 'Email Me',
						onClick: () => {
							window.location.href = 'mailto:contact@alfredm.me';
						}
					},
					duration: Infinity
				});
			}
		},

		onError: () => {
			loading = false;
			toast.error('Oops! Looks like something went wrong.', {
				description:
					'You can send me an email at contact@alfredm.me, or click the button to use your app.',
				action: {
					label: 'Email Me',
					onClick: () => {
						window.location.href = 'mailto:contact@alfredm.me';
					}
				},
				duration: Infinity
			});
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex pt-10">
	<form method="POST" use:enhance class=" mx-auto flex w-md flex-col gap-4">
		<Form.Field {form} name="name">
			<Form.Control>
				{#snippet children({ props })}
					<Input
						class="border border-muted-foreground"
						placeholder="Name"
						{...props}
						bind:value={$formData.name}
						required
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="email">
			<Form.Control>
				{#snippet children({ props })}
					<Input
						class="border border-muted-foreground"
						placeholder="Email"
						{...props}
						bind:value={$formData.email}
						required
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="subject">
			<Form.Control>
				{#snippet children({ props })}
					<Input
						class="border border-muted-foreground"
						placeholder="Subject (optional)"
						{...props}
						bind:value={$formData.subject}
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="message">
			<Form.Control>
				{#snippet children({ props })}
					<Textarea
						class="h-60 resize-none overflow-y-auto border border-muted-foreground"
						placeholder="Type your message here."
						{...props}
						bind:value={$formData.message}
						required
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button class="mx-auto w-fit" disabled={loading}
			>{loading ? 'Submitting...' : 'Submit'}</Form.Button
		>

		<div class="flex flex-row gap-3 mx-auto mt-9">
			{#each HomeData.hero.links.slice(0, -1) as item}
				<a href={item.href} target="_blank">
					<Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger>
								<Button variant="outline" size="icon" class="border border-foreground">
									<Icon data={item.icon} style="width: 26px; height: 26px;" />
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content side="bottom">{item.label}</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				</a>
			{/each}
		</div>
	</form>
</div>
