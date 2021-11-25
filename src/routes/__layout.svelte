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

<footer>
	<p>Made by nickm980</p>
</footer>

<style>
	main {
		margin-left: 50%;
		width: 100%;
		max-width: 1500px;
		transform: translateX(-50%);
	}
	.flex {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.content {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		flex-grow: 2;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
