<script>
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import { billingCycleAbrevs } from '$lib/copyMaps';
	import { formStore, selectedBillingCycle } from '../../stores';

	/** @type {AddOnI[]} */
	export let addOns;
</script>

<FormWrapper title="Pick Add-ons" subtitle="Add-ons help enhance your gaming experience.">
	<div slot="form-content">
		<fieldset>
			{#each addOns as addOn}
				<div>
					<input
						type="checkbox"
						id={addOn.value}
						name="add-ons"
						value={addOn.value}
						bind:group={$formStore.addOns}
					/>
					<label for={addOn.value}>{addOn.displayValue}</label>
					<p>{addOn.description}</p>
					<p>
						${addOn.billingCycles[$selectedBillingCycle].price}/{billingCycleAbrevs[
							$selectedBillingCycle
						]}
					</p>
				</div>
			{/each}
		</fieldset>
	</div>
	<svelte:fragment slot="form-actions">
		<button on:click={formStore.goToNextStep}>Next Step </button>
		<button on:click={formStore.goToPreviousStep}>Go Back</button>
	</svelte:fragment>
</FormWrapper>
