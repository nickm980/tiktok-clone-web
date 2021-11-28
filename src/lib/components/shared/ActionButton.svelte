<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';

	import Fa from 'svelte-fa/src/fa.svelte';

	export let outline: boolean = false;
	export let width: 'full' | 'small' = 'full';
	export let icon: IconDefinition = null;
</script>

<button style="width: {width}" class={outline ? 'outline' : 'fill'}>
	{#if icon}
		<Fa {icon} scale={1.3} />
	{/if}

	<slot />
</button>

<style>
	button {
		display: inline-block;
		cursor: pointer;
		padding: 0.5em;
	}

	button.outline {
		border: 1px solid red;
		background-color: transparent;
		color: red;
	}

	button.fill {
		border: 1px solid red;
		background-color: red;
		color: white;
	}
</style>
