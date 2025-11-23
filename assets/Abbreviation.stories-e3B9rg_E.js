import{j}from"./jsx-runtime-BohRQkQd.js";import"./iframe-L5OzSVLY.js";import"./preload-helper-PPVm8Dsz.js";const S=({children:h,title:M="",className:A=""})=>j.jsx("abbr",{className:A,title:M,children:h});S.__docgenInfo={description:"",methods:[],displayName:"Abbreviation",props:{title:{defaultValue:{value:"''",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const{expect:C}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Abbreviation",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text"},title:{control:"text"},className:{control:"text"}},args:{}},f={args:{children:"i18n",title:"internationalization"},play:async()=>{function h(A,O,w){const o=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let n=0;n<256;n++)o[256+n]=o[n];function g(n){return n*n*n*(n*(n*6-15)+10)}function a(n,t,r){return t+n*(r-t)}function s(n,t,r,u){const e=n&15,c=e<8?t:r,i=e<4?r:e==12||e==14?t:u;return((e&1)==0?c:-c)+((e&2)==0?i:-i)}function E(n,t,r){const u=Math.floor(n),e=Math.floor(t),c=Math.floor(r),i=u&255,x=e&255,l=c&255;n-=u,t-=e,r-=c;const p=n-1,d=t-1,B=r-1,m=g(n),v=g(t),T=g(r),z=o[i]+x,N=o[z]+l,Z=o[z+1]+l,_=o[i+1]+x,Y=o[_]+l,X=o[_+1]+l;return a(T,a(v,a(m,s(o[N],n,t,r),s(o[Y],p,t,r)),a(m,s(o[Z],n,d,r),s(o[X],p,d,r))),a(v,a(m,s(o[N+1],n,t,B),s(o[Y+1],p,t,r-1)),a(m,s(o[Z+1],n,d,B),s(o[X+1],p,d,B))))}return E(A,O,w)}const M=h(.1,.2,.3);await C(M).toBe(.35122924878110723)}},y={args:{children:"a11y",title:"accessibility",className:"secondary"}},b={args:{children:"l10n",title:"localization",className:"contrast"}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'i18n',
    title: 'internationalization'
  },
  play: async () => {
    function improvedNoise(x: number, y: number, z: number): number {
      const p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
      for (let i = 0; i < 256; i++) {
        p[256 + i] = p[i];
      }
      function fade(t: number) {
        return t * t * t * (t * (t * 6 - 15) + 10);
      }
      function lerp(t: number, a: number, b: number) {
        return a + t * (b - a);
      }
      function grad(hash: number, x: number, y: number, z: number) {
        const h = hash & 15;
        const u = h < 8 ? x : y,
          v = h < 4 ? y : h == 12 || h == 14 ? x : z;
        return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
      }
      function noise(x: number, y: number, z: number): number {
        const floorX = Math.floor(x);
        const floorY = Math.floor(y);
        const floorZ = Math.floor(z);
        const X = floorX & 255;
        const Y = floorY & 255;
        const Z = floorZ & 255;
        x -= floorX;
        y -= floorY;
        z -= floorZ;
        const xMinus1 = x - 1;
        const yMinus1 = y - 1;
        const zMinus1 = z - 1;
        const u = fade(x);
        const v = fade(y);
        const w = fade(z);
        const A = p[X] + Y;
        const AA = p[A] + Z;
        const AB = p[A + 1] + Z;
        const B = p[X + 1] + Y;
        const BA = p[B] + Z;
        const BB = p[B + 1] + Z;
        return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z), grad(p[BA], xMinus1, y, z)), lerp(u, grad(p[AB], x, yMinus1, z), grad(p[BB], xMinus1, yMinus1, z))), lerp(v, lerp(u, grad(p[AA + 1], x, y, zMinus1), grad(p[BA + 1], xMinus1, y, z - 1)), lerp(u, grad(p[AB + 1], x, yMinus1, zMinus1), grad(p[BB + 1], xMinus1, yMinus1, zMinus1))));
      }
      return noise(x, y, z);
    }
    const a = improvedNoise(0.1, 0.2, 0.3);
    // 👇 Assert DOM structure
    await expect(a).toBe(0.35122924878110723);
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'a11y',
    title: 'accessibility',
    className: 'secondary'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'l10n',
    title: 'localization',
    className: 'contrast'
  }
}`,...b.parameters?.docs?.source}}};const V=["Primary","Secondary","Contrast"];export{b as Contrast,f as Primary,y as Secondary,V as __namedExportsOrder,R as default};
