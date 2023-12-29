<script>
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import { billingCycleAbrevs, billingCycleFull, billingCyclePer } from '$lib/copyMaps';
	import { formStore, selectedBillingCycle } from '../../stores';

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
</script>

<FormWrapper title="Finishing up" subtitle="Double-check everything looks OK before confirming.">
	<div slot="form-content">
		<p>{selectedPlan?.displayValue} ({billingCycleFull[$selectedBillingCycle]})</p>
		<p>
			{selectedPlan?.billingCycles[$selectedBillingCycle].price}/{billingCycleAbrevs[
				$selectedBillingCycle
			]}
		</p>
		<button on:click={() => formStore.setStep(2)}>Change</button>
		{#each selectedAddOns as addOn}
			<p>{addOn.displayValue}</p>
			<p>
				{addOn?.billingCycles[$selectedBillingCycle].price}/{billingCycleAbrevs[
					$selectedBillingCycle
				]}
			</p>
		{/each}
		<p>Total ({billingCyclePer[$selectedBillingCycle]})</p>
		<p>{total}</p>
	</div>

	<div slot="form-actions">
		<button on:click={formStore.goToPreviousStep}>Go Back</button><button
			on:click={() => console.log($formStore)}>Confirm</button
		>
	</div>
</FormWrapper>
