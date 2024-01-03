<script>
	import { fade } from 'svelte/transition';

	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import { billingCycleAbrevs } from '$lib/copyMaps';
	import { formStore, selectedBillingCycle } from '../../stores';
	import ArcadeIcon from './icons/ArcadeIcon.svelte';
	import Button from './Button.svelte';
	import RadioButton from './RadioButton.svelte';
	import AdvancedIcon from './icons/AdvancedIcon.svelte';
	import ProIcon from './icons/ProIcon.svelte';
	import Toggle from './Toggle.svelte';
	import { onMount } from 'svelte';

	/** @type {PlanI[]} */
	export let plans;
</script>

<FormWrapper title="Select Your Plan" subtitle="You have the option of monthly or yearly billing.">
	<div slot="form-content">
		<fieldset>
			{#each plans as plan}
				<RadioButton
					label={plan.displayValue}
					name={plan.value}
					value={plan.value}
					sublabel={`$${plan.billingCycles[$selectedBillingCycle].price}/${billingCycleAbrevs[$selectedBillingCycle]}`}
					details={plan.billingCycles[$selectedBillingCycle].monthsFree
						? `${plan.billingCycles[$selectedBillingCycle].monthsFree} months free`
						: ''}
					bind:group={$formStore.plan}
					selected={$formStore.plan === plan.value}
				>
					<svelte:fragment slot="icon">
						{#if plan.value === 'arcade'}
							<ArcadeIcon />
						{:else if plan.value === 'advanced'}
							<AdvancedIcon />
						{:else if plan.value === 'pro'}
							<ProIcon />
						{/if}
					</svelte:fragment>
				</RadioButton>
			{/each}
		</fieldset>
		<Toggle
			name="is-yearly"
			onLabel="Yearly"
			offLabel="Monthly"
			bind:checked={$formStore.isYearly}
		/>
	</div>
	<svelte:fragment slot="form-actions">
		<Button variant="secondary" on:click={formStore.goToNextStep}>Next Step</Button>
		<Button variant="tertiary" on:click={formStore.goToPreviousStep}>Go Back</Button>
	</svelte:fragment>
</FormWrapper>

<style>
	fieldset {
		border: none;
		display: flex;
		flex-direction: column;
		gap: 12px;

		margin-bottom: 24px;
	}
</style>
