import{ThumbDragStartedEvent as e,ThumbDragDeltaEvent as t,ThumbDragCompletedEvent as s}from"./thumb-1c09cc55.js";import{D as i}from"./dx-scroll-viewer-e9fe04e9.js";import{C as r}from"./custom-events-helper-18f7786a.js";import{b as n}from"./dom-f93f7533.js";const o="dxbl-virtual-scroll-viewer",a="data-virtual-item-index",h="dxbl-top-virtual-spacer-element",c="dxbl-bottom-virtual-spacer-element";class l extends CustomEvent{constructor(e){super(l.eventName,{detail:new u(e),bubbles:!0,composed:!0,cancelable:!0})}}l.eventName="dxbl-virtual-scroll-viewer.scroll";class u{constructor(e){this.Position=e}}class m extends CustomEvent{constructor(e){super(m.eventName,{detail:e,bubbles:!0,composed:!0,cancelable:!0})}}m.eventName="dxbl-virtual-scroll-viewer.scrollparamschanged";class d{constructor(e,t,s,i){this.AverageHeight=e,this.Heights=t,this.ViewportHeight=s,this.ContentHeightConstraint=i}equals(e){return!!e&&(e.AverageHeight===this.AverageHeight&&(e.ViewportHeight===this.ViewportHeight&&(e.ContentHeightConstraint===this.ContentHeightConstraint&&!!this.sequenceEquals(e.Heights,this.Heights))))}sequenceEquals(e,t){if(!e)return!1;if(!t)return!1;if(e.length!==t.length)return!1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}}class b extends CustomEvent{constructor(e,t,s){super(b.eventName,{detail:new p(e,t,s),bubbles:!0,composed:!0,cancelable:!0})}}b.eventName="dxbl-virtual-scroll-viewer.intersectioncallback";class p{constructor(e,t,s){this.Position=e,this.SpacerHeight=t,this.RenderStateHashCode=s}}r.register(l.eventName,(e=>e.detail)),r.register(m.eventName,(e=>e.detail)),r.register(b.eventName,(e=>e.detail));class v extends i{constructor(){super(),this.spacerIntersectionObserverLocked=!1,this._rootMargin="0px",this._renderStateHashCode=-1,this._scrollTop=-1,this._viewportHeight=0,this._isThumbDragging=!1,this._averageItemHeight=-1,this._contentHeightConstraint=-1,this._thumbMoveTimerId=-1,this._scrollParams=null,this.boundOnThumbMoveStarted=this.onThumbMoveStarted.bind(this),this.boundOnThumbMove=this.onThumbMove.bind(this),this.boundOnThumbMoveCompleted=this.onThumbMoveCompleted.bind(this)}initializeComponent(){super.initializeComponent(),this.subscribeScrollBarEvents();const e=this.getContentContainerElement();if(this.itemsContainer=this.getItemsContainerElement(),this.spacerTop=this.getTopSpacer(),this.spacerBottom=this.getBottomSpacer(),e&&this.spacerTop&&this.spacerBottom){this._viewportHeight=e.getBoundingClientRect().height,this.contentContainerResizeObserver=this.createContentContainerResizeObserver(e),this.dispatchScrollParams();const t={root:e,rootMargin:this._rootMargin};this.spacerIntersectionObserver=new IntersectionObserver(this.intersectionCallback.bind(this),t),this.spacerIntersectionObserver.observe(this.spacerTop),this.spacerIntersectionObserver.observe(this.spacerBottom),this.spacerResizeObserver=new ResizeObserver(this.resizeObserverCallback.bind(this)),this.spacerResizeObserver.observe(this.spacerTop),this.spacerResizeObserver.observe(this.spacerBottom)}}disposeComponent(){var e,t,s;super.disposeComponent(),this.unsubscribeScrollBarEvents(),this.reset(),null===(e=this.spacerIntersectionObserver)||void 0===e||e.disconnect(),null===(t=this.spacerResizeObserver)||void 0===t||t.disconnect(),null===(s=this.contentContainerResizeObserver)||void 0===s||s.disconnect()}get averageHeight(){return this._averageItemHeight}get viewportHeight(){return this._viewportHeight}getItemsContainerElement(){return this.querySelector("[data-virtual-items-container]")}getTopSpacer(){return this.querySelector(`[${h}]`)}getBottomSpacer(){return this.querySelector(`[${c}]`)}findContentHeightConstraint(){if(this._contentHeightConstraint<0){const e=document.createElement("div");e.setAttribute("style","overflow: auto; height: 0; visibility: hidden;");const t=document.createElement("div");t.setAttribute("style","position: relative;"),e.appendChild(t),document.body.appendChild(e),this._contentHeightConstraint=this.findElementMaximumHeight(t)/2,document.body.removeChild(e)}return this._contentHeightConstraint}queryElementsSizeArray(){const e=new Array;if(this.itemsContainer){let t=0;const s=this.groupElements(this.itemsContainer.children);for(const[i,r]of s){let s=0;for(let e=0;e<r.length;e++)s+=this.queryElementHeight(r[e]);e.push(i),e.push(s),t+=s}this._averageItemHeight<0&&s.size>0&&(this._averageItemHeight=v.roundHeight(t/s.size))}return e}queryElementHeight(e){if(!e)return 0;const t=e.getBoundingClientRect().height;return v.roundHeight(t)}findElementMaximumHeight(e){let t=1e6;const s=n.Browser.Firefox?8e6:Number.MAX_VALUE;for(;;){const i=2*t;e.style.height=`${i}px`;const r=e.getBoundingClientRect().height;if(i>s||r!==i)break;t=i}return t}groupElements(e){const t=new Map;let s=[];for(let i=0;i<e.length;i++){const r=e[i],n=r.getAttribute(a);this.skipElement(n)||(n&&(s=[],t.set(parseInt(n),s)),s&&s.push(r))}return t}canDispatchPositionUpdate(){return!this._isThumbDragging}skipElement(e){return!!e&&parseInt(e)<0}clearSelection(){const e=window.getSelection?window.getSelection():document.getSelection();e&&e.empty()}onRefresh(e,t){super.onRefresh(e,t);const s=Math.ceil(e);Math.abs(this._scrollTop-s)>1&&(this.dispatchScrollEvent(s),this._scrollTop=s,this.clearSelection())}intersectionCallback(e){if(!this.spacerIntersectionObserverLocked)for(let t=0;t<e.length;t++){const s=e[t];if(s.isIntersecting&&this.canDispatchPositionUpdate()){if(s.target===this.spacerTop){this.dispatchEvent(new b(0,s.intersectionRect.top-s.boundingClientRect.top,this._renderStateHashCode)),this.clearSelection()}if(s.target===this.spacerBottom){this.dispatchEvent(new b(1,s.boundingClientRect.bottom-s.intersectionRect.bottom,this._renderStateHashCode)),this.clearSelection()}}}}resizeObserverCallback(e){for(let t=0;t<e.length;t++){const s=e[t].target;s.hasAttribute(h)&&this.reconnectIntersectionObserver(this.spacerTop),s.hasAttribute(c)&&this.reconnectIntersectionObserver(this.spacerBottom)}}reconnectIntersectionObserver(e){e&&this.spacerIntersectionObserver&&(this.spacerIntersectionObserver.unobserve(e),this.spacerIntersectionObserver.observe(e))}lockSpacersIntersection(){this.spacerIntersectionObserverLocked=!0}unlockSpacersIntersection(){this.spacerIntersectionObserverLocked=!1,this.reconnectIntersectionObserver(this.spacerTop),this.reconnectIntersectionObserver(this.spacerBottom)}scheduleMakeElementVisible(e,t){this.lockSpacersIntersection(),super.scheduleMakeElementVisible(e,t)}makeElementVisible(e,t){super.makeElementVisible(e,t),this.unlockSpacersIntersection()}createContentContainerResizeObserver(e){const t=new ResizeObserver((e=>{this._viewportHeight=e[0].contentRect.height,this.dispatchScrollParams(),this.dispatchScrollEvent(this._scrollTop)}));return t.observe(e),t}subscribeScrollBarEvents(){const e=this.getVerticalScrollBarElement();e&&this.subscribeThumbEvents(e,this.boundOnThumbMoveStarted,this.boundOnThumbMove,this.boundOnThumbMoveCompleted)}unsubscribeScrollBarEvents(){const e=this.getVerticalScrollBarElement();e&&this.unsubscribeThumbEvents(e,this.boundOnThumbMoveStarted,this.boundOnThumbMove,this.boundOnThumbMoveCompleted)}subscribeThumbEvents(i,r,n,o){i.addEventListener(e.eventName,r),i.addEventListener(t.eventName,n),i.addEventListener(s.eventName,o)}unsubscribeThumbEvents(i,r,n,o){i.removeEventListener(e.eventName,r),i.removeEventListener(t.eventName,n),i.removeEventListener(s.eventName,o)}onThumbMoveStarted(e){this._isThumbDragging=!0}onThumbMove(e){-1!==this._thumbMoveTimerId&&clearTimeout(this._thumbMoveTimerId);this._thumbMoveTimerId=setTimeout((()=>{this.dispatchPositionUpdate()}).bind(this),700),this._isThumbDragging=!0}onThumbMoveCompleted(e){this.dispatchPositionUpdate()}dispatchPositionUpdate(){this._isThumbDragging=!1,clearTimeout(this._thumbMoveTimerId),this._thumbMoveTimerId=-1,this.dispatchScrollEvent(this._scrollTop),this.reconnectIntersectionObserver(this.spacerTop),this.reconnectIntersectionObserver(this.spacerBottom)}dispatchScrollEvent(e){this.canDispatchPositionUpdate()&&this.dispatchEvent(new l(e))}dispatchScrollParams(){const e=this.queryElementsSizeArray(),t=this.findContentHeightConstraint(),s=new d(this._averageItemHeight,e,this._viewportHeight,t);s.equals(this._scrollParams)||(this._scrollParams=s,this.dispatchEvent(new m(this._scrollParams)))}onStateChanged(e){e&&this.dispatchScrollParams()}onRenderStateChanged(e){e&&(this._renderStateHashCode=parseInt(e))}reset(){this._scrollParams=null}static roundHeight(e){return isNaN(e)?0:parseFloat(e.toFixed(2))}static get observedAttributes(){return["reset-v-scroll-guid","reset-h-scroll-guid","request-make-element-visible","state-has-changed","render-state-changed"]}attributeChangedCallback(e,t,s){switch(super.attributeChangedCallback(e,t,s),e){case"state-has-changed":setTimeout((()=>this.onStateChanged(s)));break;case"render-state-changed":this.onRenderStateChanged(s)}}}customElements.define(o,v);export{c as B,o as D,h as T,a as V};
