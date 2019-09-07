<script>
    import { fade } from 'svelte/transition';
	export let input;
    export let visible;
    let more = "+";
    let text = more;
    let sup = "sup";
    function toggleVisibility() {
        visible = !visible;
        if (visible) {
            text = more;
            sup = "normal";
        } else {
            text = input;
            sup = "sup";
        }
    }
</script>

<style>
	h1 {
		color: purple;
	}
    .sup {
        vertical-align: super;
        font-size: smaller;
    }
</style>

<div class={sup} transition:fade on:click={toggleVisibility}>{text}</div>