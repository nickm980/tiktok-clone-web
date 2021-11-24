<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Post from '$lib/components/Post.svelte';

	let data = "1";

	onMount(async () => {
		console.log(data);
	});


</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#await data}
		<h1>Loading...</h1>
	{:then data} 
		<h1>{data}</h1>
	{/await}
</section>

<section>
	<Post title="HI"></Post>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
