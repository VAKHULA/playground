import{j as r}from"./jsx-runtime-B74jkvHX.js";import{m as i}from"./proxy-DBeV6wPC.js";import"./iframe-B19X1zb2.js";import"./preload-helper-PPVm8Dsz.js";import"./single-value-COlR6kyP.js";const p="_stagger_fzv83_1",m={stagger:p},a=({text:s=""})=>{const n=s.split(`
`);return r.jsx("main",{className:m.stagger,id:"stagger",children:n.map((o,t)=>r.jsx(i.p,{initial:{opacity:0},animate:{opacity:[0,1,0],y:[100,0,-100],transition:{duration:1,times:[0,.5,1],delay:t/2,repeat:1/0,repeatDelay:2}},transition:{type:"spring"},children:o},t))})};a.__docgenInfo={description:"",methods:[],displayName:"TextStagger",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const x={title:"Experiments/text_stagger",component:a,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{},args:{}},e={args:{text:`Harder
Better
Faster
Stronger`}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Harder\\nBetter\\nFaster\\nStronger'
  }
}`,...e.parameters?.docs?.source}}};const y=["Preview"];export{e as Preview,y as __namedExportsOrder,x as default};
