<script>
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import { billingCycleAbrevs, billingCycleFull, billingCyclePer } from '$lib/copyMaps';
	import mockFetch from '$lib/mockFetch';
	import { formStore, selectedBillingCycle, formSubmissionStore } from '../../stores';
	import Button from './Button.svelte';
	import Paper from './Paper.svelte';

	/** @type {PlanI[]} */
	export let plans;
	/** @type {AddOnI[]} */
	export let addOns;

	const selectedPlan = plans.find((plan) => plan.value === $formStore.plan);
	const selectedAddOns = addOns.filter((addOn) => $formStore.addOns.includes(addOn.value));

	const selectedPlanPrice = selectedPlan?.billingCycles[$selectedBillingCycle].price || 0;
	const selectedAddonsTotal = selectedAddOns.reduce((prev, current) => {
		return prev + current.billingCycles[$selectedBillingCycle].price || 0;
	}, 0);

	const total = selectedPlanPrice + selectedAddonsTotal;

	const submissionParams = {
		name: $formStore.name,
		email: $formStore.email,
		phone: $formStore.phone,
		plan: $formStore.plan,
		addOns: $formStore.addOns,
		billingCycle: $selectedBillingCycle
	};

	const handleSubmit = async () => {
		$formSubmissionStore.status = 'pending';
		const res = await mockFetch(submissionParams);
		$formSubmissionStore = res;
	};
</script>

<FormWrapper title="Finishing up" subtitle="Double-check everything looks OK before confirming.">
	<div slot="form-content">
		<Paper --padding="24px">
			<div class="plan">
				<p class="plan-value">
					{selectedPlan?.displayValue} ({billingCycleFull[$selectedBillingCycle]})
				</p>
				<div class="plan-bottom">
					<button class="change-plan" on:click={() => formStore.setStep(2)}>Change</button>
					<p class="plan-price">
						${selectedPlan?.billingCycles[$selectedBillingCycle].price}/{billingCycleAbrevs[
							$selectedBillingCycle
						]}
					</p>
				</div>
			</div>
			<div class="add-ons">
				{#each selectedAddOns as addOn}
					<div class="add-on">
						<p class="add-on-value">{addOn.displayValue}</p>
						<p class="add-on-price">
							+${addOn?.billingCycles[$selectedBillingCycle].price}/{billingCycleAbrevs[
								$selectedBillingCycle
							]}
						</p>
					</div>
				{/each}
			</div>
		</Paper>
		<div class="total">
			<p class="total-text">Total ({billingCyclePer[$selectedBillingCycle]})</p>
			<p class="total-price">${total}/{billingCycleAbrevs[$selectedBillingCycle]}</p>
		</div>
	</div>

	<svelte:fragment slot="form-actions">
		<Button
			variant="primary"
			on:click={handleSubmit}
			loading={$formSubmissionStore.status === 'pending'}>Confirm</Button
		>
		<Button variant="tertiary" on:click={formStore.goToPreviousStep}>Go Back</Button>
	</svelte:fragment>
</FormWrapper>

<style>
	.plan {
		border-bottom: 1px solid var(--light-gray);
		padding-bottom: 24px;
	}

	.plan-value {
		font-weight: 500;
		font-size: 18px;
	}

	.plan-bottom {
		display: flex;
		justify-content: space-between;
	}

	.change-plan {
		appearance: none;
		border: none;
		background-color: transparent;
		text-decoration: underline;
		color: var(--cool-gray);
		cursor: pointer;
	}

	.plan-price {
		font-weight: 500;
		color: var(--marine-blue);
	}

	.add-ons {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding-top: 16px;
	}

	.add-on {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
	}

	.add-on-value {
		color: var(--cool-gray);
	}
	.add-on-price {
		color: var(--marine-blue);
	}

	.total {
		display: flex;
		justify-content: space-between;
		padding: 24px;
	}

	.total-text {
		color: var(--cool-gray);
		font-size: 14px;
	}

	.total-price {
		color: var(--purplish-blue);
		font-size: 20px;
		font-weight: 700;
	}
</style>
