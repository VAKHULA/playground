import{j as e}from"./jsx-runtime-CEXyjAOr.js";import{useMDXComponents as a}from"./index-DGrPBLeN.js";import{M as c,T as x,S as n,a as r}from"./blocks-BM1wVDjS.js";import"./iframe-DBomgvd9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-7XtmZe91.js";function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utils/BoxHandler"}),`
`,e.jsx(x,{children:"Box Handler"}),`
`,e.jsx(n,{children:"JS"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`
  export const boxHandler = (x) => ({
    next: (f) => boxHandler(f(x)),
    done: (f) => f(x)
  });
`}),`
`,e.jsx(n,{children:"TS"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`
  export const boxHandler = <T>(x: T) => ({
    next: <U>(f: (value: T) => U) => boxHandler(f(x)),
    done: <U>(f: (value: T) => U): U => f(x)
  });
`}),`
`,e.jsx(n,{children:"Examples"}),`
`,e.jsx(r,{dark:!0,language:"ts",code:`
  const getPercentNumber = (str) =>
    boxHandler(str)
      .next((str) => str.replace(/%/, ''))
      .next((str) => parseFloat(str))
      .done((res) => res * 0.01);

  getPercentNumber('50%'); // 0.5

  // Second example
  const getMoney = (price) => Number.parseFloat(price.replace(/$/, ''));
  const getPercent = (percent) => Number.parseFloat(percent.replace(/%/)) * 0.01;

  const getDiscountPrice = (price, discount) =>
    boxHandler(getMoney(price))
      .done((cents) => boxHandler(getPercent(discount)).next((save) => cents - cents * save))
      .done((res) => res);

  getDiscountPrice('$6.00', '20%'); // 4.8
`})]})}function g(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s()}export{g as default};
