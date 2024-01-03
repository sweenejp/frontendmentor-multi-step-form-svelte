<script>
	import { afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

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

	/** @type {number} */
	let containerHeight;
	// @ts-ignore
	const heightTweened = tweened(containerHeight, { duration: 100, easing: cubicOut });

	// NOTE: interesting an ultimately easy way to animate height changes. Took a while to stumble upon this solution though. Another solution might have been to make a custom event and event listener
	afterUpdate(() => {
		// console.log({ prev: $heightTweened, new: containerHeight });
		heightTweened.set(containerHeight);
	});

	// another option is to do a reactive statement. Not sure what is preferred in this case.
	// $: heightTweened.set(containerHeight);

	/** @param {KeyboardEvent} event */
	function handleKeyDown(event) {
		if (event.key === ' ') {
			group = value;
		}
	}
</script>

<!-- TODO `selected` is redundant to `group === value`  -->
<div role="radio" aria-checked={group === value} tabindex="0" on:keydown={handleKeyDown}>
	<label for={name} class:selected style="overflow: hidden; height: {$heightTweened}px;">
		<div bind:clientHeight={containerHeight} class="container">
			<slot name="icon" />
			<div class="labels">
				<div class="label--main">{label}</div>
				<div class="label--sublabel">{sublabel}</div>
				<!-- NOTE: pretty amazing how easy it is to do fade transitions like this when something mounts/unmounts  -->
				{#if details}
					<div in:fade={{ duration: 300 }} class="label--details">
						{details}
					</div>
				{/if}
				<input type="radio" {name} id={name} {value} bind:group />
			</div>
		</div>
	</label>
</div>

<style>
	label {
		border: solid 1px var(--light-gray);
		border-radius: 5px;
		cursor: pointer;
		display: block;

		&.selected {
			background-color: var(--alabaster);
			border-color: var(--purplish-blue);
		}

		&:hover {
			border-color: var(--purplish-blue);
		}
	}

	.container {
		padding: 16px;
		display: flex;
		gap: 16px;
	}

	.labels {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.label--main {
		font-weight: 500;
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
