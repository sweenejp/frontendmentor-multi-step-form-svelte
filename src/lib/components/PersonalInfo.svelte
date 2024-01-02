<script>
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import hasError from '$lib/hasError';
	import { formStore } from '../../stores';
	import Button from './Button.svelte';
	import TextField from './TextField.svelte';

	/** @type {Record<string, string | null | undefined>}*/
	const errors = {};

	/** @param {Event} event */
	function handleNext(event) {
		event.preventDefault();
		const formEl = document.querySelector('form');
		/** @type {HTMLInputElement} */
		let erroredInput;
		formEl?.querySelectorAll('input').forEach((element) => {
			const { name } = element;
			const error = hasError(element);
			errors[name] = error;
			if (error && !erroredInput) {
				erroredInput = element;
			}
		});

		// @ts-ignore
		if (erroredInput) {
			erroredInput.focus();

			return;
		}

		formStore.goToNextStep();
	}
</script>

<FormWrapper
	title="Personal info"
	subtitle="Please provide your name, email address, and phone number."
>
	<div slot="form-content" class="form-content">
		<TextField
			label="Name"
			type="text"
			name="name"
			placeholder="e.g Stephen King"
			bind:value={$formStore.name}
			required
			error={errors.name}
		/>
		<TextField
			label="Email Address"
			type="email"
			name="email"
			placeholder="e.g stephenking@lorem.com"
			bind:value={$formStore.email}
			required
			error={errors.email}
		/>
		<TextField
			label="Phone Number"
			type="tel"
			name="phone"
			placeholder="e.g +1 234 567 890"
			bind:value={$formStore.phone}
			required
			error={errors.phone}
		/>
	</div>
	<svelte:fragment slot="form-actions">
		<Button variant="secondary" on:click={handleNext}>Next Step</Button>
	</svelte:fragment>
</FormWrapper>

<style>
	.form-content {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
