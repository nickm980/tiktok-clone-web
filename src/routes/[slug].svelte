<script>
	import { faEnvelope, faHeart, faUserFriends } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
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
		},
		{
			imgUrl:
				'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D',
			name: 'Henri The Existential Cat'
		},
        {
			imgUrl:
				'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D',
			name: 'Henri The Existential Cat'
		}
	];

	let profile = {
		username: 'willsmith',
		fullname: 'Will Smith',
		followers: 100,
		img: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D'
	};
</script>

<div class="head">
	<img class="profile-picture" src={profile.img} alt="Profile" />
	<p class="username">{profile.username}</p>
	<p class="fullname">{profile.fullname}</p>
	<div class="data">
		<p><b>1.2M</b> Followers</p>
		<p><b>0</b> Following</p>
	</div>
	<button class="fill"><Fa icon={faEnvelope} />Message</button>
	<button class="outline"><Fa icon={faUserFriends} />Follow</button>
</div>

<div class="posts">
	{#each post as post}
		<button style="background-image: url('{post.imgUrl}');" class="post">
			<p>20<Fa icon={faHeart} scale={1} /></p>
        </button>
        
	{/each}
</div>

<style>
    .username {
        font-weight: bold;
    }
    .username, .fullname {
        line-height: 0;
        padding: 0.2em;
    }
	.post {
        border: none;
		height: 250px;
	}

	.post > :global(*) {
		display: hidden;
		top: 50%;
		left: 50%;
		margin: 0 auto;
	}

	.post:hover > :global(*) {
		display: block;
	}

	.post:hover {
		filter: brightness(0.9);
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

	button {
		display: inline-block;
		cursor: pointer;
		padding: 0.5em;
	}

	button.outline {
		border: 1px solid red;
		background-color: transparent;
		color: red;
	}

	button.fill {
		border: 1px solid red;
		background-color: red;
		color: white;
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
