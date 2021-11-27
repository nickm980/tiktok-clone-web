<script>
	import { faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import HashTag from './_components/HashTag.svelte';
	import NavButton from './_components/NavButton.svelte';
	import NavUser from './_components/NavUser.svelte';
	import { fly } from 'svelte/transition';

	const person1 = {
		imgUrl:
			'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D',
		username: 'willsmith',
		fullname: 'Will Smith',
		verified: false
	};
</script>

<nav id="nav">
	<div class="buttons">
		<NavButton href="/" active={true}>
			<Fa icon={faHome} scale={1.3} />
			<div class="pl">For You</div>
		</NavButton>
		<NavButton href="">
			<Fa icon={faUserFriends} scale={1.3} />
			<div class="pl">Following</div>
		</NavButton>
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

<style>


	nav::-webkit-scrollbar-thumb {
		display: none;
	}

	nav:hover::-webkit-scrollbar-thumb {
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

	.pl {
		display: inline-block;
		padding-left: 15px;
	}

	nav {
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
	nav:hover {
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

	@media (max-width: 800px) {
		nav {
			display: none;
		}
	}
</style>
