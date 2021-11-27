<script>
	import {
		faEnvelope,
		faBars,
		faHeart,
		faSearch,
		faPlus,
		faBookmark
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import SearchBar from './_components/Search.svelte';
</script>

<nav>
	<div class="container">
		<div class="child left">
			<a href="#d" class="hamburger"><Fa icon={faBars} scale={1.5} /></a>
			<a href="#d" class="mobile-hide">Social</a>
		</div>
		<div class="child center">
			<div class="searchbar">
				<SearchBar />
			</div>
		</div>
		<!-- <div class="space" /> -->
		<div class="child right">
			<a href="#d" class="icons searchbutton"><Fa icon={faSearch} scale={1.3} /></a>
			<a href="#d" class="icons"><Fa icon={faEnvelope} scale={1.3} /></a>
			<a href="#e" class="icons"><Fa icon={faBookmark} scale={1.3} /></a>
			<a href="#f" class="icons"><Fa icon={faPlus} scale={1.3} /></a>
			<a href="#g" class="icons"><Fa icon={faHeart} scale={1.3} /></a>
			<a href="#hj"><img alt="Profile" src="../profile-blank.png" /></a>
		</div>
	</div>
</nav>

<style>
	.icons {
		color: black;
		stroke: black;
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

	.container {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		align-content: stretch;
		max-width: 1250px;
		margin: 0 auto;
	}

	nav {
		background: white;
		width: 100%;
		border-bottom: 1px solid rgb(207, 207, 207);
	}

	.center {
		flex-grow: 1;
		padding: 10px;
	}

	.right {
		padding-right: 20px;
		padding-left: 20px;
		display: flex;
		align-items: center;
	}

	.left {
		padding-left: 20px;
		padding-right: 20px;
	}

	.icons {
		margin-right: 20px;
	}

	.hamburger {
		display: none;
	}
	.searchbutton {
		display: none;
	}
	@media only screen and (max-width: 800px) {
		.mobile-hide {
			display: none;
		}

		.hamburger {
			display: block;
		}
	}
	@media only screen and (max-width: 480px) {
		.searchbutton {
			display: block;
		}

		.searchbar {
			display: none;
		}
	}
</style>
