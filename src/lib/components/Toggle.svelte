<script>
	/** @type {boolean} */
	export let checked;
	/** @type {string} */
	export let name;
	/** @type {string} */
	export let offLabel;
	/** @type {string} */
	export let onLabel;

	/** @param {KeyboardEvent} event */
	function handleKeyDown(event) {
		if (event.key === ' ') {
			checked = !checked;
		}
	}
</script>

<label>
	<span class="off-label">
		{offLabel}
	</span>
	<div class="outer" role="checkbox" aria-checked={checked} tabindex="0" on:keydown={handleKeyDown}>
		<div class="inner" class:checked></div>
	</div>
	<input type="checkbox" bind:checked {name} />
	<span class="on-label">
		{onLabel}
	</span>
</label>

<style>
	label {
		display: flex;
		gap: 8px;
	}

	input {
		display: none;
	}

	.outer {
		display: block;
		width: 42px;
		height: 21px;
		background-color: var(--marine-blue);
		border-radius: 20px;
		cursor: pointer;
		position: relative;
	}

	.inner {
		content: '';
		width: 15px;
		height: 15px;
		background-color: white;
		border-radius: 20px;
		position: absolute;
		top: 3px;
		left: 4px;
		transition: transform ease-in-out 0.1s;

		&.checked {
			transform: translateX(19px);
		}
	}
</style>
