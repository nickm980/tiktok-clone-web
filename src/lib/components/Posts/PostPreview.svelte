<script>
    export let imgUrl;
</script>

<a href="$f">
	<img alt="post" src={imgUrl} class="post" />
</a>

<style>
	a:hover .post {
		filter: brightness(50%);
	}

	a:hover {
	}

	.post {
		border: none;
		height: auto;
		width: 30%;
        max-width: 200px;
		aspect-ratio: 4/3;
	}

	a {
		height: auto;
		width: 30%;
		aspect-ratio: 4/3;
        margin: 4px;
	}

	a:hover {
		cursor: pointer;
	}
</style>
