import{j as de}from"./jsx-runtime-jS_PcZPR.js";import{r as G}from"./iframe-CxYkFzcR.js";import{aj as he,ai as H,a2 as ce,U as pe,B as K,ap as Z,aq as J,ar as Q,v as T,as as B,a as L,X as U,at as me,u as ee,ak as fe}from"./three.module-b4iiaVlP.js";import"./preload-helper-PPVm8Dsz.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class _{constructor(e,t,i,o,h="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(h),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),_.nextNameID=_.nextNameID||0,this.$name.id=`lil-gui-name-${++_.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ge extends _{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function P(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const ve={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:P,toHexString:P},S={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},be={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){const i=S.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const o=n*i<<16^e*i<<8^t*i<<0;return S.toHexString(o)}},we={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=S.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const o=n*i<<16^e*i<<8^t*i<<0;return S.toHexString(o)}},xe=[ve,S,be,we];function ye(n){return xe.find(e=>e.match(n))}class _e extends _{constructor(e,t,i,o){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ye(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const h=P(this.$text.value);h&&this._setValueFromHexString(h)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class I extends _{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ae extends _{constructor(e,t,i,o,h,l){super(e,t,i,"lil-number"),this._initInput(),this.min(o),this.max(h);const u=l!==void 0;this.step(u?l:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let r=parseFloat(this.$input.value);isNaN(r)||(this._stepExplicit&&(r=this._snap(r)),this.setValue(this._clamp(r)))},i=r=>{const f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+r),this.$input.value=this.getValue())},o=r=>{r.key==="Enter"&&this.$input.blur(),r.code==="ArrowUp"&&(r.preventDefault(),i(this._step*this._arrowKeyMultiplier(r))),r.code==="ArrowDown"&&(r.preventDefault(),i(this._step*this._arrowKeyMultiplier(r)*-1))},h=r=>{this._inputFocused&&(r.preventDefault(),i(this._step*this._normalizeMouseWheel(r)))};let l=!1,u,c,m,s,g;const w=5,A=r=>{u=r.clientX,c=m=r.clientY,l=!0,s=this.getValue(),g=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",b)},x=r=>{if(l){const f=r.clientX-u,$=r.clientY-c;Math.abs($)>w?(r.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>w&&b()}if(!l){const f=r.clientY-m;g-=f*this._step*this._arrowKeyMultiplier(r),s+g>this._max?g=this._max-s:s+g<this._min&&(g=this._min-s),this._snapClampSetValue(s+g)}m=r.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",b)},F=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",o),this.$input.addEventListener("wheel",h,{passive:!1}),this.$input.addEventListener("mousedown",A),this.$input.addEventListener("focus",F),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(d,r,f,$,k)=>(d-r)/(f-r)*(k-$)+$,t=d=>{const r=this.$slider.getBoundingClientRect();let f=e(d,r.left,r.right,this._min,this._max);this._snapClampSetValue(f)},i=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",h)},o=d=>{t(d.clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",h)};let l=!1,u,c;const m=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),l=!1},s=d=>{d.touches.length>1||(this._hasScrollBar?(u=d.touches[0].clientX,c=d.touches[0].clientY,l=!0):m(d),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",w))},g=d=>{if(l){const r=d.touches[0].clientX-u,f=d.touches[0].clientY-c;Math.abs(r)>Math.abs(f)?m(d):(window.removeEventListener("touchmove",g),window.removeEventListener("touchend",w))}else d.preventDefault(),t(d.touches[0].clientX)},w=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",w)},A=this._callOnFinishChange.bind(this),x=400;let b;const F=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const f=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(A,x)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",s,{passive:!1}),this.$slider.addEventListener("wheel",F,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Fe extends _{constructor(e,t,i,o){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(o)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class $e extends _{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Ce=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Ee(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let te=!1;class W{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:o,title:h="Controls",closeFolders:l=!1,injectStyles:u=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(h),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!te&&u&&(Ee(Ce),te=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=l}add(e,t,i,o,h){if(Object(i)===i)return new Fe(this,e,t,i);const l=e[t];switch(typeof l){case"number":return new Ae(this,e,t,i,o,h);case"boolean":return new ge(this,e,t);case"string":return new $e(this,e,t);case"function":return new I(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,l)}addColor(e,t,i=1){return new _e(this,e,t,i)}addFolder(e){const t=new W({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof I||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof I)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=h=>{h.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const o=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const N=`
precision mediump float;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,Se=`
// feTurbulence — faithfully implements the algorithm from
// https://drafts.csswg.org/filter-effects/#feturbulencelement-model
precision highp float;
precision highp int;

uniform float uTime;
uniform vec2 uResolution;

// 512×1  RGBA UnsignedByte — permutation table, perm value encoded in R channel (0–255)
uniform sampler2D uPermTexture;
// 256×4  RGBA UnsignedByte — gradient vectors per channel;
//   row = channel (0–3), col = index (0–255)
//   gx encoded as R: (gx+1)/2, gy encoded as G: (gy+1)/2
uniform sampler2D uGradTexture;

uniform float uBaseFreqX;
uniform float uBaseFreqY;
uniform int uNumOctaves;
uniform int uType;  // 0 = fractalNoise, 1 = turbulence

// Domain warp controls
uniform float uWarpStrength; // how far coordinates are displaced (pixels)
uniform float uWarpSpeed;    // how fast the warp field itself evolves
uniform float uWarpScale;    // spatial frequency of the warp field (multiplier on baseFreq)

// feFuncA — feComponentTransfer alpha transfer function
// https://drafts.csswg.org/filter-effects/#element-attrdef-fecomponenttransfer-type
uniform int uFuncAType;           // 0=identity, 1=linear, 2=gamma, 3=table, 4=discrete
uniform float uFuncASlope;          // linear:   slope
uniform float uFuncAIntercept;      // linear:   intercept
uniform float uFuncAAmplitude;      // gamma:    amplitude
uniform float uFuncAExponent;       // gamma:    exponent
uniform float uFuncAOffset;         // gamma:    offset
uniform float uFuncATableValues[8]; // table/discrete: up to 8 values
uniform int uFuncATableCount;     // table/discrete: number of active values

varying vec2 vUv;

// PerlinN offsets the input so all integer arithmetic stays positive.
// 4096 = 16 × 256, so mod(floor(x + 4096), 256) == mod(floor(x), 256).
const float PerlinN = 4096.0;

int permLookup(int idx) {
  float u = (float(idx) + 0.5) / 512.0;
  return int(floor(texture2D(uPermTexture, vec2(u, 0.5)).r * 255.0 + 0.5));
}

vec2 gradLookup(int channel, int idx) {
  float u = (float(idx) + 0.5) / 256.0;
  float v = (float(channel) + 0.5) / 4.0;
  // Decode UNORM [0,1] back to [-1,1]
  return texture2D(uGradTexture, vec2(u, v)).rg * 2.0 - 1.0;
}

// Spec §15.24 Noise2 — 2-D gradient noise, cubic s-curve interpolation.
// Bitwise AND (& 255) is replaced with mod(floor(x), 256.0).
float noise2(int channel, vec2 p) {
  vec2 pt = p + PerlinN;

  int bx0 = int(mod(floor(pt.x), 256.0));
  int bx1 = int(mod(float(bx0 + 1), 256.0));
  float rx0 = fract(pt.x);
  float rx1 = rx0 - 1.0;

  int by0 = int(mod(floor(pt.y), 256.0));
  int by1 = int(mod(float(by0 + 1), 256.0));
  float ry0 = fract(pt.y);
  float ry1 = ry0 - 1.0;

  // Two-level permutation lookup (spec: uLatticeSelector[uLatticeSelector[bx]+by])
  int i = permLookup(bx0);
  int j = permLookup(bx1);

  int b00 = permLookup(i + by0);
  int b10 = permLookup(j + by0);
  int b01 = permLookup(i + by1);
  int b11 = permLookup(j + by1);

  // s_curve(t) = t² (3 − 2t)
  float sx = rx0 * rx0 * (3.0 - 2.0 * rx0);
  float sy = ry0 * ry0 * (3.0 - 2.0 * ry0);

  float a = mix(dot(vec2(rx0, ry0), gradLookup(channel, b00)), dot(vec2(rx1, ry0), gradLookup(channel, b10)), sx);
  float b = mix(dot(vec2(rx0, ry1), gradLookup(channel, b01)), dot(vec2(rx1, ry1), gradLookup(channel, b11)), sx);
  return mix(a, b, sy);
}

// Spec §15.24 Turbulence — fBm over numOctaves octaves.
// Uses step() mask instead of break so texture2D stays in uniform control flow.
float turbulence(int channel, vec2 point) {
  float sum = 0.0;
  float ratio = 1.0;
  vec2 p = vec2(point.x * uBaseFreqX, point.y * uBaseFreqY);

  for(int oct = 0; oct < 8; oct++) {
    float mask = step(float(oct), float(uNumOctaves) - 1.0);
    float n = noise2(channel, p);
    if(uType == 0) {
      sum += mask * n / ratio;
    } else {
      sum += mask * abs(n) / ratio;
    }
    p *= 2.0;
    ratio *= 2.0;
  }
  return sum;
}

// Dynamic indexing of uniform arrays is not guaranteed in GLSL ES 1.0.
// Use a constant-index helper instead.
float tableAt(int k) {
  if(k == 1)
    return uFuncATableValues[1];
  if(k == 2)
    return uFuncATableValues[2];
  if(k == 3)
    return uFuncATableValues[3];
  if(k == 4)
    return uFuncATableValues[4];
  if(k == 5)
    return uFuncATableValues[5];
  if(k == 6)
    return uFuncATableValues[6];
  if(k == 7)
    return uFuncATableValues[7];
  return uFuncATableValues[0];
}

// Spec §15.11 feComponentTransfer transfer function
float feFunc(float c) {
  if(uFuncAType == 1) {
    return clamp(uFuncASlope * c + uFuncAIntercept, 0.0, 1.0);
  }
  if(uFuncAType == 2) {
    return clamp(uFuncAAmplitude * pow(c, uFuncAExponent) + uFuncAOffset, 0.0, 1.0);
  }
  if(uFuncAType == 3) {
    // table: piecewise linear between tableValues
    float n = float(uFuncATableCount);
    float scaled = c * (n - 1.0);
    int k = int(clamp(floor(scaled), 0.0, n - 2.0));
    float t = scaled - floor(scaled);
    return clamp(tableAt(k) + t * (tableAt(k + 1) - tableAt(k)), 0.0, 1.0);
  }
  if(uFuncAType == 4) {
    // discrete: step function — tableValues="1" → alpha always 1
    float n = float(uFuncATableCount);
    int k = int(clamp(floor(n * c), 0.0, n - 1.0));
    return clamp(tableAt(k), 0.0, 1.0);
  }
  return c; // identity
}

void main() {
  vec2 point = vUv * uResolution;

  // Domain warp: displace coordinates using a separate noise field that evolves over time.
  // The warp field uses offset seeds so it's independent from the colour noise.
  vec2 warpPoint = point * uWarpScale + vec2(uTime * uWarpSpeed);
  float wx = turbulence(0, warpPoint + vec2(0.0, 0.0));
  float wy = turbulence(0, warpPoint + vec2(5.2, 1.3)); // offset to decorrelate axes
  vec2 warped = point + vec2(wx, wy) * uWarpStrength + vec2(30.0, 20.0);

  vec4 c = vec4(turbulence(0, warped), turbulence(1, warped), turbulence(2, warped), turbulence(3, warped));

  // Spec colour mapping:
  //   fractalNoise → (v + 1) / 2   maps [-1, 1] to [0, 1]
  //   turbulence   → v              already ≥ 0 (abs-summed)
  if(uType == 0)
    c = (c + 1.0) * 0.5;

  c = clamp(c, 0.0, 1.0);

  // Per-channel contrast: push each channel independently toward 0 or 1
  // so channels that differ become vivid primaries/secondaries, not grays
  c.rgb = smoothstep(0.05, 0.95, c.rgb);

  // Normalize so the dominant channel is always 1 → always fully bright,
  // never white (would require all channels equal, prevented by independent noise)
  float maxC = max(c.r, max(c.g, c.b));
  c.rgb /= max(maxC, 0.001);

  gl_FragColor = vec4(c.rgb, feFunc(c.a));
}
`,ie=`
// feGaussianBlur — single-axis Gaussian blur pass
// https://drafts.csswg.org/filter-effects/#feGaussianBlurElement
// Run twice (H then V) for a full separable 2-D blur.
precision highp float;

uniform sampler2D uTex;
uniform vec2 uResolution;
uniform vec2 uDir;          // (1,0) horizontal  |  (0,1) vertical
uniform float uStdDeviation;

varying vec2 vUv;

void main() {
  float sigma = max(uStdDeviation, 0.001);
  float twoSigmaSq = 2.0 * sigma * sigma;
  vec2 texel = uDir / uResolution;

  vec4 color = vec4(0.0);
  float weightSum = 0.0;

  for (int i = -8; i <= 8; i++) {
    float fi = float(i);
    float w = exp(-(fi * fi) / twoSigmaSq);
    color     += texture2D(uTex, vUv + texel * fi) * w;
    weightSum += w;
  }

  gl_FragColor = color / weightSum;
}

`,V=2147483647,ke=16807,ne=127773,Te=2836,p=256;function z(n){const e=ke*(n%ne)-Te*Math.floor(n/ne);return e<=0?e+V:e}function Le(n){let e=n;e<=0&&(e=-(e%(V-1))+1),e>V-1&&(e=V-1);const t=new Float32Array(4*p*2),i=new Uint8Array(p);for(let l=0;l<4;l++){for(let u=0;u<p;u++)i[u]=u;for(let u=0;u<p;u++){e=z(e);const c=(e%(p*2)-p)/p;e=z(e);const m=(e%(p*2)-p)/p,s=Math.sqrt(c*c+m*m)||1;t[(l*p+u)*2+0]=c/s,t[(l*p+u)*2+1]=m/s}for(let u=p-1;u>0;u--){e=z(e);const c=e%p,m=i[u];i[u]=i[c],i[c]=m}}const o=new Uint8Array(512*4);for(let l=0;l<p;l++)o[l*4]=i[l],o[(p+l)*4]=i[l];const h=new Uint8Array(p*4*4);for(let l=0;l<4;l++)for(let u=0;u<p;u++){const c=(l*p+u)*4;h[c+0]=Math.round((t[(l*p+u)*2+0]+1)/2*255),h[c+1]=Math.round((t[(l*p+u)*2+1]+1)/2*255)}return{permTex:o,gradTex:h}}function le(){const n=G.useRef(null);return G.useEffect(()=>{const e=n.current,t=new he({antialias:!1});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),e.appendChild(t.domElement);const i=new H,o=new ce(-1,1,1,-1,0,1),h=new pe;h.setAttribute("position",new K(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),h.setAttribute("uv",new K(new Float32Array([0,0,2,0,0,2]),2));const{permTex:l,gradTex:u}=Le(0),c=new Z(l,512,1,J,Q);c.magFilter=T,c.minFilter=T,c.needsUpdate=!0;const m=new Z(u,p,4,J,Q);m.magFilter=T,m.minFilter=T,m.needsUpdate=!0;const s={uTime:{value:0},uResolution:{value:new L(window.innerWidth,window.innerHeight)},uPermTexture:{value:c},uGradTexture:{value:m},uBaseFreqX:{value:.01},uBaseFreqY:{value:.01},uNumOctaves:{value:1},uType:{value:0},uFuncAType:{value:4},uFuncASlope:{value:1},uFuncAIntercept:{value:0},uFuncAAmplitude:{value:1},uFuncAExponent:{value:1},uFuncAOffset:{value:0},uFuncATableValues:{value:[1,0,0,0,0,0,0,0]},uFuncATableCount:{value:1},uWarpStrength:{value:130},uWarpSpeed:{value:10},uWarpScale:{value:.5}},g=new B({vertexShader:N,fragmentShader:Se,uniforms:s});i.add(new U(h,g));const w=new L(window.innerWidth,window.innerHeight),A=(a,y)=>new me(a,y,{minFilter:ee,magFilter:ee});let x=A(window.innerWidth,window.innerHeight),b=A(window.innerWidth,window.innerHeight);const F={uTex:{value:null},uResolution:{value:w},uDir:{value:new L(1,0)},uStdDeviation:{value:1}},d={uTex:{value:null},uResolution:{value:w},uDir:{value:new L(0,1)},uStdDeviation:{value:1}},r=new B({vertexShader:N,fragmentShader:ie,uniforms:F}),f=new B({vertexShader:N,fragmentShader:ie,uniforms:d}),$=new H;$.add(new U(h,r));const k=new H;k.add(new U(h,f));const v={baseFrequency:s.uBaseFreqX.value,numOctaves:s.uNumOctaves.value,type:"fractalNoise",funcAType:"discrete",slope:s.uFuncASlope.value,intercept:s.uFuncAIntercept.value,amplitude:s.uFuncAAmplitude.value,exponent:s.uFuncAExponent.value,offset:s.uFuncAOffset.value,tableValues:"1",stdDeviation:F.uStdDeviation.value,warpStrength:s.uWarpStrength.value,warpSpeed:s.uWarpSpeed.value,warpScale:s.uWarpScale.value},se=a=>{const y=a.trim().split(/[\s,]+/).map(Number).filter(R=>!isNaN(R)).slice(0,8),oe=Math.max(1,y.length),Y=[1,0,0,0,0,0,0,0];y.forEach((R,ue)=>{Y[ue]=R}),s.uFuncATableValues.value=Y,s.uFuncATableCount.value=oe},E=new W({title:"SVG Filters"}),O=E.addFolder("feTurbulence");O.add(v,"baseFrequency",.001,.5,.01).onChange(a=>{s.uBaseFreqX.value=a,s.uBaseFreqY.value=a}),O.add(v,"numOctaves",1,8,1).onChange(a=>{s.uNumOctaves.value=a}),O.add(v,"type",["fractalNoise","turbulence"]).onChange(a=>{s.uType.value=a==="fractalNoise"?0:1});const C=E.addFolder("feFuncA"),re={identity:0,linear:1,gamma:2,table:3,discrete:4};C.add(v,"funcAType",["identity","linear","gamma","table","discrete"]).name("type").onChange(a=>{s.uFuncAType.value=re[a]}),C.add(v,"tableValues").name("tableValues").onChange(se),C.add(v,"slope",0,4,.01).onChange(a=>{s.uFuncASlope.value=a}),C.add(v,"intercept",-1,1,.01).onChange(a=>{s.uFuncAIntercept.value=a}),C.add(v,"amplitude",0,4,.01).onChange(a=>{s.uFuncAAmplitude.value=a}),C.add(v,"exponent",0,8,.01).onChange(a=>{s.uFuncAExponent.value=a}),C.add(v,"offset",-1,1,.01).onChange(a=>{s.uFuncAOffset.value=a});const M=E.addFolder("Domain Warp");M.add(v,"warpStrength",0,300,1).name("strength").onChange(a=>{s.uWarpStrength.value=a}),M.add(v,"warpSpeed",0,50,.5).name("speed").onChange(a=>{s.uWarpSpeed.value=a}),M.add(v,"warpScale",.1,2,.05).name("scale").onChange(a=>{s.uWarpScale.value=a}),E.addFolder("feGaussianBlur").add(v,"stdDeviation",0,100,1).onChange(a=>{F.uStdDeviation.value=a,d.uStdDeviation.value=a});const q=()=>{const a=window.innerWidth,y=window.innerHeight;t.setSize(a,y),s.uResolution.value.set(a,y),w.set(a,y),x.dispose(),x=A(a,y),b.dispose(),b=A(a,y)};window.addEventListener("resize",q);let X;const ae=new fe,j=()=>{X=requestAnimationFrame(j),s.uTime.value=ae.getElapsedTime(),t.setRenderTarget(x),t.render(i,o),F.uTex.value=x.texture,t.setRenderTarget(b),t.render($,o),d.uTex.value=b.texture,t.setRenderTarget(null),t.render(k,o)};return j(),()=>{cancelAnimationFrame(X),window.removeEventListener("resize",q),E.destroy(),t.dispose(),h.dispose(),g.dispose(),c.dispose(),m.dispose(),x.dispose(),b.dispose(),r.dispose(),f.dispose(),e.removeChild(t.domElement)}},[]),de.jsx("div",{ref:n,style:{position:"fixed",inset:0,zIndex:-1}})}le.__docgenInfo={description:"",methods:[],displayName:"ShaderBackground"};const He={title:"Experiments/Turbulence",component:le,parameters:{layout:"centered"},tags:["!autodocs"],argTypes:{},args:{}},D={args:{}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...D.parameters?.docs?.source}}};const Be=["Preview1"];export{D as Preview1,Be as __namedExportsOrder,He as default};
