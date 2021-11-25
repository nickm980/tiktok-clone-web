<script>
	import {
		faEnvelope,
		faHamburger,
		faHeart,
		faUserFriends,
		faPlus,
		faSearch
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
</script>

<form>
	<input placeholder="Search" />
	<a href="#f" class="button">
		<Fa icon={faSearch} scale={1.3} />
	</a>
</form>

<style>
	form {
		width: 100%;
		/* This bit sets up the horizontal layout */
		display: flex;
		flex-direction: row;

		/* This bit draws the box around it */
		/* I've used padding so you can see the edges of the elements. */
		max-width: 400px;
        background-color: rgb(245, 245, 245);
        border-radius: 40px;
	}

	input {
		width: 100%;
		padding-left: 20px;
		padding-right: 20px;
		border: none;
		flex-grow: 2;
        background: none;
	}
	input:focus {
		outline: none;
	}

    form:focus {
        outline: 1px solid black;
    }

	.button {
		height: 40px;
		display: inline-block;
		color: black;
		cursor: pointer;
        padding-right: 25px;
	}
</style>
