<script lang="ts">
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import NavSide from '$lib/components/NavBar/NavSide.svelte';

	import '../app.css';
</script>

<NavBar />

<main>
	<div class="flex">
		<div class="navside">
			<NavSide />
		</div>
		<div class="content">
			<slot />
		</div>
	</div>
</main>

<style>
	main {
		margin-left: 50%;
		width: 100%;
		max-width: 1250px;
		transform: translateX(-50%);
	}
	.flex {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;

		padding-left: 10px;
		padding-right: 10px;
	}

	.content {
		display: flex;
		overflow-y: scroll;
		flex-direction: column;
		margin: 0 auto;
		box-sizing: border-box;
		flex-grow: 2;
		height: 90vh;
	}
</style>
