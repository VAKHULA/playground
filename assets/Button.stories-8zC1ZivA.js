import{j as d}from"./jsx-runtime-B74jkvHX.js";import"./iframe-B19X1zb2.js";import"./preload-helper-PPVm8Dsz.js";const n=({children:o,onClick:t,className:c=""})=>d.jsx("button",{onClick:t,className:c,children:o});n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const{fn:a}=__STORYBOOK_MODULE_TEST__,u={title:"Components/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text"}},args:{}},r={args:{children:"true",onClick:a()}},e={args:{children:"Button",onClick:a(),className:"secondary"}},s={args:{children:"Button",onClick:a(),className:"contrast"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'true',
    onClick: fn()
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    onClick: fn(),
    className: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    onClick: fn(),
    className: 'contrast'
  }
}`,...s.parameters?.docs?.source}}};const p=["Primary","Secondary","Contrast"];export{s as Contrast,r as Primary,e as Secondary,p as __namedExportsOrder,u as default};
