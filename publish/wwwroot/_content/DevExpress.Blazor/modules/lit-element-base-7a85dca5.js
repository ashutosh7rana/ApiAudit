import{D as e}from"./data-qa-utils-8be7c726.js";import{s as t}from"./lit-element-70cf14f4.js";class s{constructor(e){this.element=e}}class c extends CustomEvent{constructor(e){super(c.eventName,{detail:e,bubbles:!1,composed:!1,cancelable:!1})}static create(e){return new c(new s(e))}}c.eventName="dxbl-element-connected";class a extends CustomEvent{constructor(e){super(a.eventName,{detail:e,bubbles:!1,composed:!1,cancelable:!1})}static create(e){return new c(new s(e))}}a.eventName="dxbl-element-disconnected";class n extends t{constructor(){super(...arguments),this._isDOMAttached=!1}get isDOMAttached(){return this._isDOMAttached}connectedCallback(){super.connectedCallback(),this._isDOMAttached=!0,this.readyOnConnectedCallback&&e.setLoaded(this),this.dispatchEvent(c.create(this))}disconnectedCallback(){super.disconnectedCallback(),this._isDOMAttached=!1,this.readyOnConnectedCallback&&e.removeLoaded(this),this.dispatchEvent(a.create(this))}get readyOnConnectedCallback(){return!0}}export{n as L};