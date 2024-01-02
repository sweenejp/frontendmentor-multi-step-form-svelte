<script>
	/** @type {boolean} */
	export let primary = false;
	/** @type {boolean} */
	export let secondary = false;
</script>

<!-- NOTE: writing classes this way instead of using a prop like `variant` since this helps the linter know what class names are possible. This would not be necessary if using typescript in svelte. Obviously, you could also just ignore the squiggles -->
<button class:primary class:secondary on:click><slot /></button>

<style>
	button {
		padding: 10px 18px;
		font-weight: 600;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color ease-in-out 0.1s;
	}

	.secondary {
		background-color: transparent;
		color: var(--cool-gray);

		&:hover {
			background-color: var(--light-gray);
		}

		&:focus {
			background-color: var(--light-gray);
		}
	}

	.primary {
		background-color: var(--marine-blue);
		color: white;

		&:hover {
			background-color: var(--purplish-blue);
		}

		&:focus {
			background-color: var(--purplish-blue);
		}
	}
</style>
