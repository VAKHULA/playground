import{j as e}from"./jsx-runtime-zxgG-dDK.js";import{useMDXComponents as i}from"./index-BKTMdscu.js";import{M as n}from"./blocks-C2s4UEum.js";import"./iframe-Dj5JOaQo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DxhGRVZl.js";function t(s){const o={code:"code",h1:"h1",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Home page"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(o.h1,{id:"configure-your-project",children:"Configure your project"}),e.jsx(o.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."})]}),e.jsxs("div",{className:"sb-section",children:[e.jsxs("div",{className:"sb-section-item",children:[e.jsx("h4",{className:"sb-section-item-heading",children:"Add styling and CSS"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx("h4",{className:"sb-section-item-heading",children:"Provide context and mocking"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available."})]}),e.jsx("div",{className:"sb-section-item",children:e.jsxs("div",{children:[e.jsx("h4",{className:"sb-section-item-heading",children:"Load assets and resources"}),e.jsxs("p",{className:"sb-section-item-paragraph",children:[`To link static files (like fonts) to your projects and stories, use the
`,e.jsx(o.code,{children:"staticDirs"}),` configuration option to specify folders to load when
starting Storybook.`]})]})})]})]}),`
`,e.jsx("style",{children:`
.sb-container {
  margin-bottom: 48px;
}

.sb-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
`})]})}function p(s={}){const{wrapper:o}={...i(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
