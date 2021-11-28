<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';

	export let icon: IconDefinition;
	export let active: boolean = false;
	export let href: string;
</script>

<a href={href} class={active ? 'active' : ''}>
	<Fa {icon} scale={1.3} />
	<div class="pl"><slot /></div>
</a>

<style>
	a {
		text-align: left;
		background: transparent;
		border: none;
		width: 100%;
		font-weight: bold;
		padding-top: 0.8em;
		padding-left: 0.8em;
		padding-bottom: 0.8em;
	}

	a:hover {
		cursor: pointer;
		background-color: rgb(243, 243, 243);
		transition: all 0.2s;
	}

	a.active {
		color: rgba(255, 81, 0, 0.795);
	}

	.pl {
		display: inline-block;
		padding-left: 15px;
	}
</style>
