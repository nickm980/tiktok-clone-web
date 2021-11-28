<script>
	import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
	import HashTag from './_components/HashTag.svelte';
	import NavLink from './_components/NavLink.svelte';
	import NavUser from './_components/NavUser.svelte';

	const person1 = {
		imgUrl:
			'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D',
		username: 'willsmith',
		fullname: 'Will Smith',
		verified: false
	};
</script>

<nav id="sidebar-lg">
	<div class="buttons">
		<NavLink icon={faHome} href="/" active={true}>For You</NavLink>
		<NavLink icon={faUserFriends} href="/" active={false}>Following</NavLink>
	</div>

	<div class="create">
		<p>Upload a photo to share with the world!</p>
		<button>Create +</button>
	</div>

	<h2>Suggested Accounts</h2>

	<div class="accounts">
		<NavUser user={person1} />
		<NavUser user={person1} />
		<NavUser user={person1} />
		<NavUser user={person1} />
	</div>

	<h2>Discover</h2>
	<div class="discover">
		<HashTag tag="#ThisisTag" />
		<HashTag tag="#foryoupage" />
		<HashTag tag="#new" />
		<HashTag tag="#trending" />
		<HashTag tag="#thisisaverylonghashtagwhichislong" />
		<HashTag tag="#willsmith" />
		<HashTag tag="#new" />
		<HashTag tag="#new" />
		<HashTag tag="#new" />
	</div>
</nav>

<nav id="sidebar-sm">
	HI
</nav>

<style>
	#sidebar-lg::-webkit-scrollbar-thumb {
		display: none;
	}

	#sidebar-lg:hover::-webkit-scrollbar-thumb {
		display: block;
	}

	:root {
		--hashtag-margins: 10px;
	}

	.discover {
		max-width: fit-content;
		margin-left: calc(var(--hashtag-margins) * -1);
		margin-top: calc(var(--hashtag-margins) * -1);
		padding-bottom: 20px;
		border-bottom: 1px solid rgb(243, 243, 243);
	}

	.discover > :global(*) {
		margin-left: var(--hashtag-margins);
		margin-top: var(--hashtag-margins);
	}

	#sidebar-lg {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		width: 100%;
		max-height: calc(90vh);
		overflow-y: visible;
		padding-right: 4px;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
		margin-top: 20px;
		border-bottom: 1px solid rgb(243, 243, 243);
	}
	#sidebar-lg:hover {
		overflow-x: hidden;
		overflow-y: visible;
	}

	.accounts {
		border-bottom: 1px solid rgb(243, 243, 243);
		padding: 0;
		padding-bottom: 20px;
	}

	.create {
		border-bottom: 1px solid rgb(243, 243, 243);
		padding-top: 5px;
		padding-bottom: 15px;
		line-height: 0;
		font-size: 0.8rem;
	}

	button {
		background-color: transparent;
		width: 100%;
		cursor: pointer;
		padding-top: 10px;
		padding-bottom: 10px;
		color: rgb(233, 151, 0);
		border: 1px solid rgb(233, 151, 0);
	}

	button:hover {
		background-color: rgb(255, 233, 194);
	}

	#sidebar-sm {
		display: none;
		border: 2px solid green;
		height: 90vh;
	}

	@media (max-width: 800px) {
		#sidebar-lg {
			display: none;
		}
		#sidebar-sm {
			display: block;
		}
	}
</style>
