/*
* shape.js: Shape object renders the shape 
*/
class Shape {
    constructor(prog) {
        this.posBufID;
        this.prog = prog;
        // Default shape draws a line
        this.positions = new Float32Array([
            3.0, 0.0, 0,
            0.0, -3.0, 0,
            -3.0, 0.0, 0
        ]);
    }

    init(gl) {
        // Create buffer 
        this.posBufID = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.posBufID);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.positions), gl.STATIC_DRAW);

        // Vertex buffers setup
        var p = gl.getAttribLocation(this.prog.pid, 'aPos');
        gl.bindBuffer(gl.ARRAY_BUFFER, this.posBufID);
        gl.vertexAttribPointer(p, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(p);
    }

    draw(gl) {
        // Render 
        gl.useProgram(this.prog.pid);
        gl.drawArrays(gl.TRIANGLES, 0, this.positions.length / 3);
    }
}

/*
*  Subclasses  
*/
// Plane class: Renders a plane shape 
class Plane extends Shape {
    constructor(prog) {
        super(prog);
        this.posBufID;
        // Vertex coords 
        this.positions = new Float32Array([
            -1.0, -1.0, 0.0,
            1.0, -1.0, 0.0,
            -1.0, 1.0, 0.0,
            -1.0, 1.0, 0.0,
            1.0, -1.0, 0.0,
            1.0, 1.0, 0.0,
        ]);
    }
}

// Triangle class: Renders a triangle shape
class Triangle extends Shape {
    constructor(prog) {
        super(prog);
        this.posBufID;
        // Vertex coords 
        this.positions = new Float32Array([
            0.5, 0.5, 0,
            0.5, -0.5, 0,
            -0.5, -0.5, 0
        ]);
    }
}