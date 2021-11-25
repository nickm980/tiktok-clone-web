<script lang="ts">
    import type PostData from 'PostData';

    export let postData: PostData;
</script>

<article class="post">
    <div class="title">
        {postData.title}
    </div>

    <div class="photo">
        {postData.likeAmount}
    </div>

    <div class="likes">

    </div>
</article>

<style>
    .title {
        color: black;
        font-size: 3rem;
    }

    .post {
        max-width: 500px;
        width: 100%;
        height: 400px;
        outline: 1px solid black;
    }
</style>