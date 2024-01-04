<script>
	import AddOns from '$lib/components/AddOns.svelte';
	import Confirmation from '$lib/components/Confirmation.svelte';
	import PersonalInfo from '$lib/components/PersonalInfo.svelte';
	import Plan from '$lib/components/Plan.svelte';
	import Summary from '$lib/components/Summary.svelte';
	import { formStore, formSubmissionStore } from '../stores';

	export let data;
</script>

{#if $formSubmissionStore.status === 'success'}
	<Confirmation plans={data.plans} addOns={data.addOns} />

	<!-- form submission is idle -->
{:else if $formStore.step === 1}
	<PersonalInfo />
{:else if $formStore.step === 2}
	<Plan plans={data.plans} />
{:else if $formStore.step === 3}
	<AddOns addOns={data.addOns} />
{:else if $formStore.step === 4}
	<Summary plans={data.plans} addOns={data.addOns} />
{/if}
