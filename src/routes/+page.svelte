<script>
	import AddOns from '$lib/components/AddOns.svelte';
	import PersonalInfo from '$lib/components/PersonalInfo.svelte';
	import Plan from '$lib/components/Plan.svelte';
	import Summary from '$lib/components/Summary.svelte';
	import { formStore } from '../stores';

	export let data;
</script>

{#if $formStore.step === 1}
	<PersonalInfo />
{:else if $formStore.step === 2}
	<Plan plans={data.plans} />
{:else if $formStore.step === 3}
	<AddOns addOns={data.addOns} />
{:else if $formStore.step === 4}
	<Summary plans={data.plans} addOns={data.addOns} />
{/if}
