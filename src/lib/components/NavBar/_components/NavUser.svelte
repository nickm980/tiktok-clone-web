<script lang="ts">
	export let user;
</script>

<a href="/{user.username}" class="account">
	<img class="avatar" src={user.imgUrl} alt="" />
	<div class="info">
		<p class="username">
			{user.username}<span class={user.verified ? 'verified' : 'not-verified'}>V</span>
		</p>
		<p class="bio">{user.fullname}</p>
	</div>
</a>

<style>
	a {
		text-align: left;
		background: transparent;
		border: none;
		width: 100%;
	}

	a:hover {
		cursor: pointer;
		background-color: rgb(243, 243, 243);
		transition: all 0.2s;
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

	.verified {
		color: blue;
		display: block;
	}

	.not-verified {
		display: none;
	}
</style>
