<script>
	/** @type {string} */
	export let label;
	/** @type {string} */
	export let name;
	/** @type {string} */
	export let value;
	/** @type {string} */
	export let group;
	/** @type {string} */
	export let sublabel;
	/** @type {string} */
	export let details = '';
	/** @type {boolean} */
	export let selected;
</script>

<label for={name} class:selected>
	<slot name="icon" />
	<div class="labels">
		<div class="label--main">{label}</div>
		<div class="label--sublabel">{sublabel}</div>
		{#if details}
			<div class="label--details">{details}</div>
		{/if}
	</div>
	<input type="radio" {name} id={name} {value} bind:group />
</label>

<style>
	label {
		display: block;
		border: solid 1px var(--light-gray);
		border-radius: 5px;
		cursor: pointer;
		padding: 16px;
		display: flex;
		gap: 16px;

		&.selected {
			background-color: var(--alabaster);
			border-color: var(--purplish-blue);
		}
	}

	.labels {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.label--main {
		font-weight: 600;
		color: var(--marine-blue);
	}

	.label--sublabel {
		font-size: 14px;
		color: var(--cool-gray);
	}

	.label--details {
		font-size: 14px;
		color: var(--marine-blue);
	}

	input {
		display: none;
	}
</style>
