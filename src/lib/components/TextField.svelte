<script>
	import hasError from '$lib/hasError';

	/** @type {string} */
	export let label;
	/** @type {string} */
	export let value;
	/** @type {'text' | 'email' | 'tel'} */
	export let type;
	/** @type {string} */
	export let name;
	/** @type {string} */
	export let placeholder;
	/** @type {boolean} */
	export let required;
	/** @type {string | null | undefined} */
	export let error = '';

	/** @param {Event} event */
	function handleInput(event) {
		if (!event.target || !(event.target instanceof HTMLInputElement)) {
			return;
		}

		// validate on input change only if there is an existing error
		if (!error) {
			return;
		}

		error = hasError(event.target);
	}

	/** @param {FocusEvent} event */
	function handleBlur(event) {
		if (!event.target || !(event.target instanceof HTMLInputElement)) {
			return;
		}

		const { name } = event.target;
		error = hasError(event.target);
	}
</script>

<label>
	<div class="label-text">
		{label}
		{#if error}
			<strong class="error-message">{error}</strong>
		{/if}
	</div>
	{#if type === 'text'}
		<input
			type="text"
			{name}
			{placeholder}
			{required}
			bind:value
			on:input={handleInput}
			on:blur={handleBlur}
			class:error
		/>
	{:else if type === 'email'}
		<input
			type="email"
			{name}
			{placeholder}
			{required}
			bind:value
			on:input={handleInput}
			on:blur={handleBlur}
			class:error
		/>
	{:else if type === 'tel'}
		<input
			type="tel"
			{name}
			{placeholder}
			{required}
			bind:value
			on:input={handleInput}
			on:blur={handleBlur}
			class:error
		/>
	{/if}
</label>

<style>
	label {
		color: var(--marine-blue);
		font-size: 14px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.label-text {
		display: flex;
		justify-content: space-between;
	}

	.error-message {
		color: var(--strawberry-red);
		text-align: right;
	}

	input {
		color: var(--marine-blue);
		font-weight: 600;
		padding: 8px;
		display: block;
		border-radius: 5px;
		border: 1px solid var(--light-gray);
		outline: none;

		&:focus {
			border-color: var(--purplish-blue);
		}
	}

	.error {
		border-color: var(--strawberry-red);
	}
</style>
