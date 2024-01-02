<script>
	import Stepper from './Stepper.svelte';

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let subtitle;
</script>

<Stepper />
<div class="container">
	<h1>{title}</h1>
	<h2>{subtitle}</h2>
	<form>
		<slot name="form-content" />
		<div class="form-actions">
			<slot name="form-actions" />
		</div>
	</form>
</div>

<style>
	.container {
		top: -70px;
		position: relative;
		width: 90%;
		margin: auto;
		background-color: white;
		border-radius: 10px;
		padding: 32px 24px;
	}

	.form-actions {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background-color: white;
		padding: 16px;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}

	h1 {
		font-size: 24px;
		color: var(--marine-blue);
		margin-bottom: 16px;
	}

	h2 {
		font-size: 16px;
		margin-bottom: 16px;
		font-weight: 400;
		color: var(--cool-gray);
	}
</style>
