/**
 *
 */

"use strict";

class ShaderProgram {
    /**
     * Initialize the shader program given a pair of vertex and fragment shaders
     * @param {webGL context} gl
     * @param {the ID of the vertext shader element} vertexShaderID
     * @param {the ID of the fragment shader element} fragmentShaderID
     * @returns
     */
    constructor(gl, vertexShaderID, fragmentShaderID) {
        this.gl = gl;
        this.program = gl.createProgram();  // create a shader program
        let vertexShader = this.getShader(gl, vertexShaderID); // create and compile a vertex shader object 
        let fragmentShader = this.getShader(gl, fragmentShaderID); // create and compile a fragment shader object 
        gl.attachShader(this.program, vertexShader); // attach the vertex shader to the shader program
        gl.attachShader(this.program, fragmentShader); // attach the fragment shader to the shader program
        gl.linkProgram(this.program); // link the vertex and fragment shaders 

        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            return console.error("Could not initialize shaders.");
        }

        this.gl.useProgram(this.program); //use the shader program
    }

    /**
     * Used for multi-shader scenarios
     * Sets the WebGL context to use current program
     */
    useProgram() {
        this.gl.useProgram(this.program);
    }

    /**
     * Attach the location of shader attributes to the shader program instance
     * @param {*} attribute 
     */
    setAttributeLocation(attributes){
        this.gl.useProgram(this.program);
        attributes.forEach(attribute => {
            this[attribute] = this.gl.getAttribLocation(this.program, attribute);
        });
    }

    /**
     * Attach the location of shader uniforms to the shader program instance
     * @param {*} attribute 
     */
    setUniformLocations(uniforms){
        this.gl.useProgram(this.program);
        uniforms.forEach(uniform => {
            this[uniform] = this.gl.getUniformLocation(this.program, uniform);
        });
    }

    /**
     * Given a webGL context and the id of the shader element,
     * return a compiled shader object
     * @param {webGL context} gl
     * @param {shader ID} id
     */
    getShader(gl, id) {
        const shaderScript = document.getElementById(id);
        if (!shaderScript) {
            return null;
        }

        const shaderString = shaderScript.text.trim();

        let shader;
        if (shaderScript.type === "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else if (shaderScript.type === "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else {
            return null;
        }
        gl.shaderSource(shader, shaderString);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }
}
