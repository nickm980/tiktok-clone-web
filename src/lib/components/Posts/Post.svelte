<script lang="ts">
	import type PostData from 'PostData';
	import {
		faEnvelope,
		faHamburger,
		faHeart,
		faUserFriends,
		faPlane,
		faBookmark
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import Comment from './Comment.svelte';
	export let postData: PostData;
</script>

<article class="post">
	<div class="imageside">
		<div class="photo" style="--img-url: {postData.img}">
		</div>
	</div>

	<div class="commentside">
		<div class="description commentchild">
			<b>username</b>
			<p>{postData.title}</p>
		</div>

		<Comment></Comment>
		<div class="stretch commentchild"></div>

		<div class="input">
			<div class="data">
				<div class="likes">
					<a href="#d" class="icons">{postData.likeAmount} <Fa icon={faHeart} scale={1.3} /></a>
					<a href="#d" class="icons">{postData.likeAmount} <Fa icon={faBookmark} scale={1.3} /></a>
				</div>
			</div>
			<input class="addcomment" placeholder="Add Comment">
		</div>
	</div>
</article>

<style>
	.icons {
		padding-left: 5px;
	}
	.stretch {
		flex-grow: 2;
	}
	.imageside {
		/* border-right: 1px solid orange; */
		display: flex;
		flex-direction: column;
		border-right: 1px solid rgb(238, 238, 238);
		width: 50%;
	}
	.commentside {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 50%;
		/* border-right: 13px solid blue; */
	}
	
	.data {
		display: flex;
		padding-top: 25px;
		padding-bottom: 5px;
	}
	.description {
		color: black;
		font-size: 1rem;
		border-bottom: 1px solid rgb(238, 238, 238);
		padding-bottom: 10px;
		padding-top: 10px;
	}

	.description p {
		display: inline;
	}

	.post {
		display: flex;
		max-width: 800px;
		width: 100%;
		height: 400px;
		margin-top: 20px;
		background-color: white;
		border: 1px solid rgb(238, 238, 238);
	}

	.post-img {
		width: 100%;
	}

	.photo {
		background-image: url(https://i.insider.com/61732f6d4f281c001296b5a7?width=890&format=jpeg);
		flex-grow: 2;
	}

	input {
		padding-top: 15px;
		padding-bottom: 15px;
		padding-left: 15px;
		border: 1px solid rgb(238, 238, 238);
		min-width: 100%;
	}

	.input {
		width: 100%;
	}
</style>
