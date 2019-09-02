<script>
    import Expandable from './Expandable.svelte';
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<Expandable input="Some text that can be hidden or shown" visible=true/>
