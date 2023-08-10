import{r as e}from"./dropdowncomponents-f131d941.js";import{registeredComponents as t}from"./modalcomponents-0f934c91.js";import{_ as i}from"./_tslib-6e8ca86b.js";import{i as s}from"./logicaltreehelper-bc8e12d3.js";import{e as a}from"./property-d3853089.js";import{e as r}from"./custom-element-267f9a21.js";import{s as n}from"./lit-element-70cf14f4.js";import{d as o}from"./events-interseptor-8aee1ab4.js";import"./popup-9012b161.js";import"./rect-00eb3fa4.js";import"./point-e4ec110e.js";import"./rafaction-bba7928b.js";import"./transformhelper-ebad0156.js";import"./layouthelper-dc0e1370.js";import"./constants-58283e53.js";import"./positiontracker-1fe0834d.js";import"./branch-bf06b0d2.js";import"./capturemanager-86a8762a.js";import"./eventhelper-8570b930.js";import"./data-qa-utils-8be7c726.js";import"./pointer-event-helper-ba4ce1e1.js";import"./dx-ui-element-7f5e2dd2.js";import"./lit-element-base-7a85dca5.js";import"./nameof-factory-64d95f5b.js";import"./custom-events-helper-18f7786a.js";import"./thumb-1c09cc55.js";import"./utils-4a03fb47.js";import"./dx-html-element-pointer-events-helper-4b46ddbf.js";import"./dom-f93f7533.js";import"./popupportal-fcf1c46a.js";import"./css-classes-f3f8ed66.js";var d;const p="dxbl-adaptive-dropdown";let l=d=class extends n{constructor(){super(...arguments),this.slotChangedHandler=this.handleSlotChanged.bind(this),this.interceptorSlotChangedHandler=this.handleInterceptorSlotChange.bind(this),this.interceptor=null,this.resizeHandler=this.handleResize.bind(this),this._adaptivityEnabled=!1,this._popupAccessor=null,this.adaptiveWidth=576}get popup(){var e;return(null===(e=this._popupAccessor)||void 0===e?void 0:e.popup)||null}get adaptivityEnabled(){return this._adaptivityEnabled}set adaptivityEnabled(e){this._adaptivityEnabled!==e&&(this._adaptivityEnabled=e,this.raiseEnableAdaptivity(e))}createRenderRoot(){const e=super.createRenderRoot(),t=document.createElement("slot");e.appendChild(t),t.addEventListener("slotchange",this.slotChangedHandler);const i=document.createElement("slot");return i.name="interceptor",e.appendChild(i),i.addEventListener("slotchange",this.interceptorSlotChangedHandler),e}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.resizeHandler,{passive:!0}),setTimeout((()=>this.updateAdaptivity()))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeHandler)}handleResize(e){this.updateAdaptivity()}updateAdaptivity(){this.adaptivityEnabled=this.getActualAdaptivityEnabled()}getActualAdaptivityEnabled(){return window.innerWidth<=this.adaptiveWidth}handleSlotChanged(e){const t=e.target.assignedNodes();this._popupAccessor=d.findPopupAccessor(t)}handleInterceptorSlotChange(e){const t=e.target.assignedNodes();this.interceptor=t[0]}raiseEvent(e,t){var i;null===(i=this.interceptor)||void 0===i||i.raise(e,t)}raiseEnableAdaptivity(e){this.raiseEvent("adaptivityChanged",{enabled:e})}static findPopupAccessor(e){const t=e.find((e=>s(e,(()=>["popup","addEventListener","removeEventListener"]))));return t||null}};function c(){}i([a({type:Number,attribute:"adaptive-width"})],l.prototype,"adaptiveWidth",void 0),l=d=i([r(p)],l);const m={dropDownRegisteredComponents:e,modalRegisteredComponents:t,init:c,dxAdaptiveDropDownTagName:p,dxEventsInterceptorTagName:o};export{m as default,c as init};
