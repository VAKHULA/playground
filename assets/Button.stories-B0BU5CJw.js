import{j as c}from"./jsx-runtime-DS3MI5Ji.js";import"./iframe-DPnbtfqn.js";import"./preload-helper-PPVm8Dsz.js";const n=({children:o,className:t=""})=>c.jsx("button",{className:t,children:o});n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const{fn:a}=__STORYBOOK_MODULE_TEST__,i={title:"Components/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text"}},args:{}},r={args:{children:!0,onClick:a()}},e={args:{children:"Button",onClick:a(),className:"secondary"}},s={args:{children:"Button",onClick:a(),className:"contrast"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: true,
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
}`,...s.parameters?.docs?.source}}};const u=["Primary","Secondary","Contrast"];export{s as Contrast,r as Primary,e as Secondary,u as __namedExportsOrder,i as default};
