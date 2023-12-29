<script>
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let subtitle;
</script>

<h1>{title}</h1>
<h2>{subtitle}</h2>
<form>
	<slot name="form-content" />
	<slot name="form-actions" />
</form>
