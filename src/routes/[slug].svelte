<script>
	import { faEnvelope, faHeart, faUserFriends } from '@fortawesome/free-solid-svg-icons';
	import ActionButton from '$lib/components/shared/ActionButton.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import SvelteSeo from 'svelte-seo';

	let post = [
		{
			imgUrl:
				'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D',
			name: 'Keyboard Cat'
		},
		{
			imgUrl:
				'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D',
			name: 'Maru'
		}
	];

	let profile = {
		username: 'willsmith',
		fullname: 'Will Smith',
		followers: 100,
		img: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D'
	};

	let pageTitle = profile.fullname + ' (@' + profile.username + ') - Social Photos';
</script>

<SvelteSeo
	title={pageTitle}
	description=" 56.7m Followers, 205 Following - See {profile.username} (@{profile.username}) on Social"
	keywords="video, sharing, camera phone, video phone, free, upload"
/>

<div class="head">
	<img class="profile-picture" src={profile.img} alt="Profile" />
	<p class="username">{profile.username}</p>
	<p class="fullname">{profile.fullname}</p>
	<div class="data">
		<p><b>1.2M</b> Followers</p>
		<p><b>0</b> Following</p>
	</div>

	<ActionButton icon={faEnvelope}>Message</ActionButton>
	<ActionButton icon={faUserFriends} outline={true}>Follow</ActionButton>
</div>

<div class="posts">
	{#each post as post}
		<button style="background-image: url('{post.imgUrl}');" class="post">
			<p>20</p>
			<p><Fa icon={faHeart} scale={2} /></p>
		</button>
	{/each}
</div>

<style>
	.username {
		font-weight: bold;
	}
	.username,
	.fullname {
		line-height: 0;
		padding: 0.2em;
	}
	.post {
		border: none;
		height: 250px;
	}

	.post p {
		color: white;
		display: inline;
		display: none;
		top: 50%;
		left: 50%;
		margin: 0 auto;
		z-index: 2;
	}

	.post:hover p {
		display: block;
	}

	.post:hover {
		cursor: pointer;
	}

	.profile-picture {
		border-radius: 100%;
	}
	.head {
		margin: 0 auto;
		padding-top: 40px;
		padding-bottom: 40px;
		text-align: center;
	}

	.posts {
		display: grid;
		text-align: center;
		grid-gap: 20px;
		grid-template-columns: repeat(auto-fill, 250px);
		justify-content: center;
	}

	.data p {
		display: inline-block;
		padding-left: 10px;
		padding-right: 10px;
	}
</style>
