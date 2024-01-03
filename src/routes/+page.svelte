<script>
	import { fade } from 'svelte/transition';

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

<style>
	@font-face {
		font-family: 'Ubuntu';
		font-weight: 700;
		font-style: normal;
		src: url('/fonts/Ubuntu-Bold.ttf');
	}

	@font-face {
		font-family: 'Ubuntu';
		font-weight: 600;
		font-style: normal;
		src: url('/fonts/Ubuntu-Medium.ttf');
	}

	@font-face {
		font-family: 'Ubuntu';
		font-weight: 400;
		font-style: normal;
		src: url('/fonts/Ubuntu-Regular.ttf');
	}
	:root {
		--marine-blue: hsl(213, 96%, 18%);
		--purplish-blue: hsl(243, 100%, 62%);
		--light-blue: hsl(206, 94%, 87%);
		--strawberry-red: hsl(354, 84%, 57%);
		--cool-gray: hsl(231, 11%, 63%);
		--light-gray: hsl(229, 24%, 87%);
		--magnolia: hsl(217, 100%, 97%);
		--alabaster: hsl(231, 100%, 99%);
	}
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Ubuntu', sans-serif;
		line-height: 1.3;
	}

	:global(body) {
		background-color: var(--magnolia);
	}
</style>
