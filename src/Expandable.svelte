<script>
    import { fade } from 'svelte/transition';
	export let text;
    export let visible;
    let placeholder;
    let originalText = text;
    toggleVisibility() {
        
    }
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<div transition:fade on:click={toggleVisibility}>{text}</div>