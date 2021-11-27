<script>
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
</script>

<form id="search">
	<input placeholder="Search" />
	<a href="#f" class="button" tabindex="-1">
		<span><Fa icon={faSearch} scale={1} /></span>
	</a>
</form>

<style>
	:root {
		--border-radius: 40px;
		--outline-color: rgb(220, 220, 220);
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: row;
		max-width: 400px;
		background-color: rgb(245, 245, 245);
		border-radius: var(--border-radius);
	}

	input {
		width: 100%;
		padding: 1px;
		padding-left: 21px;
		padding-right: 21px;
		border: none;
		flex-grow: 2;
		background: none;
	}

	input:focus + .button {
		/* Reset padding so that border does not cause shift */
		padding: 0px;
		padding-right: 25px;

		border-left: none;
		border-top: 1px solid var(--outline-color);
		border-bottom: 1px solid var(--outline-color);
		border-right: 1px solid var(--outline-color);
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);

	}

	input:focus {
		/* Reset padding so that border does not cause shift */
		padding: 0px;
		padding-left: 20px;
		padding-right: 20px;

		outline: none;
		border: 1px solid var(--outline-color);
		border-right: none;
		border-radius: var(--border-radius);
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}

	.button {
		height: 35px;
		display: inline-block;
		color: black;
		cursor: pointer;
		padding: 1px;
		padding-right: 26px;
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
		text-align: center;
	}

	.button:hover {
		background-color: rgb(235, 235, 235);
	}

	.button span {
		display: inline-block;
		top: 50%;
		left: 50%;
		margin: 0 auto;
		color: rgb(85, 85, 85);
		position: relative;
		transform: translateY(-50%);
	}
	
</style>
