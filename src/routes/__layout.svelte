<script lang="ts">
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import SideBar from '$lib/components/NavBar/SideBar.svelte';

	import '../app.css';
</script>

<NavBar />

<!--TODO: Use the proper tags here-->
<div class="content">
	<div class="flex">
		<div class="navside">
			<SideBar />
		</div>
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	.content {
		margin-left: 50%;
		width: 100%;
		max-width: 1250px;
		transform: translateX(-50%);
	}

	.flex {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	main {
		display: flex;
		overflow-y: scroll;
		flex-direction: column;
		margin: 0 auto;
		box-sizing: border-box;
		flex-grow: 2;
		height: 90vh;
		padding: 10px;
	}
</style>
