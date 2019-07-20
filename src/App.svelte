<script>
	export let website;
	let colors = [
			[62,35,255],
			[60,255,60],
			[255,35,98],
			[45,175,230],
			[255,0,255],
			[255,128,0]];

	let step = 0;
	//color table indices for:
	// current color left
	// next color left
	// current color right
	// next color right
	let colorIndices = [0,1,2,3];

	//transition speed
	let gradientSpeed = 0.001;

	function updateGradient()
	{
		let currentLeft = colors[colorIndices[0]];
		let nextLeft = colors[colorIndices[1]];
		let currentRight = colors[colorIndices[2]];
		let nextRight = colors[colorIndices[3]];

		let istep = 1 - step;
		let r1 = Math.round(istep * currentLeft[0] + step * nextLeft[0]);
		let g1 = Math.round(istep * currentLeft[1] + step * nextLeft[1]);
		let b1 = Math.round(istep * currentLeft[2] + step * nextLeft[2]);
		let color1 = "rgb("+r1+","+g1+","+b1+")";

		let r2 = Math.round(istep * currentRight[0] + step * nextRight[0]);
		let g2 = Math.round(istep * currentRight[1] + step * nextRight[1]);
		let b2 = Math.round(istep * currentRight[2] + step * nextRight[2]);
		let color2 = "rgb("+r2+","+g2+","+b2+")";

		let gradientElement = document.getElementById('gradient');
		gradientElement.style.background="-webkit-gradient(linear, left top, right bottom, from("+color1+"), to("+color2+"))"
		gradientElement.style.background="-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)";

		step += gradientSpeed;
		if ( step >= 1 )
		{
			step %= 1;
			colorIndices[0] = colorIndices[1];
			colorIndices[2] = colorIndices[3];

			//pick two new target color indices
			//do not pick the same as the current one
			colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
			colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

		}
	}

	setInterval(updateGradient,10);


</script>

<style>
	h1 {
		color: purple;
		text-align: center;
	}

	body{
		background-color: #000000;
		padding: 0px;
		margin: 0px;
	}

	#gradient
	{
		width: 100%;
		height: 200px;
		padding: 0px;
		margin: 0px;
	}

	.top-div {
		height: 90px;
		background-color: aqua;
	}


	#gradient2 {
		width: 100%;  /*wh?*/
		height: 200px;  /*vh?*/
		color: #fff;
		background: linear-gradient(-30deg, #EE7752, #E73C7E, #23A6D5, #23D5AB, #000000, #ffffff);
		background-size: 400% 400%;
		-webkit-animation: Gradient 30s ease infinite;
		-moz-animation: Gradient 30s ease infinite;
		animation: Gradient 30s ease infinite;
	}

	@-webkit-keyframes Gradient {
		0% {
			background-position: 0% 50%
		}
		50% {
			background-position: 100% 50%
		}
		100% {
			background-position: 0% 50%
		}
	}

	@-moz-keyframes Gradient {
		0% {
			background-position: 0% 50%
		}
		50% {
			background-position: 100% 50%
		}
		100% {
			background-position: 0% 50%
		}
	}

	@keyframes Gradient {
		0% {
			background-position: 0% 50%
		}
		50% {
			background-position: 100% 50%
		}
		100% {
			background-position: 0% 50%
		}
	}


</style>
<div class="top-div" id="gradient">
	<h1>Welcome to {website}!</h1>
</div>
<br/>
<div id="gradient2">Another gradient</div>