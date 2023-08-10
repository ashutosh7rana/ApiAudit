import{r as e,d as t}from"./disposable-d2c2d283.js";import{u as n,B as i,l as s,e as o}from"./dom-utils-04e3c6d2.js";import{b as a}from"./dom-f93f7533.js";import{k as r}from"./key-4ced10e2.js";import{C as l}from"./css-classes-f3f8ed66.js";import{T as d,e as u,f as p,B as h}from"./text-editor-f74d98c0.js";class c{}var m,E;c.Button=l.Prefix+"-btn",c.ButtonTool=c.Button+"-tool",c.ButtonGroup=c.Button+"-group",c.ButtonGroupVertical=c.ButtonGroup+"-vertical",c.ButtonGroupLeft=c.ButtonGroup+"-left",c.ButtonGroupRight=c.ButtonGroup+"-right";class y{}m=y,y.Preloader=l.Prefix+"-edit-preloader",y.PreloaderContainer=m.Preloader+"-container",y.PreloaderInitial=m.Preloader+"-initial",y.PreloaderSuccess=m.Preloader+"-success";class v{static get(e){return v.preloaderMap.get(e)}static create(e,t){let n=v.get(e);return n||(n=new v(e,t),v.preloaderMap.set(e,n)),n}static remove(e){const t=v.preloaderMap.get(e);t&&(t.hide(),v.preloaderMap.delete(e))}constructor(e,t){this.preloader=e,this.parent=t,this._initialPaddingRight=0,this._initialPaddingLeft=0,this._contentWidth=0,this._internalWidthChanging=!1,this._unsubscriber=()=>!1,this._onHide=new Array,this.preloaderElement=e,this._preloaderWidth=e.offsetWidth,this.parentElement=t}display(e){this.init(e),this.calculateHorizontalPosition(this.parentElement.clientWidth-this._initialPaddingLeft-this._initialPaddingRight),this._internalWidthChanging=!0,this._unsubscriber=this.subscribeOnParentWidthChange(),this.preloaderElement.classList.remove(y.PreloaderInitial)}hide(){this.preloaderElement.onanimationend=()=>{this.preloaderElement.style.display="none",n(this._unsubscriber),this.parentElement.style.paddingRight=this._initialPaddingRight+"px",this._onHide.forEach((e=>{e()})),this._onHide=[]},this.preloaderElement.classList.add(y.PreloaderSuccess)}registerOnHideAction(e){this._onHide.push(e)}changeInitialPaddingRight(e){this._initialPaddingRight=e}init(e){this._contentWidth=e;const t=getComputedStyle(this.parentElement);this._initialPaddingRight=parseFloat(t.paddingRight),this._initialPaddingLeft=parseFloat(t.paddingLeft)}subscribeOnParentWidthChange(){return i(this.parentElement,(e=>{this._internalWidthChanging?this._internalWidthChanging=!1:this.calculateHorizontalPosition(e)}))}calculateHorizontalPosition(e){const t=parseFloat(this.parentElement.style.paddingRight);if(0===e||t===this._initialPaddingRight&&e-this._preloaderWidth<0)return this.preloaderElement.style.visibility="hidden",void(t!==this._initialPaddingRight&&(this._internalWidthChanging=!0,this.parentElement.style.paddingRight=this._initialPaddingRight+"px"));this.preloaderElement.style.visibility="visible",e<this._preloaderWidth+this._contentWidth?(this.preloaderElement.style.left="auto",this.preloaderElement.style.right=this._initialPaddingRight+"px",t!==this._initialPaddingRight+this._preloaderWidth&&(this.parentElement.style.paddingRight=this._initialPaddingRight+this._preloaderWidth+"px",this._internalWidthChanging=!0)):(this.preloaderElement.style.left=this._contentWidth+this._initialPaddingLeft+"px",t!==this._initialPaddingRight&&(this._internalWidthChanging=!0,this.parentElement.style.paddingRight=this._initialPaddingRight+"px"))}}v.preloaderMap=new Map,function(e){e.suppressFocusEvents="suppress-focus-events"}(E||(E={}));class g{constructor(e,t){this.onDisposeActions=new Array,this.customSpinProcessing=!1,this.suppressFocusEvents=!1,this.focusByMouse=!1,this.internalButtonsFocusEventsBlocked=!1,this.beforeInputText=null,this.inputElement=e,this.dotnetHelper=t}initializeEvents(t){const n=e=>{t.onKeyDown(e)},i=e=>{t.onKeyUp(e)},o=e=>{t.onBeforeInput(e)},a=e=>{t.onClick(e)},r=e=>{t.onPointerDown(e)},l=e=>{t.onCut(e)},u=e=>{t.onPaste(e)},p=e=>{t.onDrop(e)},h=e=>{t.shouldProcessOnFocus()&&t.onFocusByTab(t.inputElement.value?t.inputElement.value.length:0),t.focusByMouse=!1},c=e=>{t.focusByMouse=!1,t.onFocusOut(e)},m=e=>{t.onWheel(e,t)},E=e=>{t.checkValidInput()&&(t.focusByMouse=!0)};this.inputElement.addEventListener("keydown",n),this.inputElement.addEventListener("keyup",i),this.inputElement.addEventListener("beforeinput",o),this.inputElement.addEventListener("click",a),this.inputElement.addEventListener("pointerdown",r),this.inputElement.addEventListener("cut",l),this.inputElement.addEventListener("paste",u),this.inputElement.addEventListener("drop",p),this.inputElement.addEventListener("focus",h),this.inputElement.addEventListener("focusout",c),this.inputElement.addEventListener("wheel",m,{passive:!1}),this.inputElement.addEventListener("mousedown",E);const y=s(this.inputElement,d.TextEdit);y&&this.blockButtonsFocusEvents(y,this),e(this.inputElement,(()=>{t.inputElement.removeEventListener("keydown",n),t.inputElement.removeEventListener("keyup",i),t.inputElement.removeEventListener("beforeinput",o),t.inputElement.removeEventListener("click",a),t.inputElement.removeEventListener("pointerdown",r),t.inputElement.removeEventListener("cut",l),t.inputElement.removeEventListener("paste",u),t.inputElement.removeEventListener("drop",p),t.inputElement.removeEventListener("focus",h),t.inputElement.removeEventListener("focusout",c),t.inputElement.removeEventListener("wheel",m),t.inputElement.removeEventListener("mousedown",E),t.dispose()}))}blockButtonsFocusEvents(e,t){if(a.Browser.MobileUI||this.internalButtonsFocusEventsBlocked)return;const n=e.querySelectorAll("."+c.Button);if(n&&n.length>0){const e=()=>{t.setSuppressFocusEvents(!0)},i=()=>{t.setSuppressFocusEvents(!1),t.focusByMouse=!0};n.forEach((t=>{t.addEventListener("mousedown",e),t.addEventListener("focusout",i),this.onDisposeActions.push((()=>{t.removeEventListener("mousedown",e),t.removeEventListener("focusout",i)}))})),this.internalButtonsFocusEventsBlocked=!0}}setSuppressFocusEvents(e){this.suppressFocusEvents=e,this.inputElement&&this.inputElement.setAttribute(E.suppressFocusEvents,e.toString())}onBeforeInput(e){a.Browser.AndroidMobilePlatform&&(this.beforeInputText=this.inputElement.value)}dispose(){for(;this.onDisposeActions.length>0;){const e=this.onDisposeActions.pop();e&&e()}}disposeMaskManagerCore(){}checkValidInsertion(e,t){return e.keyCode===r.KeyCode.Backspace||e.keyCode===r.KeyCode.Delete||e.keyCode===r.KeyCode.Home||e.keyCode===r.KeyCode.Enter||e.keyCode===r.KeyCode.End||(e.keyCode===r.KeyCode.Up||e.keyCode===r.KeyCode.Down)&&!t||e.keyCode===r.KeyCode.Left||e.keyCode===r.KeyCode.Right||e.ctrlKey&&(e.keyCode===r.KeyCode.Key_a||e.keyCode===r.KeyCode.Key_z)||!e.ctrlKey&&1===e.key.length}shouldProcessOnFocus(){return!this.suppressFocusEvents&&!a.Browser.MobileUI&&!this.focusByMouse&&this.checkValidInput()}checkValidInput(){return!this.inputElement.disabled&&!this.inputElement.readOnly}canHandleMouseWheel(){return this.checkValidInput()&&document.activeElement===this.inputElement&&!this.customSpinProcessing}isAndroidBackspacePressed(){const e=this.beforeInputText,t=this.inputElement.value,n=this.inputElement.selectionStart,i=this.inputElement.selectionEnd;if(!a.Browser.AndroidMobilePlatform||null==e||null==n||null==i||n!==i||t.length>=e.length)return!1;const s=t.substring(0,n),o=t.substring(n),r=0===e.indexOf(s),l=""===o||e.lastIndexOf(o)===e.length-o.length;return r&&l}}let k;class f{constructor(){this.init_new_manager=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:GetNewManager"),this.keyPress=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:KeyPress"),this.clear=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:Clear"),this.paste=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:Paste"),this.getValue=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:GetValue"),this.setValue=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:SetValue"),this.setSelection=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:SetSelection"),this.disposeMaskManager=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:DisposeMaskManager"),this.updateProperties=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:UpdateProperties")}}class M{constructor(e){e.includes("\\")&&(e=e.split("\\").join("\\\\")),this.info=JSON.parse(e)}get selectionStart(){return this.info.selectionStart}get selectionEnd(){return this.info.selectionEnd}get value(){return this.info.value}get displayText(){return this.info.displayText}}class P extends g{constructor(e,t,n,i,s){super(e,t),this.managerId=-1,this.isWheelScrolling={timer:0},this.inputDelayDeferredAction=new u(p),this.boundOnPointerUpHandler=this.onPointerUp.bind(this),this.bindValueMode=n,this.inputDelayDeferredAction=new u(i),this.customSpinProcessing=s}initializeMonoMasks(e,t,n,i,s){return new Promise(((o,a)=>{t?(this.inputElement.value=e,this.displayPreloader(),void 0!==k?this.initializeInternal(t,n,i,s).then((()=>o())):(P.maskLoadingPromise||this.loadMasks(),P.maskLoadingPromise.then((()=>{this.initializeInternal(t,n,i,s).then((()=>o()))})))):a()}))}updateProperties(e,t){this.bindValueMode=e,this.inputDelayDeferredAction=new u(t)}async initializeInternal(e,n,i,s){t(this.inputElement),this.managerId=await k.init_new_manager(e,n,i,JSON.stringify(s)),this.initializeEvents(this),this.fadeOutPreloader(),this.inputElement.setAttribute("data-dx-client-mask-initialized","true")}loadMasks(){P.maskLoadingPromise||(P.maskLoadingPromise=new Promise(((e,t)=>{const n=document.createElement("script");n.src="_content/DevExpress.Blazor.Server.WebAssembly/dotnet.js",n.onload=function(){!function t(){window.MONO.mono_wasm_runtime_is_ready?(document.head.removeChild(n),k=new f,e(!0)):window.setTimeout(t,100)}()},document.head.appendChild(n)})))}displayPreloader(){const e=s(this.inputElement,"."+d.TextEdit);if(!e)return;const t=e.querySelector("."+y.PreloaderContainer),n=v.create(t,this.inputElement);if(n){this.blockEvents(this.inputElement,n);let t=0;if(this.inputElement.value){const n=document.createElement("span");n.style.visibility="hidden",n.style.width="auto",n.style.position="fixed",n.innerHTML=this.inputElement.value;const i=getComputedStyle(this.inputElement);n.style.fontSize=i.fontSize,n.style.fontFamily=i.fontFamily,n.style.paddingLeft=i.paddingLeft,e.append(n),t=n.offsetWidth,n.remove()}n.display(t)}}blockEvents(e,t){function n(e){e.preventDefault(),e.stopPropagation()}const i=s(e,"."+d.TextEdit);let o=[];i&&(o=i.querySelectorAll("."+c.Button),o&&o.forEach((e=>{e.addEventListener("click",n),e.addEventListener("mousedown",n),e.addEventListener("mouseup",n)}))),e.addEventListener("keydown",n),e.addEventListener("click",n),e.addEventListener("cut",n),e.addEventListener("paste",n),t.registerOnHideAction((function(){e.removeEventListener("keydown",n),e.removeEventListener("click",n),e.removeEventListener("cut",n),e.removeEventListener("paste",n),o&&o.forEach((e=>{e.removeEventListener("click",n),e.removeEventListener("mousedown",n),e.removeEventListener("mouseup",n)}))}))}fadeOutPreloader(){const e=s(this.inputElement,"."+d.TextEdit);if(!e)return;const t=e.querySelector("."+y.PreloaderContainer);v.remove(t)}applyMaskInfo(e,t=!1,n=""){this.checkValidInput()&&(this.inputElement.value=n||e.displayText,this.dotnetHelper&&(t||this.bindValueMode===h.OnInput?this.applyValue(e):this.bindValueMode===h.OnDelayedInput&&this.inputDelayDeferredAction.execute((()=>this.applyValue(e))))),this.inputElement.setAttribute("dx-mask-value",e.value),document.activeElement===this.inputElement&&this.inputElement.setSelectionRange(e.selectionStart,e.selectionEnd)}applyValue(e){this.dotnetHelper.invokeMethodAsync("SetValue",e.value)}onKeyDown(e){if(a.Browser.AndroidMobilePlatform&&e.preventDefault(),!this.checkValidInsertion(e,this.customSpinProcessing)||!this.checkValidInput()||a.Browser.AndroidMobilePlatform)return;e.preventDefault();const t=new M(k.keyPress(this.managerId,e.key,e.shiftKey,e.ctrlKey));this.applyMaskInfo(t,e.keyCode===r.KeyCode.Enter),e.keyCode!==r.KeyCode.Left&&e.keyCode!==r.KeyCode.Right&&e.keyCode!==r.KeyCode.Home&&e.keyCode!==r.KeyCode.End||(this.setSuppressFocusEvents(!0),this.inputElement.blur(),this.inputElement.focus(),this.setSuppressFocusEvents(!1))}onKeyUp(e){if(this.checkValidInput())if(a.Browser.AndroidMobilePlatform){let t=e.key,n=e.keyCode;229===n&&(this.isAndroidBackspacePressed()?(t="Backspace",n=r.KeyCode.Backspace):t=this.inputElement.value.substring(this.inputElement.selectionStart-1,this.inputElement.selectionStart));const i=new M(k.keyPress(this.managerId,t,!1,!1));this.applyMaskInfo(i,n===r.KeyCode.Enter)}else e.keyCode!==r.KeyCode.Up&&e.keyCode!==r.KeyCode.Down||this.customSpinProcessing||this.dotnetHelper.invokeMethodAsync("SetValue",this.inputElement.getAttribute("dx-mask-value"))}onClick(e){if(!this.checkValidInput())return;const t=new M(k.setSelection(this.managerId,this.inputElement.selectionStart,this.inputElement.selectionEnd));this.inputElement.selectionStart===this.inputElement.selectionEnd&&this.applyMaskInfo(t,!0)}onPointerDown(e){this.checkValidInput()&&document.addEventListener("pointerup",this.boundOnPointerUpHandler)}onPointerUp(e){if(!this.checkValidInput())return;const t=new M(k.setSelection(this.managerId,this.inputElement.selectionStart,this.inputElement.selectionEnd));this.inputElement.selectionStart!==this.inputElement.selectionEnd&&this.applyMaskInfo(t,!0),document.removeEventListener("pointerup",this.onPointerUp)}onCut(e){if(!this.checkValidInput())return;e.preventDefault(),document.execCommand("copy");const t=new M(k.clear(this.managerId,this.inputElement.selectionStart,this.inputElement.selectionEnd));this.applyMaskInfo(t,this.bindValueMode===h.OnLostFocus)}onPaste(e){if(!this.checkValidInput())return;e.preventDefault();const t=e.clipboardData,n=null==t?void 0:t.getData("Text"),i=new M(k.paste(this.managerId,n));this.applyMaskInfo(i,this.bindValueMode===h.OnLostFocus)}onDrop(e){e.preventDefault()}onFocusByTab(e){const t=new M(k.setSelection(this.managerId,0,e));this.applyMaskInfo(t,!0)}onFocusOut(e){if(!this.checkValidInput()||this.suppressFocusEvents)return;e.preventDefault();const t=new M(k.getValue(this.managerId));this.dotnetHelper.invokeMethodAsync("OnFocusLost",t.value),this.applyMaskInfo(t,!0)}onWheel(e,t){if(!this.canHandleMouseWheel())return;e.preventDefault(),window.clearTimeout(this.isWheelScrolling.timer);const n=new M(k.keyPress(this.managerId,e.deltaY<0?"ArrowUp":"ArrowDown",!1,!1));this.applyMaskInfo(n,!0),this.isWheelScrolling.timer=setTimeout((function(){t.dotnetHelper.invokeMethodAsync("SetValue",t.inputElement.getAttribute("dx-mask-value"))}),500)}disposeMaskManagerCore(){const e=s(this.inputElement,"."+d.TextEdit);if(e){const t=e.querySelector("."+y.PreloaderContainer);v.remove(t)}void 0!==k&&k.disposeMaskManager(this.managerId)}setValue(e,t,n){const i=new M(k.setValue(this.managerId,e,t));this.applyMaskInfo(i,!1,n)}updateMask(e,t,n){const i=new M(k.updateProperties(this.managerId,e,t));this.applyMaskInfo(i,!1,n)}}P.maskLoadingPromise=null;const b=new Map;function w(e,t,n,i,s,o,a,r,l,d){return new Promise(((u,p)=>{let h=b.get(e);h||(h=new P(e,s,o,a,d),h.initializeMonoMasks(r,t,n,i,l).then((()=>{b.set(e,h),u()})).catch((()=>p())))}))}function _(e,t,n){const i=b.get(e);i&&i.updateProperties(t,n)}function C(e,t,n,i){const s=b.get(e);s&&s.setValue(t,n,i)}function L(e,t,n,i){const s=b.get(n);s&&s.updateMask(e,t,i)}function B(e,t,n,i){e&&(e.value=t,document.activeElement===e&&e.setSelectionRange(n,i))}function I(e){if(e=o(e)){t(e);b.get(e)&&b.delete(e)}return Promise.resolve("ok")}const S={initMonoMasks:w,setValueToMonoMaskManager:C,applyMaskParameters:B,updateRemoteMask:L,dispose:I},W=Object.freeze({__proto__:null,initMonoMasks:w,updateMonoMasksProperties:_,setValueToMonoMaskManager:C,updateRemoteMask:L,applyMaskParameters:B,blockFocusEventsForButtons:function(e,t){const n=b.get(e);n&&n.blockButtonsFocusEvents(t,n)},dispose:I,default:S});export{c as B,E as M,W as a,I as d,S as m,_ as u};
