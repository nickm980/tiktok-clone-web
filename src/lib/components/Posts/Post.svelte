<script lang="ts">
	import type PostData from 'lib/types/PostData';
	import {
		faHeart,
		faBookmark,
		faEllipsisV,
		faBook,
		faLongArrowAltRight,
		faPeopleArrows,
		faArrowAltCircleRight,
		faPaperPlane
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import Comment from './Comment.svelte';
	import Data from './_components/Data.svelte';

	export let postData: PostData;
</script>

<div class="post">
	<div style="background-image: url('{postData.img}');" class="img" />

	<div class="bottom">
		<input class="addcomment" placeholder="Comment" />
	</div>

	<div class="data">
		<div class="icon">
			<Data icon={faHeart} />
		</div>
		<div class="icon">
			<Data icon={faBookmark} />
		</div>
		<div class="icon">
			<Data icon={faPaperPlane} />
		</div>
	</div>
</div>

<style>
	.img {
		width: 100%;
		height: 500px;
		aspect-ratio: 3/4;
	}

	.post {
		width: 100%;
		max-width: 500px;
		border: 1px solid orange;
		margin-top: 20px;
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

		flex: 2 2 auto;
		/* width: 100%; */
	}

	.icon {
		margin-left: 20px;
	}
</style>
