<script>
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import { billingCycleAbrevs } from '$lib/copyMaps';
	import { formStore, selectedBillingCycle } from '../stores';
	import Button from './Button.svelte';
	import CheckboxGroup from './CheckboxGroup.svelte';

	/** @type {AddOnI[]} */
	export let addOns;

	/** @param {AddOnI['billingCycles']} billingCycles*/
	function generatePrice(billingCycles) {
		return `+$${billingCycles[$selectedBillingCycle].price}/${billingCycleAbrevs[$selectedBillingCycle]}`;
	}
</script>

<FormWrapper title="Pick Add-ons" subtitle="Add-ons help enhance your gaming experience.">
	<div slot="form-content">
		<fieldset>
			<CheckboxGroup
				name="add-ons"
				checkboxes={addOns.map(({ billingCycles, description, displayValue, value }) => ({
					value,
					details: description,
					label: displayValue,
					sublabel: generatePrice(billingCycles)
				}))}
				bind:group={$formStore.addOns}
			/>
		</fieldset>
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
	}
</style>
