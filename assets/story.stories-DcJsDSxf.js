import{j as r}from"./jsx-runtime-CEXyjAOr.js";import"./iframe-DBomgvd9.js";import"./preload-helper-PPVm8Dsz.js";const o="_content_ykcir_12",n="_title_ykcir_16",i="_aurora_ykcir_25",c="_aurora__item_ykcir_36",e={content:o,title:n,aurora:i,aurora__item:c},t=({text:s=""})=>(s.split(""),r.jsx("div",{className:e.content,children:r.jsxs("h1",{className:e.title,children:[s,r.jsxs("div",{className:e.aurora,children:[r.jsx("div",{className:e.aurora__item}),r.jsx("div",{className:e.aurora__item}),r.jsx("div",{className:e.aurora__item}),r.jsx("div",{className:e.aurora__item})]})]})}));t.__docgenInfo={description:"",methods:[],displayName:"TextAurora",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const d={title:"Experiments/Text Aurora",component:t,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{},args:{}},a={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(t,{text:"Harder"}),r.jsx("br",{}),r.jsx(t,{text:"Better"}),r.jsx("br",{}),r.jsx(t,{text:"Faster"}),r.jsx("br",{}),r.jsx(t,{text:"Stronger"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <TextAurora text='Harder' />
        <br />
        <TextAurora text='Better' />
        <br />
        <TextAurora text='Faster' />
        <br />
        <TextAurora text='Stronger' />
      </>;
  }
}`,...a.parameters?.docs?.source}}};const _=["Preview"];export{a as Preview,_ as __namedExportsOrder,d as default};
