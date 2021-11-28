<script lang="ts">
	import { onMount } from 'svelte';

	import Fa from 'svelte-fa/src/fa.svelte';

	export let icon;
	export let activateColor = 'red';
	export let activated = false;

	let button;
	let likes = 100;
	let originalColor;

	onMount(() => {
		originalColor = button.style.color;
	});

	$: likesFormatted = _formatCount(likes);

	function handleClick() {
		activated = !activated;

		if (activated) {
			activateColor = 'rgb(245, 138, 255)';
			likes++;
		} else {
			activateColor = originalColor;
			likes--;
		}

		_changeColor(button, activateColor);
	}

	function _changeColor(element, color) {
		element.style = 'background-color: ' + color;
	}

	const _formatter = Intl.NumberFormat('en', { notation: 'compact' });

	function _formatCount(count: number) {
		return _formatter.format(count);
	}
</script>

<div class="data">
	<button bind:this={button} class="circle" on:click={handleClick}>
		<div class="icon">
			<Fa {icon} scale={1.5} />
		</div>
	</button>
	<p>{likesFormatted}</p>
</div>

<style>
	p {
		text-align: center;
		line-height: 0;
	}

	* {
		padding: 0;
		font-size: 0.8rem;
		line-height: 0.5;
		box-sizing: border-box;
	}

	.circle {
		background-color: rgb(224, 224, 224);
		color: rgb(59, 59, 59);
		border-radius: 100%;
		width: 35px;
		height: 35px;
		cursor: pointer;
		box-sizing: border-box;
		border: none;
	}

	.circle:hover {
		filter: brightness(0.9);
	}
</style>
