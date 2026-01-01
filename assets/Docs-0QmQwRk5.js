import{j as e}from"./jsx-runtime-Cn-YA7Q8.js";import{useMDXComponents as o}from"./index-CWJvAhU3.js";import{M as s,T as a,S as c,a as n}from"./blocks-BEXWHSUu.js";import{I as m}from"./Component.stories-CSGdwwr6.js";import"./iframe-DwB3RrK4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-rWDxQX_x.js";import"./three.module-DvzGzcnq.js";import"./GLTFLoader-CCrmX5Br.js";import"./use-mount-DHoaidAZ.js";import"./index-Bd8USO0J.js";import"./single-value-COlR6kyP.js";function r(t){const i={a:"a",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
`,e.jsx(a,{children:"react-infinite-viewer"}),`
`,e.jsxs(c,{children:["React, typescript, MIT, ",e.jsx(i.a,{href:"https://www.npmjs.com/package/react-infinite-viewer/v/0.7.0",rel:"nofollow",children:"npm"})]}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
  'use client'
  import React from 'react';
  import InfiniteViewer from 'react-infinite-viewer';
  import './style.css';

  export const ReactInfiniteViewer = ({ children }) => {
    return (
      <div className="container">
        <InfiniteViewer className="iv">
          <div>{children}</div>
        </InfiniteViewer>
      </div>
    );
  };
`}),`
`,e.jsx(n,{dark:!0,language:"css",code:`
  .container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .iv {
    width: 100%;
    height: 100%;
  }
`})]})}function M(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{M as default};
