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

	let cats = [
		{ title: 'J---aiyznGQ', likeAmount: 3, commentAmount: 4, img: "https://img.url/" },
		{ title: 'J---aiyznGQ', likeAmount: 4, commentAmount: 4, img: "https://img.url/" },
		{ title: 'J---aiyznGQ', likeAmount: 5, commentAmount: 4, img: "https://img.url/" },
	];
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
	{#each cats as cat}
		<Post postData={cat}></Post>
	{/each}
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
