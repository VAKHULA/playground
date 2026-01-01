import{j as e}from"./jsx-runtime-Cn-YA7Q8.js";import{r as t}from"./iframe-DwB3RrK4.js";import{C as n,u as x,a as v}from"./react-three-fiber.esm-dc25PHps.js";import{h as s}from"./three.module-DvzGzcnq.js";import"./preload-helper-PPVm8Dsz.js";const l=()=>{const r=t.useRef(null);x(i=>i.viewport);const c=t.useMemo(()=>({u_time:{value:0},u_colorA:{value:new s("#FFE486")},u_colorB:{value:new s("#FEB3D9")}}),[]);return v(i=>{const{clock:m}=i;r.current.material.uniforms.u_time.value=m.getElapsedTime()}),e.jsxs("mesh",{ref:r,position:[0,0,0],rotation:[-Math.PI/2,0,0],scale:1.5,children:[e.jsx("planeGeometry",{args:[1,1,16,16]}),e.jsx("shaderMaterial",{vertexShader:`
          uniform float u_time;

varying float vZ;




          // Simplex 2D noise
          vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

          float snoise(vec2 v){
            const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                    -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
              dot(x12.zw,x12.zw)), 0.0);
            m = m*m ;
            m = m*m ;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }




void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  // modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.1;
  // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
  
  // vZ = modelPosition.y;


  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
 
  vZ = snoise(projectedPosition.xy);
  gl_Position = projectedPosition;
}

        `,fragmentShader:`
          uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;


void main() {
  vec3 color = mix(u_colorA, u_colorB, vZ * 2.0 + 0.5);
  gl_FragColor = vec4(color, 1.0);
}

        `,uniforms:c,wireframe:!1})]})},a=()=>e.jsx(n,{camera:{position:[1,1,1]},children:e.jsx(l,{})});a.__docgenInfo={description:"",methods:[],displayName:"ParticleVFX"};const P={title:"Experiments/plain",component:a,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{},args:{}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const g=["Preview"];export{o as Preview,g as __namedExportsOrder,P as default};
