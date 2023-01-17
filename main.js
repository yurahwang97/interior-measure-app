function main() {
    // Setup WebGL context 
    var canvas = document.getElementById('glcanvas');
    if (!canvas) 
        alert("Unable to initialize Canvas element.");

    var gl = canvas.getContext('webgl2');
    if (!gl) 
        alert("Unable to initialize WebGL 2.0");
        
    // Draw 
    //gl.fillStyle = 'rgba(0,0,255,1.0)' // Set color 
    //gl.fillRect(120,10,150,150); // Color rectangle  
}