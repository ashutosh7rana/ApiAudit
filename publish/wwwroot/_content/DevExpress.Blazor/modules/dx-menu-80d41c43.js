import{_ as e}from"./_tslib-6e8ca86b.js";import{M as t,a as s,D as i,b as o,c as n,d as r}from"./dx-menu-item-c74fd42e.js";import{D as l}from"./dx-dropdown-owner-d3aa32e6.js";import{e as a}from"./custom-element-267f9a21.js";import{S as h}from"./single-slot-element-base-d44a6577.js";import{d as m}from"./dom-f93f7533.js";import{m as c,e as d}from"./utils-4a03fb47.js";import{DxItemListDropDown as u}from"./dxbl-itemlistdropdown-f745488e.js";import{e as p}from"./property-d3853089.js";import{t as f}from"./state-949f2642.js";import"./custom-events-helper-18f7786a.js";import"./dx-ui-element-7f5e2dd2.js";import"./logicaltreehelper-bc8e12d3.js";import"./layouthelper-dc0e1370.js";import"./rect-00eb3fa4.js";import"./point-e4ec110e.js";import"./constants-58283e53.js";import"./lit-element-base-7a85dca5.js";import"./data-qa-utils-8be7c726.js";import"./lit-element-70cf14f4.js";import"./popup-9012b161.js";import"./rafaction-bba7928b.js";import"./transformhelper-ebad0156.js";import"./positiontracker-1fe0834d.js";import"./branch-bf06b0d2.js";import"./capturemanager-86a8762a.js";import"./eventhelper-8570b930.js";import"./pointer-event-helper-ba4ce1e1.js";import"./nameof-factory-64d95f5b.js";import"./dx-html-element-pointer-events-helper-4b46ddbf.js";import"./dropdowncomponents-f131d941.js";import"./thumb-1c09cc55.js";import"./events-interseptor-8aee1ab4.js";import"./popupportal-fcf1c46a.js";let I=class extends l{constructor(){super(),this.desiredWidth=null,this.dropDownWidthSourceResizeObserver=new ResizeObserver(this.onDropDownWidthSourceSizeChanged.bind(this))}connectedCallback(){super.connectedCallback(),this.observeForDropDownWidthSourceElementSize()}disconnectedCallback(){this.dropDownWidthSourceResizeObserver.disconnect(),super.disconnectedCallback()}ensureDropDownElement(){super.ensureDropDownElement(),this.updateDropDownDesiredWidth()}onDropDownWidthSourceSizeChanged(e,t){if(e.length<1)return;this.desiredWidth=e[0].contentRect.width+"px",this.updateDropDownDesiredWidth()}updateDropDownDesiredWidth(){this.dropDownElement&&(this.dropDownElement.desiredWidth=this.desiredWidth)}observeForDropDownWidthSourceElementSize(){this.dropDownWidthSourceResizeObserver.disconnect();const e=this.getDropDownWidthSourceElement();e&&this.dropDownWidthSourceResizeObserver.observe(e)}getDropDownWidthSourceElement(){return this}};I=e([a(t.menuNavBarComponentName)],I);class C{constructor(e){var t;this.menuItem=e,this.id=null!==(t=e.id)&&void 0!==t?t:"",this.width=-1,this.adaptivePriority=e.adaptivePriority,this.canCrop=e.canCrop,this.textElement=null,this.textWidth=-1,this.container=e.closest(`[data-dxmenu-item-id="${this.id}"]`),this.initialize()}canCollapse(){return this.canCrop&&null!==this.textElement}canReduce(){return this.canCollapse()&&!m.DomUtils.hasClassName(this.textElement,s.menuItemTextHiddenClass)}canIncrease(){return this.canCollapse()&&m.DomUtils.hasClassName(this.textElement,s.menuItemTextHiddenClass)}showTextElement(){this.toggleCssClass(this.textElement,s.menuItemTextHiddenClass,!1),this.toggleCssClass(this.container,s.menuListItemHiddenClass,!1)}hideTextElement(){this.toggleCssClass(this.textElement,s.menuItemTextHiddenClass,!0),this.toggleCssClass(this.container,s.menuListItemHiddenClass,!0)}initialize(){let e=0;this.container&&(e=this.calculateChildrenOffsetWidth(this.container));const t=this.menuItem.firstElementChild;if(t){e+=this.calculateChildrenOffsetWidth(t);for(let i=0;i<t.children.length;i++){const o=t.children[i],n=this.calculateElementWidth(o);o.matches(`div.${s.menuItemTextContainer}`)&&(this.textElement=o,this.textWidth=n),e+=n}}this.width=e}isHTMLElement(e){return!!e.offsetWidth}calculateElementWidth(e){const t=getComputedStyle(e);return(this.isHTMLElement(e)?e.offsetWidth:e.getBoundingClientRect().width)+parseFloat(t.marginLeft)+parseFloat(t.marginRight)}calculateChildrenOffsetWidth(e){const t=m.DomUtils.getCurrentStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.marginLeft)+parseFloat(t.marginRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth)}toggleCssClass(e,t,s){e&&e.classList.toggle(t,s)}}class b{constructor(e,t){this.width=e,this.minWidth=t}}class g{constructor(e){this._currentWidth=0,this._itemsWidth=new b(0,0),this._itemsOffset=0,this._collapseToHamburgerWidth=-1,this._menuItemInfos=[],this._resizeObserver=null,this._menuView=e}get isCollapsed(){return this._menuView.isCollapsed}get isVertical(){return this._menuView.isVertical}get canCollapse(){return this._menuView.canCollapse}get collapseToIcons(){return this._menuView.collapseToIcons}get collapseToIconsAll(){return this._menuView.collapseToIconsAll}get collapseToHamburgerMenu(){return this._menuView.collapseToHamburgerMenu}async initialize(e,t){this.unsubsribeFromSizeChanges(),void 0!==t&&this.canCollapse&&(this.collapseToIcons||this.collapseToIconsAll||this.collapseToHamburgerMenu)?(this._menuItemInfos=await c(null,(t=>this.createMenuItemInfos(e))),this._currentWidth=t,this.isCollapsed||(this.isVertical?(this._itemsOffset=0,this._itemsWidth=new b(Math.max(...this._menuItemInfos.map((e=>e.width))),0),this._collapseToHamburgerWidth=-1):(this._itemsOffset=this._menuView.itemsOffset,this._itemsWidth=new b(this.calculateItemsWidth(),this.calculateItemsMinWidth()),this._collapseToHamburgerWidth=this.collapseToIcons||this.collapseToIconsAll?this._itemsWidth.minWidth+this._itemsOffset:this._itemsWidth.width+this._itemsOffset)),await d(null,(e=>this.resize(this._currentWidth))),this.subscribeToSizeChanges()):(this.isCollapsed?this._menuView.onCollapseChanged(!1):await d(null,(e=>this.increaseAllItems())),this._menuItemInfos=[])}resize(e){if(this.isCollapsed)(e>this._collapseToHamburgerWidth||!this.collapseToHamburgerMenu)&&this._menuView.onCollapseChanged(!1);else{const t=e-this._currentWidth;if(this.isVertical)this.collapseToIconsAll&&(t<=0&&this._itemsWidth.width>e?this.reduceAllItems():this._itemsWidth.width<e&&this.increaseAllItems());else{if(this.collapseToIcons){let s=this._itemsOffset;this._menuItemInfos.forEach((e=>{s+=e.width,e.canIncrease()&&(s-=e.textWidth)})),t<=0&&s>e?this.reduceItems(e,s):t>=0&&this.increaseItems(e,s)}else if(this.collapseToIconsAll){const s=this._itemsWidth.width+this._itemsOffset;t<=0&&s>e?this.reduceAllItems():t>=0&&s<e&&this.increaseAllItems()}else this.increaseAllItems();this.collapseToHamburgerMenu&&t<=0&&e<this._collapseToHamburgerWidth&&this._menuView.onCollapseChanged(!0)}}this._currentWidth=e}dispose(){this.unsubsribeFromSizeChanges(),this._menuItemInfos=[]}subscribeToSizeChanges(){this.subscribeToRootElementSizeChange()}unsubsribeFromSizeChanges(){this.unsubscribeFromRootElementSizeChange()}subscribeToRootElementSizeChange(){this._resizeObserver=new ResizeObserver((e=>{const t=e[0];t&&this.resize(t.contentRect.width)})),this._resizeObserver.observe(this._menuView.root)}unsubscribeFromRootElementSizeChange(){var e;null===(e=this._resizeObserver)||void 0===e||e.disconnect(),this._resizeObserver=null}createMenuItemInfos(e){const t=[];return e&&(e.forEach((e=>{t.push(new C(e))})),t.sort(((e,t)=>e.adaptivePriority-t.adaptivePriority))),t}calculateItemsWidth(){let e=0;return this._menuItemInfos.forEach((t=>e+=t.width)),e}calculateItemsMinWidth(){let e=0;return this._menuItemInfos.forEach((t=>{e+=t.width,t.canCollapse()&&(e-=t.textWidth)})),e}reduceItems(e,t){for(let s=this._menuItemInfos.length-1;s>=0&&t>e;s--){const e=this._menuItemInfos[s];e.canReduce()&&(e.hideTextElement(),t-=e.textWidth)}}increaseItems(e,t){for(let s=0;s<this._menuItemInfos.length;s++){const i=this._menuItemInfos[s];if(i.canIncrease()){if(t+i.textWidth>e)break;i.showTextElement(),t+=i.textWidth}}}reduceAllItems(){for(let e=0;e<this._menuItemInfos.length;e++){const t=this._menuItemInfos[e];t.canReduce()&&t.hideTextElement()}}increaseAllItems(){for(let e=0;e<this._menuItemInfos.length;e++){const t=this._menuItemInfos[e];t.canIncrease()&&t.showTextElement()}}}var _;!function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(_||(_={}));let w=class extends h{constructor(){super(),this._menuItems=[],this._sizeController=null,this._handlePromise=Promise.resolve(),this.isVertical=!1,this.isCollapsed=!1,this.canCollapse=!1,this.collapseToIcons=!1,this.collapseToIconsAll=!1,this.collapseToHamburgerMenu=!1,this.loadMode=!1,this.hasVisibleItems=!1,this.sizeMode=_.Medium,this._menuItemsChanged=!1,this._firstUpdate=!0,this._intersectionObserver=new IntersectionObserver(this.onItemsIntersectionChanged.bind(this),{root:this,threshold:[0,1]}),this._onItemDisconnected=e=>{const t=e.target;t instanceof i&&(t.removeEventListener(o.eventName,this._onItemDisconnected),this._intersectionObserver.unobserve(t),this._menuItemsChanged=!0)},this._onItemConnected=()=>{this._menuItemsChanged=!0},this.addEventListener(n.eventName,this._onItemConnected)}get root(){return this}get items(){return this._menuItems}get itemsOffset(){return this.calculateItemsOffset()}connectedCallback(){super.connectedCallback(),this._sizeController=new g(this)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._sizeController)||void 0===e||e.dispose(),this._sizeController=null,this._intersectionObserver.disconnect()}async getUpdateComplete(){return await this._handlePromise,super.getUpdateComplete()}firstUpdated(){this._firstUpdate=!1}willUpdate(e){this._handlePromise=this.handleChangedProperties(e,this._firstUpdate)}async handleChangedProperties(e,t){var i,n;await this._handlePromise,(this.anyOf(e,"canCollapse","isCollapsed","isVertical")||this._menuItemsChanged)&&(this._menuItems=this.isCollapsed?[]:this.collectMenuItems(),this._intersectionObserver.disconnect(),this._menuItems.forEach((e=>{e.addEventListener(o.eventName,(e=>this._onItemDisconnected)),this._intersectionObserver.observe(e)})),this._menuItemsChanged=!1);const r=this.offsetWidth;if(!t&&this.canCollapse&&e.has("sizeMode")&&(this.isCollapsed||await this.toggleItemsContainerCssClass(s.invisible,!0),await(null===(i=this._sizeController)||void 0===i?void 0:i.initialize(this._menuItems))),this.hasVisibleItems){await(null===(n=this._sizeController)||void 0===n?void 0:n.initialize(this._menuItems,r));const e={[s.invisible]:!1};e[s.menuLoading]=!1,await this.toggleItemsContainerCssClasses(e)}}onCollapseChanged(e){this.dispatchEvent(new r(e))}anyOf(e,...t){for(const s of t)if(e.has(s))return!0;return!1}collectMenuItems(){const e=this.querySelectorAll(t.menuItemComponentName),s=[];return e&&e.forEach((e=>s.push(e))),s}onItemsIntersectionChanged(e){e.forEach((e=>e.target.isVisible=e.isIntersecting)),this.hasVisibleItems=this._menuItems.filter((e=>e.isVisible)).length>0}async toggleItemsContainerCssClasses(e){const s=this.querySelector(t.menuItemsContainerSelector);s&&await d(s,(t=>{for(const[s,i]of Object.entries(e))t.classList.toggle(s,i)}))}async toggleItemsContainerCssClass(e,t){await this.toggleItemsContainerCssClasses({[e]:t})}calculateItemsOffset(){const e=this.querySelector(t.menuItemsContainerSelector);return e?e.offsetLeft-this.offsetLeft:0}};e([p({type:Boolean,attribute:"is-vertical"})],w.prototype,"isVertical",void 0),e([p({type:Boolean,attribute:"is-collapsed"})],w.prototype,"isCollapsed",void 0),e([p({type:Boolean,attribute:"can-collapse"})],w.prototype,"canCollapse",void 0),e([p({type:Boolean,attribute:"collapse-to-icons"})],w.prototype,"collapseToIcons",void 0),e([p({type:Boolean,attribute:"collapse-to-icons-all"})],w.prototype,"collapseToIconsAll",void 0),e([p({type:Boolean,attribute:"collapse-to-hamburger-menu"})],w.prototype,"collapseToHamburgerMenu",void 0),e([p({type:Boolean,attribute:"load-mode"})],w.prototype,"loadMode",void 0),e([p({type:_,attribute:"size-mode"})],w.prototype,"sizeMode",void 0),e([f()],w.prototype,"hasVisibleItems",void 0),w=e([a(t.menuComponentName)],w);const v=[i,I,u];const W={loadModule:function(){}};export{w as DxMenu,W as default,v as relativeTypes};
