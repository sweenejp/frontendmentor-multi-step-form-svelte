<div class="container">
	<div class="step">
		<div class="bullet">1</div>
		<div class="step-text">
			<div class="label">Step 1</div>
			<div class="title">Your Info</div>
		</div>
	</div>
	<div class="step">
		<div class="bullet">2</div>
		<div class="step-text">
			<div class="label">Step 2</div>
			<div class="title">Select Plan</div>
		</div>
	</div>
	<div class="step">
		<div class="bullet">3</div>
		<div class="step-text">
			<div class="label">Step 3</div>
			<div class="title">Add-ons</div>
		</div>
	</div>
	<div class="step">
		<div class="bullet">4</div>
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
	}

	.step-text {
		display: none;
	}
</style>
