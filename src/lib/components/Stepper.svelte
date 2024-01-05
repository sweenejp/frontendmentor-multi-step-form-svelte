<script>
	import { formStore } from '../stores';
</script>

<div class="container">
	<div class="step">
		<div class="bullet" class:active={$formStore.step === 1}>1</div>
		<div class="step-text">
			<div class="label">Step 1</div>
			<div class="title">Your Info</div>
		</div>
	</div>
	<div class="step">
		<div class="bullet" class:active={$formStore.step === 2}>2</div>
		<div class="step-text">
			<div class="label">Step 2</div>
			<div class="title">Select Plan</div>
		</div>
	</div>
	<div class="step">
		<div class="bullet" class:active={$formStore.step === 3}>3</div>
		<div class="step-text">
			<div class="label">Step 3</div>
			<div class="title">Add-ons</div>
		</div>
	</div>
	<div class="step">
		<div class="bullet" class:active={$formStore.step === 4}>4</div>
		<div class="step-text">
			<div class="label">Step 4</div>
			<div class="title">Summary</div>
		</div>
	</div>
</div>

<style>
	.container {
		padding: 32px;
		background: url('/images/bg-sidebar-mobile.svg');
		background-repeat: no-repeat;
		display: flex;
		gap: 24px;
		justify-content: center;
		align-items: start;
		height: 170px;
	}

	.step {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	.bullet {
		border-radius: 50%;
		border: solid white 1px;
		color: white;
		padding: 16px;
		height: 16px;
		width: 16px;
		display: flex;
		align-items: center;
		justify-content: center;

		&.active {
			background-color: var(--light-blue);
			border-color: var(--light-blue);
			color: var(--marine-blue);
		}
	}

	.step-text {
		display: none;
	}

	@media (min-width: 375px) {
		.container {
			background-size: cover;
		}
	}

	@media (min-width: 800px) {
		.container {
			background-image: url('/images/bg-sidebar-desktop.svg');
			background-position: center;
			border-radius: 10px;
			height: auto;
			flex-direction: column;
			justify-content: start;
			min-width: 300px;
		}

		.step-text {
			display: block;
			text-transform: uppercase;
		}
		.step-text > .label {
			color: var(--cool-gray);
		}

		.step-text > .title {
			color: white;
			font-weight: 500;
			letter-spacing: 2px;
		}
	}
</style>
