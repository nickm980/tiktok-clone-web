<script lang="ts">
	export let tag;
	export let linkType: 'button' | 'text' = 'button';
</script>

{#if linkType == 'button'}
	<a href="/tags/{tag}" class="hashtag">#{tag}</a>
{:else}
	<a href="/tags/{tag}">#{tag}</a>
{/if}

<style>
	.hashtag {
		background-color: transparent;
		border: 1px solid rgb(209, 209, 209);
		font-size: 0.8rem;
		border-radius: 10px;
		padding: 0.3em;
		padding-left: 0.4em;
		padding-right: 0.4em;
		color: rgb(122, 122, 122);
	}

	.hashtag:hover {
		cursor: pointer;
		background-color: rgb(243, 243, 243);
	}
</style>
