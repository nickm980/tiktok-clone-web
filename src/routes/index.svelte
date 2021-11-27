<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Post from '$lib/components/Posts/Post.svelte';

	let data = '1';

	onMount(async () => {
		console.log(data);
	});

	let cats = [
		{
			title: 'J---aiyznGQ',
			likeAmount: 3,
			commentAmount: 4,
			img: 'https://revenuezen.com/wp-content/uploads/2019/11/examples-of-good-linkedin-posts-2-1024x801.png'
		},
		{
			title: 'J---aiyznGQ',
			likeAmount: 4,
			commentAmount: 4,
			img: 'https://revenuezen.com/wp-content/uploads/2019/11/examples-of-good-linkedin-posts-2-1024x801.png'
		},
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#each cats as cat}
		<Post postData={cat} />
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
