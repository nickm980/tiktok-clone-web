<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchData } from "$lib/]]";

	let data = fetchData();

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
		<h1>{data.title}</h1>
	{/await}
	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

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
