<script>
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import { billingCycleAbrevs, billingCycleFull, billingCyclePer } from '$lib/copyMaps';
	import mockFetch from '$lib/mockFetch';
	import { formStore, selectedBillingCycle, formSubmissionStore } from '../../stores';
	import Button from './Button.svelte';

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

	<svelte:fragment slot="form-actions">
		<Button variant="primary" on:click={handleSubmit}>Confirm</Button>
		<Button variant="tertiary" on:click={formStore.goToPreviousStep}>Go Back</Button>
	</svelte:fragment>
</FormWrapper>
