<script>
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let subtitle;
</script>

<div class="content-top">
	<h1>{title}</h1>
	<h2>{subtitle}</h2>
</div>
<form class="content-bottom">
	<slot name="form-content" />
	<div class="form-actions">
		<slot name="form-actions" />
	</div>
</form>

<style>
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
		font-weight: 400;
		color: var(--cool-gray);
	}

	@media (min-width: 800px) {
		h1 {
			font-size: 32px;
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 75px;
		}

		.form-actions {
			position: static;
			padding-top: 0;
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
