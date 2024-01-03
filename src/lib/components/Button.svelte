<script>
	/** @type {'primary' | 'secondary' | 'tertiary'} */
	export let variant;
	/** @type {boolean} */
	export let disabled = false;
	/** @type {boolean} */
	export let loading = false;
</script>

<!-- NOTE: if a class name is dynamic, need to use template literal instead of the svelte class "directive" -->
<button class={`${variant}`} disabled={disabled || loading} on:click>
	{#if loading}
		<span>loading...</span>
	{:else}
		<slot />
	{/if}
</button>

<style>
	button {
		padding: 10px 18px;
		font-weight: 600;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: opacity ease-in-out 0.1s;
	}

	.tertiary {
		background-color: transparent;
		color: var(--cool-gray);

		&:hover {
			opacity: 0.8;
		}

		&:focus {
			opacity: 0.8;
		}
	}

	.secondary {
		background-color: var(--marine-blue);
		color: white;

		&:hover {
			opacity: 0.8;
		}

		&:focus {
			opacity: 0.8;
		}
	}

	.primary {
		background-color: var(--purplish-blue);
		color: white;

		&:hover {
			opacity: 0.8;
		}

		&:focus {
			opacity: 0.8;
		}
	}
</style>
