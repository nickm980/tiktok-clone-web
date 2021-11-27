<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';

	export let icon;
    export let activateColor = NaN;
    export let activated = false;

    let likes = 100;
    $: likesFormatted = _formatCount(likes);

    function handleClick(element) {
        activated = !activated;
        console.log(element.target);
        _changeColor(element, activated);
        likes++;
    }

    function _changeColor(element, activated: boolean) {
        
    }

    const _formatter = Intl.NumberFormat('en', { notation: 'compact' });

    function _formatCount(count: number) {
        return _formatter.format(count);
    }

</script>

<button class="circle" on:click={(event) => handleClick(event)}>
    <div class="icon">
        <Fa icon={icon} scale={1.5}/>
    </div>
    <p>{likesFormatted}</p>
</button>

<style>
    * {
        padding: 0;
        font-size: 0.8rem;
        line-height: .5;
    }
    
	.circle {
		background-color: rgb(224, 224, 224);
		color: rgb(59, 59, 59);
		border-radius: 100%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        border: none;
	}
    
    .circle:hover {
        filter: brightness(0.9);
    }

    .icon {
        margin-top: 50%;
        transform: translateY(-50%);
    }
</style>
