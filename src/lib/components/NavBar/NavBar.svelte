<script>
	import Icon from 'svelte-awesome';
	import { plusSquare, ambulance } from 'svelte-awesome/icons';
	import { faFlag, faHamburger } from '@fortawesome/free-solid-svg-icons';
	import SearchBar from './Search.svelte';
</script>

<nav>
	<div class="child left">
        <a href="#d" class="hamburger"><Icon data={faHamburger} scale={1.5} /></a>
		<a href="#d" class="mobile-hide">Social</a>
	</div>
	<div class="child center">
		<SearchBar />
	</div>
	<!-- <div class="space" /> -->
	<div class="child right">
		<a href="#d" class="icons"><Icon data={ambulance} scale={1.5} /></a>
		<a href="#e" class="icons"><Icon data={ambulance} scale={1.5} /></a>
		<a href="#f" class="icons"><Icon data={ambulance} scale={1.5} /></a>
		<a href="#g" class="icons"><Icon data={ambulance} scale={1.5} /></a>
		<a href="#hj"><img alt="Profile" src="../profile-blank.png" /></a>
	</div>
</nav>

<style>
	div {
		/* outline: 1px solid black; */
	}
	.center {
		text-align: center;
	}

	img {
		width: 25px;
		height: 25px;
		background-color: white;
		border: 1px solid black;
		border-radius: 50%;
	}

	nav {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		align-content: stretch;
		background: white;
	}

	.center {
		flex-grow: 1;
		padding: 10px;
	}

	.space {
		flex-grow: 2;
	}

	/* nav div {
        outline: 1px solid black;
    } */

	.right {
		padding-right: 20px;
        padding-left: 20px;
	}

	.left {
		padding-left: 10px;
	}

	.icons {
		padding-right: 10px;
	}

    .hamburger {
        display: none;
    }

	@media only screen and (max-width: 600px) {
		.mobile-hide {
			display: none;
		}

        .icons {
            display: none;
        }

        .hamburger {
            display: block;
        }
	}
</style>
