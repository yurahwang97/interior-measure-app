/*
* program.js: Program object 
*/

class Program {
    constructor() {
        this.vShader = null;
        this.fShader = null;
        this.pid = 0;
        // Attribute and uniform variables 
        this.attributes = new Map();
        this.uniforms = new Map();
    }

    setShaderNames(vSHADER_SOURCE, fSHADER_SOURCE) {
        this.vShader = vSHADER_SOURCE;
        this.fShader = fSHADER_SOURCE;
    }

    compileShader(gl) {
        // Create shaders 
        const vs = gl.createShader(gl.VERTEX_SHADER);
        const fs = gl.createShader(gl.FRAGMENT_SHADER);

        // Compile vertex shader 
        gl.shaderSource(vs, this.vShader);
        gl.compileShader(vs);

        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(vs));
            gl.deleteShader(vs);
            throw "Could not compile WebGL vertex shader. \n\n";
        }

        // Compile frag shader 
        gl.shaderSource(fs, this.fShader);
        gl.compileShader(fs);

        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(fs));
            gl.deleteShader(fs);
            throw "Could not compile WebGL fragment shader. \n\n";
        }

        // Create the program and link shaders 
        this.pid = gl.createProgram();
        gl.attachShader(this.pid, vs);
        gl.attachShader(this.pid, fs);
        gl.linkProgram(this.pid);

        if (!gl.getProgramParameter(this.pid, gl.LINK_STATUS)) {
            alert(gl.getProgramInfoLog(this.pid));
        }

        // Detach shaders 
        gl.detachShader(this.pid, vs);
        gl.detachShader(this.pid, fs);
    }

    bind(gl) {
        gl.useProgram(this.pid);
    }

    unbind(gl) {
        gl.useProgram(null);
    }

    getProgramID() {
        return this.pid;
    }

    addAttributeLocation(gl, name_in_shader) {
        this.attributes.set(name_in_shader, gl.getAttribLocation(this.pid, name_in_shader));
    }

    addUniformLocation(gl, name_in_shader) {
        this.uniforms.set(name_in_shader, gl.getUniformLocation(this.pid, name_in_shader));
    }

    getAttribLocation(name_in_shader) {
        if (!this.attributes.has(name_in_shader)) {
            throw "The " + name_in_shader.toString() + " attribute location does not exist. \n\n";
        }
        return this.attributes.get(name_in_shader);
    }

    getUniformLocation(name_in_shader) {
        if (!this.uniforms.has(name_in_shader)) {
            throw "The " + name_in_shader.toString() + " uniform location does not exist. \n\n";
        }
        return this.uniforms.get(name_in_shader);
    }
}