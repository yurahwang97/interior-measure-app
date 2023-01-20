// Simple vs 
var vs_source = `
  attribute vec3 aPos;
  uniform mat4 mv; 
  void main() {
    gl_Position = vec4(0,0,0,1); 
  }
`;

var fs_original = `
  precision mediump float; 
  void main() {
    gl_FragColor = vec4(1,0,0,1);
  }
`;