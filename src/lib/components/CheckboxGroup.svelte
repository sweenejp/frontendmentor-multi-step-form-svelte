<!-- 
  NOTE: You can't have individual Checkbox components and have things work with two-way binding. https://github.com/sveltejs/svelte/issues/2308
  
  At first this seems confusing (especially since it does appear to be an issue for radio inputs). But this isn't such a big deal. In reality, it forces you to create CheckboxGroup components, which, from the user's perspective, is more like a single coherent input. The same is true really for radio groups. The only draw back here is that you can't share the atomic Checkbox component in other places. Say you had some custom Checkbox component and you wanted to use them in here, plus as a one-off toggle, and you want it to be the same component so that it looks the same. Well, the thing is, they are just too different in that case. You can always just share the styles, but unfortunately, you'll have to rewrite some markup.render

  There are ways around this issue - by binding `checked` instead of group and then manually updating the group array (https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1), however, this seems like a good enough solution to me for now.
-->

<script>
	/**
	 * @typedef Checkbox
	 * @property {string} label
	 * @property {string} sublabel
	 * @property {string} details
	 * @property {string} value
	 * */

	/** @type {Checkbox[]} */
	export let checkboxes = [];
	/** @type {string} */
	export let name;
	/** @type {string[]} */
	export let group = [];
</script>

{#each checkboxes as checkbox}
	<label class:selected={group.includes(checkbox.value)}>
		<input type="checkbox" {name} value={checkbox.value} bind:group />
		<div class="labels">
			<div class="left">
				<div class="label--main">{checkbox.label}</div>
				<div class="label--details">
					{checkbox.details}
				</div>
			</div>
			<div class="right label--sublabel">{checkbox.sublabel}</div>
		</div>
	</label>
{/each}

<style>
	label {
		padding: 16px;
		border: solid 1px var(--light-gray);
		border-radius: 5px;
		cursor: pointer;
		display: flex;
		gap: 16px;
		align-items: center;

		&.selected {
			background-color: var(--alabaster);
			border-color: var(--purplish-blue);
		}

		&:hover {
			border-color: var(--purplish-blue);
		}
	}

	input {
		appearance: none;
		height: 21px;
		width: 21px;
		display: block;
		cursor: pointer;
		border-radius: 5px;
		border: solid 1px var(--light-gray);

		&:checked {
			background-color: var(--purplish-blue);
			background-image: url('/images/icon-checkmark.svg');
			background-repeat: no-repeat;
			background-position: center;
		}
	}

	.labels {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > .left {
			display: flex;
			flex-direction: column;
			gap: 2px;
		}
	}

	.label--main {
		font-weight: 600;
		color: var(--marine-blue);
	}

	.label--sublabel {
		color: var(--purplish-blue);
		font-weight: 600;
	}

	.label--details {
		color: var(--cool-gray);
	}
</style>
