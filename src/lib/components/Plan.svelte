<script>
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import { billingCycleAbrevs } from '$lib/copyMaps';
	import { formStore, selectedBillingCycle } from '../../stores';

	/** @type {PlanI[]} */
	export let plans;
</script>

<FormWrapper title="Select Your Plan" subtitle="You have the option of monthly or yearly billing.">
	<div slot="form-content">
		<fieldset>
			{#each plans as plan}
				<div>
					<input
						type="radio"
						id={plan.value}
						name={plan.value}
						value={plan.value}
						bind:group={$formStore.plan}
					/>
					<label for={plan.value}>{plan.displayValue}</label>
				</div>
				<p>
					${plan.billingCycles[$selectedBillingCycle].price}/{billingCycleAbrevs[
						$selectedBillingCycle
					]}
				</p>
				{#if plan.billingCycles[$selectedBillingCycle].monthsFree}
					<p>{plan.billingCycles[$selectedBillingCycle].monthsFree} months free</p>
				{/if}
			{/each}
		</fieldset>
		<label
			>Yearly Cycle<input
				type="checkbox"
				name="is-yearly"
				bind:checked={$formStore.isYearly}
			/></label
		>
	</div>
	<svelte:fragment slot="form-actions">
		<button on:click={formStore.goToNextStep}>Next Step </button>
		<button on:click={formStore.goToPreviousStep}>Go Back</button>
	</svelte:fragment>
</FormWrapper>
