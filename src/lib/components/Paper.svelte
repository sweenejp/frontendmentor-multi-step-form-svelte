<div class="paper">
	<slot />
</div>

<style>
	.paper {
		background-color: var(--background-color, var(--magnolia));
		padding: var(--padding, 12px);
		margin: var(--margin, 0);
		border-radius: 7px;
		display: var(--display, block);
		flex-direction: var(--flex-direction);
		justify-content: var(--justify-content);
		align-items: var(--align-items);
	}
</style>
