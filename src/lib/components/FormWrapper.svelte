<script>
	import Stepper from './Stepper.svelte';

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let subtitle;
</script>

<Stepper />
<h1>{title}</h1>
<h2>{subtitle}</h2>
<form>
	<slot name="form-content" />
	<slot name="form-actions" />
</form>
