<script>
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import hasError from '$lib/hasError';
	import { formStore } from '../../stores';

	/** @type {Record<string, string | null | undefined>}*/
	let errors = {};

	/** @param {Event} event */
	function handleInput(event) {
		if (!event.target || !(event.target instanceof HTMLInputElement)) {
			return;
		}

		const { name } = event.target;
		// validate on input change only if there is an existing error
		if (!errors[name]) {
			return;
		}

		const error = hasError(event.target);
		errors[name] = error;
	}

	/** @param {FocusEvent} event */
	function handleBlur(event) {
		if (!event.target || !(event.target instanceof HTMLInputElement)) {
			return;
		}

		const { name } = event.target;
		const error = hasError(event.target);
		errors[name] = error;
	}

	function handleNext() {
		const formEl = document.querySelector('form');
		formEl?.querySelectorAll('input').forEach((element) => {
			const { name } = element;
			const error = hasError(element);
			errors[name] = error;
		});

		if (Object.values(errors).some((error) => Boolean(error))) {
			return;
		}

		formStore.goToNextStep();
	}
</script>

<FormWrapper
	title="Personal Info"
	subtitle="Please provide your name, email address, and phone number."
>
	<div slot="form-content">
		<label
			>Name<input
				type="text"
				name="name"
				placeholder="e.g Stephen King"
				bind:value={$formStore.name}
				required
				on:input={handleInput}
				on:blur={handleBlur}
			/>
		</label>
		{#if errors.name}
			<p>{errors.name}</p>
		{/if}
		<label
			>Email Address<input
				type="email"
				name="email"
				placeholder="e.g stephenking@lorem.com"
				bind:value={$formStore.email}
				required
				on:input={handleInput}
				on:blur={handleBlur}
			/>
		</label>
		{#if errors.email}
			<p>{errors.email}</p>
		{/if}
		<label
			>Phone Number<input
				type="tel"
				name="phone"
				placeholder="e.g stephenking@lorem.com"
				bind:value={$formStore.phone}
				required
				on:input={handleInput}
				on:blur={handleBlur}
			/>
		</label>
		{#if errors.phone}
			<p>{errors.phone}</p>
		{/if}
	</div>
	<svelte:fragment slot="form-actions">
		<button on:click|preventDefault={handleNext}>Next Step</button>
	</svelte:fragment>
</FormWrapper>
