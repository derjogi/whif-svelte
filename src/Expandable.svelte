<script>
    import { fade } from 'svelte/transition';
	export let input;
    export let visible;
    let more = "<div class=sup>+</div>";
    let text;
    function toggleVisibility() {
        visible = !visible;
        if (visible) {
            text = more;
        } else {
            text = input;
        }
    }
</script>

<style>
	h1 {
		color: purple;
	}
    sup {
        vertical-align: super;
        font-size: smaller;
    }
</style>

<div transition:fade on:click={toggleVisibility}>{text}</div>