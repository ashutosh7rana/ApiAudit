import{A as e}from"./dom-utils-04e3c6d2.js";import{E as n}from"./eventRegister-fb9b0e47.js";import{FocusUnit as t,DragAndDropUnit as o,getClientRect as s,RectBlz as i}from"./dragAndDropUnit-815cb9e2.js";import"./dom-f93f7533.js";import"./_tslib-6e8ca86b.js";import"./css-classes-f3f8ed66.js";import"./touch-b17c92da.js";let r,c,u,f,l,a,d,p,m,h=null,v=-1,g=-1,w=!0,y=!1;const _=9,x=32,b=38,E=40;function L(e,t,o,s){const i=Array.from(t).map((e=>function(e){const n=e.clientRef;return e.serverRef&&(n._dx_server_ref=e.serverRef),n}(e)));if(f?f._id!==s._id&&(G(f),f=s):f=s,!p){p=e;let n=p;for(;n.parentNode!==document&&n.classList;){if(n.classList.contains("modal-dialog")){y=!0;break}n=n.parentNode}}if(l=new Map,a&&a.dispose(),a=new n(p),h||(c=new Map,u=new Map,h=i),g=-1,a.attachEventWithContext(document,"keydown",D,document),h&&(h.sort(((e,n)=>e.dataset.vindex-n.dataset.vindex)),m=function(e,n){if(y)return e;let t=e,o=window.getComputedStyle(t);for(;o.position!==n&&t.parentNode!==document;)t=t.parentNode,o=window.getComputedStyle(t);return t}(p,"absolute"),N(o&&!y),k())){const e=a.attachEvent(m,"focusin",(function(){e.dispose(),h[0].focus()}))}S()}function N(e){w=e,d&&d.dispose();const n=document.querySelector(".column-chooser-exit-button");d=n?new t(n,null,p,!w):null,u.forEach((function(e){e.dispose()})),u=new Map,h.forEach((function(e){!function(e,n){if(e._dx_server_ref){let n=c.get(e);n||(n=new o(e,e.parentNode,R,".column-chooser-drag-icon-owner",F,y),n.onDragStart=z,n.onDrag=W,n.onDragCancel=B,n.onDropAnimationEnd=q,c.set(e,n)),n.reset()}e.classList.remove("up"),e.classList.remove("down"),e.classList.remove("freeze");let s=u.get(e);s||(s=new t(e,".custom-control-input",n,y||!w),s.onFocus=C,s.onBlur=O,s.onClick=M,u.set(e,s));s.reset()}(e,m)}))}function k(){return w}function D(e){switch(k()||(N(!0),e.keyCode===_&&h[h.length-1].focus()),e.keyCode){case x:g>=0&&(e.preventDefault(),h[g].click());break;case b:e.preventDefault(),j(-1);break;case E:e.preventDefault(),j(1)}}function j(e){if(!h||!c)return;g+=e,g=g<0?h.length-1:g,g%=h.length;const n=u.get(h[g]);n&&n.focus()}function C(e){g=h.indexOf(e)}function O(e){g===h.indexOf(e)&&(g===h.length-1&&d&&d.focus(),g=-1)}function M(e){k()&&N(!1)}function A(e){return h.find((function(n,t,o){return function(e,n){const t=T(e);return!!t&&(t.top<=n&&n<=t.bottom)}(n,e.y)}))}function R(e){const n=A(e);return n?{item:n,relativeRect:T(n)}:null}function S(){if(r&&r.style){const e=c.get(r);e&&e.reset();const n=u.get(r);n&&n.reset(),v=-1,r.childNodes.forEach((function(e){e.style&&(e.style.visibility="")})),r=null}}function z(e){r=e,v=h.indexOf(r),h.forEach((function(e){e.blur(),e!==r&&e.classList.add("freeze")})),r.childNodes.forEach((function(e){e.style&&(e.style.visibility="hidden")}));const n=u.get(r);n&&n.stop()}function T(e){let n=l.get(e);if(n)return n;const t=s(e),o=F();return n=new i(t.x-o.x,t.y-o.y,t.width,t.height),l.set(e,n),n}function q(n,t){h.forEach((function(e){c.get(e).stop()}));const o=p.cloneNode(!0);e(o),o.style["z-index"]=2e3,p.parentNode.appendChild(o),f.invokeMethodAsync("OnElementsExchange",n._dx_server_ref,t._dx_server_ref).catch((function(e){console.error(e)})).finally((()=>o.remove()))}function B(e){h.forEach((function(e){e.classList.remove("up"),e.classList.remove("down"),e.classList.remove("freeze")})),S()}function F(){const e=y?p.parentNode:p,n=s(e);return 0!==e.scrollTop?{x:n.x,y:n.y-e.scrollTop}:n.location}function U(e){u.get(e).updateStyleMetadata()}function W(e,n){if(!e)return;-1===v&&(v=h.indexOf(e));const t=A(n.centerOfDraggingObject);if(!t)return;const o=h.indexOf(t);let s=!1;h.forEach(v<o?function(e){r===e&&(s=!0),s?(U(e),e.classList.add("up")):e.classList.remove("up","down"),t===e&&(s=!1)}:v>o?function(e){t===e&&(s=!0),s?(U(e),e.classList.add("down")):e.classList.remove("up","down"),r===e&&(s=!1)}:function(e){e.classList.remove("up","down")})}function G(e){e._id===f._id&&(e.dispose(),c.forEach((function(e,n){e.dispose(),n._dx_server_ref&&n._dx_server_ref.dispose()})),u.forEach((function(e){e.dispose()})),h=null,r=null,v=-1,p=null,l=null,c=null,u=null,f=null,a&&a.dispose(),a=null)}const H={init:L,dispose:G};export{H as default,G as dispose,L as init};