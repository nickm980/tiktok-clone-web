<script lang="ts">
    export let active: boolean = false;
	export let href: string;
</script>

<a href={href} class={active ? "active" : ""}>
	<slot />
</a>

<style>
	a {
		text-align: left;
		background: transparent;
		border: none;
		width: 100%;
        font-weight: bold;
		padding-top: 0.8em;
        padding-left: 0.8em;
		padding-bottom: 0.8em;
	}
    
	a:hover {
		cursor: pointer;
		background-color: rgb(243, 243, 243);
		transition: all 0.2s;
	}

	a.active {
		color: rgba(255, 81, 0, 0.795);
	}
</style>
