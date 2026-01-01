import{j as e}from"./jsx-runtime-Cn-YA7Q8.js";import{r as v}from"./iframe-DwB3RrK4.js";import{C as a,u as m,a as n}from"./react-three-fiber.esm-dc25PHps.js";import"./preload-helper-PPVm8Dsz.js";import"./three.module-DvzGzcnq.js";const l=()=>{const r=v.useRef(null),i=m(c=>c.viewport),s=v.useMemo(()=>({u_time:{value:0}}),[]);return n(c=>{const{clock:x}=c;r.current.material.uniforms.u_time.value=x.getElapsedTime()}),e.jsxs("mesh",{ref:r,scale:[i.width,i.height,1],children:[e.jsx("planeGeometry",{}),e.jsx("shaderMaterial",{vertexShader:`
          varying vec2 vUv;
          varying vec3 v_pos;

          void main() {
            vUv = uv;
            v_pos = position;
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;

            gl_Position = projectedPosition;
          }
        `,fragmentShader:`
          varying vec2 vUv;
          varying vec3 v_pos;
          uniform float u_time;

          vec3 color0 = vec3(1.0, 0.6, 0.067); // 0xff9911
          vec3 color1 = vec3(1.0, 0.4, 0); // 0xff6600
          vec3 color2 = vec3(0.984, 0.31, 0.31); // 0xfb4f4f
          vec3 color3 = vec3(0.988, 0.404, 0.569); // 0xfc6791
          vec3 color4 = vec3(0.989, 0.6, 0.765); // 0xfc99c3

          vec3 colorA = vec3(0.912, 0.191, 0.652);
          vec3 colorB = vec3(1.000, 0.777, 0.052);

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








            vec2 n = vec2(vUv.x, vUv.y + u_time);
            vec3 color = mix(colorA, colorB, snoise(n));
            color.x = mix(color, vec3(1.1, 1.1, 1.1), snoise(vec2(vUv.x*10.0, vUv.x*100.0))).x;
            color = mix(color, vec3(1.1, 1.1, 1.1), sin(vUv.x * 500.0) / 3.0);
            gl_FragColor = vec4(color, 1.0);
          }
        `,uniforms:s,wireframe:!1})]})},t=()=>e.jsx(a,{camera:{position:[0,0,1]},children:e.jsx(l,{})});t.__docgenInfo={description:"",methods:[],displayName:"ParticleVFX"};const g={title:"Experiments/noise",component:t,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{},args:{}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const h=["Preview"];export{o as Preview,h as __namedExportsOrder,g as default};
