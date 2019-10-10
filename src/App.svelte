<script>
    import Expandable from './Expandable.svelte';
	export let name;
    let innerExpandable = `<Expandable input="Something else" visible=true/>`

</script>

<style>
	h1 {
		color: purple;
		text-align: center;
	}

	.gradient {
		height: 100%;
		width: 100%;
	}

</style>
<div class="gradient">
    <h1>Hello {name}!</h1>
</div>
This is some normal text. It's going to talk about how to save the world.
<Expandable input="Yes I know, maybe a bit hypocritical. But well, I think it will work." visible=true/>
    So, what about this? Is it going to be good? What's it say? <Expandable input="Keep it cool. It's going to be interesting! {innerExpandable}" visible=false/>