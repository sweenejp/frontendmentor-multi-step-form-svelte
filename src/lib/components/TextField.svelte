<script>
	import hasError from '$lib/hasError';

	// NOTE: One of the bigger road blocks I've encountered with Svelte so far. Pretty annoying that it is not easy to basically extend props to a parent component. One way around this would be to have a single prop called "inputProps", but that ends up looking pretty ugly when the component is used. Using typescript and svelte's $$restProps might also work better in order to get things typed correctly - haven't tried it yet. However, the Svelte docs suggest not using $$restProps since it is not very performant. In React, it is easy to simply extend the props of a component since props is just a function parameter. In Svelte, each prop is it's own variable. So you can't just, for example, tell the component that its props will be all HTMLInputAttributes, plus a few custom ones like "label".
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
	<!-- NOTE: again - annoying. There may be a better way to achieve this but need a series of if statements here because "type" cannot be dynamic when using two way binding.-->
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
		font-weight: 500;
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
