<script>
	export let name;
</script>

<style>
	h1 {
		color: purple;
		text-align: center;
	}

	.card:hover {
		box-shadow: 5px 5px 15px #d97a2cc9;
		background: #fff8efde;
	}

	.card {
		background: #ffffff;
		box-shadow: 2px 2px 8px #6e7d84ad;
		border-radius: 10px;
		margin: 20px 20px 20px 10px;
		padding: 10px 10px 10px 20px;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	.card.link {
		position:absolute;
		width:100%;
		height:100%;
		top:0;
		left: 0;
		z-index: 1;
	}
</style>
<div class="gradient">
    <h1>Hello {name}!</h1>
</div>
<div class="card new-topic"><a href="App.svelte"><span class="link">How 'bout you create a <b>new topic?</b></span></a></div>
<div class="card browse">Or would you rather <b>browse</b> a bit?</div>