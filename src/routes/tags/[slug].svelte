<script>
	import PostPreview from '$lib/components/Posts/PostPreview.svelte';

	let images = [
		'https://images3.alphacoders.com/823/thumb-1920-82317.jpg',
		'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg',
		'https://i.pinimg.com/originals/f5/9b/72/f59b72fc90a3603493257dfdbbe49bf5.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdOHcOD87NmG7hGEWz-_XTl2IfISAsPNN3A&usqp=CAU',
		'https://hdwallsource.com/img/2014/6/wallpapers-hd-8000-8331-hd-wallpapers.jpg'
	];
</script>

<div class="post-container">
	{#each images as image}
		{#each images as image}
			<PostPreview imgUrl={image} />
		{/each}
	{/each}
</div>

<style>
	.post-container {
		width: 100%;
		margin: 0 auto;
		max-width: 800px;
	}
</style>
