<script>
	import { fade } from 'svelte/transition';

	import AddOns from '$lib/components/AddOns.svelte';
	import Confirmation from '$lib/components/Confirmation.svelte';
	import PersonalInfo from '$lib/components/PersonalInfo.svelte';
	import Plan from '$lib/components/Plan.svelte';
	import Summary from '$lib/components/Summary.svelte';
	import { formStore, formSubmissionStore } from '../stores';
	import FadeIn from '$lib/components/FadeIn.svelte';

	export let data;
</script>

{#if $formSubmissionStore.status === 'pending'}
	<p>loading...</p>
{:else if $formSubmissionStore.status === 'success'}
	<FadeIn>
		<Confirmation plans={data.plans} addOns={data.addOns} />
	</FadeIn>

	<!-- form submission is idle -->
{:else if $formStore.step === 1}
	<FadeIn>
		<PersonalInfo />
	</FadeIn>
{:else if $formStore.step === 2}
	<FadeIn>
		<Plan plans={data.plans} />
	</FadeIn>
{:else if $formStore.step === 3}
	<FadeIn>
		<AddOns addOns={data.addOns} />
	</FadeIn>
{:else if $formStore.step === 4}
	<FadeIn>
		<Summary plans={data.plans} addOns={data.addOns} />
	</FadeIn>
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
