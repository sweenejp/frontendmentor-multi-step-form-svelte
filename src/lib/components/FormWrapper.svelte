<script>
	import Stepper from './Stepper.svelte';

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let subtitle;
</script>

<div class="flex-center-containter-vert">
	<div class="container">
		<Stepper />
		<div class="content-container">
			<div class="content">
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
			</div>
		</div>
	</div>
</div>

<style>
	.content {
		top: -70px;
		position: relative;
		width: 90%;
		height: 100%;
		margin: auto;
		background-color: white;
		border-radius: 10px;
		padding: 32px 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 34px;
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
		font-weight: 400;
		color: var(--cool-gray);
	}

	@media (min-width: 800px) {
		.flex-center-containter-vert {
			display: flex;
			align-items: center;
			height: 100vh;
		}
		.container {
			flex: 1;
			display: flex;
			padding: 16px;
			align-items: stretch;
			max-width: 1100px;
			margin: auto;
		}

		.content-container {
			flex: 1;
		}

		.content {
			position: static;
			max-width: 600px;
			margin: auto;
			padding-right: 0;
			padding-left: 0;
			padding-bottom: 0;
		}

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
