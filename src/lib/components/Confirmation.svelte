<script>
	import { billingCycleFull } from '$lib/copyMaps';
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

<h2>Thank you!</h2>
<p>
	Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
	support, please feel free to email us at support@loremgaming.com.
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
