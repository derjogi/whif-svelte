let gradientSpeed = 0.001;  //transition speed

let step = 0;   

let colorIndices = [0,1,2,3];
// color table indices for:
// current color left
// next color left
// current color right
// next color right
// These colors will be assigned randomly after each iteration

function updateGradient(colors, elementToMatch) {



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

    document.querySelectorAll(elementToMatch).forEach( element => {
        element.style.background = "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))";
        element.style.background = "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)";
    });

    step += gradientSpeed;
    if ( step >= 1 ) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    }
}

function applyGradient(colors, element) {
    console.log("Applying Gradient");
    let myFunction = () => updateGradient(colors, element);
    setInterval(myFunction, 10);
    console.log("done");

}

applyGradient([
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]], ".gradient");