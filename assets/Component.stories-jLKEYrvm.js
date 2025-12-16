import{j as t}from"./jsx-runtime-B74jkvHX.js";import{m as x}from"./proxy-DBeV6wPC.js";import"./iframe-B19X1zb2.js";import"./preload-helper-PPVm8Dsz.js";import"./single-value-COlR6kyP.js";const i="_text_u1wh2_3",p={text:i},e=({text:o=""})=>{const s=o.split("");return t.jsx("span",{className:p.text,children:s.map((a,n)=>t.jsx(x.span,{style:{"--char-index":n,"--char-total":s.length},children:a===" "?t.jsx(t.Fragment,{children:" "}):a},n))})};e.__docgenInfo={description:"",methods:[],displayName:"TexttextVariableFont",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const b={title:"Experiments/text_variable_font",component:e,parameters:{},tags:["!autodocs"],argTypes:{},args:{}},r={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{text:"Harder"}),t.jsx("br",{}),t.jsx(e,{text:"Better"}),t.jsx("br",{}),t.jsx(e,{text:"Faster"}),t.jsx("br",{}),t.jsx(e,{text:"Stronger"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <TexttextVariableFont text='Harder' />
        <br />
        <TexttextVariableFont text='Better' />
        <br />
        <TexttextVariableFont text='Faster' />
        <br />
        <TexttextVariableFont text='Stronger' />
      </>;
  }
}`,...r.parameters?.docs?.source}}};const j=["Preview"];export{r as Preview,j as __namedExportsOrder,b as default};
