<script lang="ts">
	import type PostData from 'lib/types/PostData';
	import {
		faHeart,
		faBookmark,
		faEllipsisV,
		faPaperPlane
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import Comment from './Comment.svelte';
	import Data from './_components/Data.svelte';

	export let postData: PostData;
</script>

<div class="post">
	<img src={postData.img} alt="" class="img" />

	<div class="data">
		<Data icon={faHeart} />
		<Data icon={faBookmark} />
		<Data icon={faPaperPlane} />
		<div class="report">
			<Fa icon={faEllipsisV} scale={1.3} />
		</div>
	</div>

	<div class="bottom">
		<Comment username="hello" comment="this is an interesting post!" likes={2} />
		<input class="addcomment" placeholder="Comment" />
	</div>
</div>

<style>
	.img {
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;
	}

	.data > :global(*) {
		margin-left: 10px;
	}

	.report {
		margin-left: auto;
		right: 0;
	}

	.post {
		width: 100%;
		max-width: 500px;
		margin-top: 20px;
		border-bottom: 1px solid rgb(216, 216, 216);
		padding-bottom: 15px;
	}

	.addcomment {
		width: 100%;
	}

	.bottom {
		width: 100%;
	}

	.data {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		/* border: 10px solid purple; */
		flex: 2 2 auto;
		margin-left: -10px;
		/* width: 100%; */
	}
</style>
