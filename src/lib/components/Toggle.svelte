<script>
	/** @type {boolean} */
	export let checked;
	/** @type {string} */
	export let name;
</script>

<label class="outer">
	<div class="inner" class:checked></div>
	<input type="checkbox" bind:checked {name} />
</label>

<style>
	.outer {
		display: block;
		width: 42px;
		height: 21px;
		background-color: var(--marine-blue);
		border-radius: 20px;
		cursor: pointer;
	}

	input {
		display: none;
	}

	.inner {
		content: '';
		width: 15px;
		height: 15px;
		background-color: white;
		border-radius: 20px;
		position: relative;
		top: 3px;
		left: 4px;
		transition: transform ease-in-out 0.1s;

		&.checked {
			transform: translateX(19px);
		}
	}
</style>
