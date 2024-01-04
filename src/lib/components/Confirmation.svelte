<script>
	import { billingCycleFull } from '$lib/copyMaps';
	import ThankYouIcon from './icons/ThankYouIcon.svelte';
	import { formSubmissionStore } from '../../stores';

	/** @type {PlanI[]} */
	export let plans;
	/** @type {AddOnI[]} */
	export let addOns;

	const {
		name,
		email,
		phone,
		plan,
		billingCycle,
		addOns: choosenAddOns
	} = $formSubmissionStore.data || {};

	const selectedPlan = plans.find((planData) => planData.value === plan);
	const selectedAddOns = addOns.filter((addOn) => choosenAddOns?.includes(addOn.value));
</script>

<div class="container">
	<ThankYouIcon />
	<h2>Thank you!</h2>
	<p style="margin-bottom: 16px;">
		Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
		need support, please feel free to email us at support@loremgaming.com.
	</p>
	<p>Subscription summary:</p>
	<ul>
		<li>
			Name: {name}
		</li>
		<li>
			Email: {email}
		</li>
		<li>
			Phone: {phone}
		</li>
		{#if billingCycle}
			<li>
				Plan: {selectedPlan?.displayValue} ({billingCycleFull[billingCycle]})
				<ul>
					{#each selectedAddOns as addOn}
						<li>{addOn.displayValue}</li>
					{/each}
				</ul>
			</li>
		{/if}
	</ul>
</div>

<style>
	.container {
		max-width: 400px;
		margin: auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--cool-gray);
	}

	h2 {
		color: var(--marine-blue);
		margin-bottom: 16px;
		margin-top: 24px;
	}

	ul {
		list-style: none;
	}
</style>
