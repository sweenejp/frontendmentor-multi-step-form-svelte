<script>
	import Stepper from '$lib/components/Stepper.svelte';
</script>

<div class="flex-center-containter-vert">
	<div class="container">
		<Stepper />
		<div class="content-flex-wrapper">
			<div class="content-container">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.content-container {
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

		.content-flex-wrapper {
			flex: 1;
		}

		.content-container {
			position: static;
			max-width: 600px;
			margin: auto;
			padding-right: 0;
			padding-left: 0;
			padding-bottom: 0;
		}
	}
</style>
