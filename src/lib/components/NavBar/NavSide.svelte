<script>
	import { faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
	import SearchBar from './Search.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
    import HashTag from './HashTag.svelte'
    let imgUrl = "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_100x100.jpeg?x-expires=1637946000&x-signature=eiOmQ%2BRhkXFC0ZZPSbBB7V%2FLvxU%3D"
</script>

<nav>
	<div class="buttons">
		<button class="home active link">
			<Fa icon={faHome} scale={1.3} />
			<div class="pl">For You</div>
		</button>
		<button class="foryou link">
			<Fa icon={faUserFriends} scale={1.3} />
			<div class="pl">Following</div>
		</button>
	</div>
	<h2>Suggested Accounts</h2>

    <div class="accounts">
        <button class="account">
            <img class="avatar" src={imgUrl} alt="">
            <div class="info">
                <p class="username">willsmith</p>
                <p class="bio">Will Smith</p>
            </div>
        </button>

        <button class="account">
            <img class="avatar" src={imgUrl} alt="">
            <div class="info">
                <p class="username">willsmith</p>
                <p class="bio">Will Smith</p>
            </div>
        </button>
        <button class="account">
            <img class="avatar" src={imgUrl} alt="">
            <div class="info">
                <p class="username">willsmith</p>
                <p class="bio">Will Smith</p>
            </div>
        </button>
        <button class="account">
            <img class="avatar" src={imgUrl} alt="">
            <div class="info">
                <p class="username">willsmith</p>
                <p class="bio">Will Smith</p>
            </div>
        </button>
    </div>
    <h2>Discover</h2>
    <div class="discover">
        <HashTag tag="#ThisisTag"></HashTag>
        <HashTag tag="#foryoupage"></HashTag>
        <HashTag tag="#new"></HashTag>
        <HashTag tag="#trending"></HashTag>
        <HashTag tag="#willsmith"></HashTag>
    </div>

</nav>

<style>
    .discover > :global(*) {
        margin-left: 20px;
        margin-top: 20px;
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
		min-width: 300px;
		max-height: 500px;
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
		overflow-y: auto;
	}

	button {
		text-align: left;
		background: transparent;
		border: none;
        width: 100%;
	}

    button.link {
		font-weight: bold;
        padding-top: .8em;
		padding-bottom: .8em;
    }

	button:hover {
		cursor: pointer;
		background-color: rgb(243, 243, 243);
	}

    button.link.active {
        color: rgba(255, 81, 0, 0.795);
    }

    .avatar {
        border-radius: 100%;
        width: 30px;
        padding: none;
    }

    .account {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        align-items: center;
        font-size: 1rem;
    }

    .accounts {
        padding: 0;
    }


    .info {
        padding-left: 10px;
    }

    .info p {
        line-height: 0;
    }

    .username {
        font-weight: bold;
    }

    .bio {
        line-height: 0em;
        font-size: 0.7rem;
    }
</style>
