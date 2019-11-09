<script>
	import button from "../stories/button.svelte";
	import {Container, Button, Col, Row} from "sveltestrap";
	export let name;
</script>

<style type="text/scss">
	.myheight {
		height: 900px !important;
	}
</style>

<div>
<!--<div class="gradient">-->
    <h1>WHIF - What Happens If ... ?</h1>
</div>

<div class="container">
	<div class="row myheight justify-content-center align-items-center">
		<div class="col-4 my-auto">
			<button>BROWSE</button>
		</div>
		<button class="col-4 my-auto">CREATE</button>
	</div>
</div>

<Container>
<Row class="h-100">
	<Col>
		<Button> Browse </Button>
	</Col>
	<Col>
		<Button> Create </Button>
	</Col>
</Row>
</Container>