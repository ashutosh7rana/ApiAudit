import{R as t,a as e}from"./rect-00eb3fa4.js";import{T as n}from"./constants-58283e53.js";class r{static isAbsolutePositioning(t){return"absolute"===window.getComputedStyle(t).getPropertyValue("position")}static isFixedPositioning(t){return"fixed"===window.getComputedStyle(t).getPropertyValue("position")}static isScrollable(t){const{overflow:e,overflowX:n,overflowY:r}=window.getComputedStyle(t);return/auto|scroll|overlay|hidden/.test(e+n+r)}static setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)}static isOverflown(t){return t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth}static isTableElement(t){var e;return[n.table,n.tableCell,n.tableHeaderCell].indexOf(null!==(e=r.getNodeName(t))&&void 0!==e?e:"")>=0}static isTextInput(t){return t.tagName===n.input||t.tagName===n.textArea}static toPx(t){return Math.floor(t)+"px"}static getNodeName(t){return t?(t.nodeName||"").toLowerCase():null}static getVerticalScrollbarWidth(t=null){return null==t?window.innerWidth-document.body.getBoundingClientRect().width:t.offsetWidth-t.clientWidth}static matches(t,e){return t.matches(e)}}class o{static getRelativeElementRect(n,r=null){const o=null!=r?t.fromDomRect(r.getBoundingClientRect()):e.Empty,i=t.fromDomRect(n.getBoundingClientRect());return new e(i.x-o.x+window.scrollX,i.y-o.y+window.scrollY,i.width,i.height)}static getParent(t,e){const n=this.getParentCore(t,e);return"html"===(null==n?void 0:n.nodeName.toLowerCase())?null:n}static getParentCore(t,e){if(e){if(t&&t.assignedSlot)return t.assignedSlot}if(t.parentNode)return t.parentNode;return t&&t.host?t.host:null}static findParent(t,e,n=!0){let r=o.getParent(t,n);for(;r;){if(r&&e(r))return r;r=o.getParent(r,n)}return null}static*getRootPathAndSelf(t,e=null,n=!0){yield t;for(const r of o.getRootPath(t,e,n))yield r}static*getRootPath(t,e=null,n=!0){let r=o.getParent(t,n);for(;r&&r!==e;)yield r,r=o.getParent(r,n)}static getScrollParent(t){var e;return t?["html","body","#document"].indexOf(null!==(e=r.getNodeName(t))&&void 0!==e?e:"")>=0?null:t instanceof HTMLElement&&r.isScrollable(t)?t:o.getScrollParent(o.getParent(t,!0)):null}static getRealOffsetParent(t){return t instanceof HTMLElement&&!r.isFixedPositioning(t)?t.offsetParent:null}static getOffsetParent(t){let e=o.getRealOffsetParent(t);for(;e&&r.isTableElement(e)&&"static"===getComputedStyle(e).position;)e=o.getRealOffsetParent(e);return e}static containsElement(t,e){var n;if(!e)return!1;const r=e.getRootNode();if(t.contains(e))return!0;if(r&&r instanceof ShadowRoot){let r=e;do{if(r&&t.isSameNode(r))return!0;r=null!==(n=null==r?void 0:r.parentNode)&&void 0!==n?n:null}while(r)}return!1}static getScrollParents(t){if(!t)return[];const e=o.getScrollParent(t);if(!e)return[];const n=new Array(e),r=o.getParent(e,!0);if(!r)return n;const i=this.getScrollParents(r);return n.concat(i)}static getClippingRoot(t){return o.findParent(t,(t=>t instanceof HTMLElement&&r.isFixedPositioning(t)),!0)}static getClippingParents(t){const e=o.getScrollParents(o.getParent(t,!0)),n=o.getClippingRoot(t);return e.filter(n?t=>t instanceof HTMLElement&&t!==n&&!o.containsElement(t,n):t=>t instanceof HTMLElement)}}export{r as D,o as L};