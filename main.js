/* 
* / ===================================================================== /
* / Toy program for interior measurement application                      /
* / written by Yura Hwang (CONTACT: yura.hwang@utah.edu)                  /                                    /
* / ===================================================================== /
*/


var test_scene;

function initCanvas(gl) {
    // Draw 
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}


function init(gl) {
    // Create scene object 
    test_scene = new Scene('test');
    // Init 
    test_scene.init(gl); 
}


function render(gl) {
    test_scene.render(gl); 
}


function handler() {
    // Initially empty 
}


function main() {
    // Setup WebGL context 
    var canvas = document.getElementById('glcanvas');
    if (!canvas) 
        alert("Unable to initialize Canvas element.");

    var gl = canvas.getContext('webgl2');
    if (!gl) 
        alert("Unable to initialize WebGL 2.0");
        

    // Init canvas 
    initCanvas(gl); 
    // Init scene 
    init(gl);
    // Render scene
    render(gl);  
    // Invoke handlers 
    handler(); 
} 