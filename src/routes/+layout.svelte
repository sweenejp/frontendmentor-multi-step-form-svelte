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
	@font-face {
		font-family: 'Ubuntu';
		font-weight: 700;
		font-style: normal;
		src: url('/fonts/Ubuntu-Bold.ttf');
	}

	@font-face {
		font-family: 'Ubuntu';
		font-weight: 500;
		font-style: normal;
		src: url('/fonts/Ubuntu-Medium.ttf');
	}

	@font-face {
		font-family: 'Ubuntu';
		font-weight: 400;
		font-style: normal;
		src: url('/fonts/Ubuntu-Regular.ttf');
	}
	:root {
		--marine-blue: hsl(213, 96%, 18%);
		--purplish-blue: hsl(243, 100%, 62%);
		--light-blue: hsl(206, 94%, 87%);
		--strawberry-red: hsl(354, 84%, 57%);
		--cool-gray: hsl(231, 11%, 63%);
		--light-gray: hsl(229, 24%, 87%);
		--magnolia: hsl(217, 100%, 97%);
		--alabaster: hsl(231, 100%, 99%);
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Ubuntu', sans-serif;
		line-height: 1.3;
	}

	:global(body) {
		background-color: var(--magnolia);

		@media (min-width: 800px) {
			background-color: white;
		}
	}

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
