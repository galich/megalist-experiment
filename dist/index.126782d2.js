var t,e,i,s;const r=window,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),l=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(n&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}}const d=t=>new a("string"==typeof t?t:t+"",void 0,o),h=(t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,o)},c=(t,e)=>{n?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),s=r.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})},p=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return d(e)})(t):t,u=window,v=u.trustedTypes,$=v?v.emptyScript:"",m=u.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:g},y="finalized";class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;let r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:_).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){let t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:_;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}w[y]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:w}),(null!==(t=u.reactiveElementVersions)&&void 0!==t?t:u.reactiveElementVersions=[]).push("1.6.3");const A=window,b=A.trustedTypes,E=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,C="?"+x,U=`<${C}>`,P=document,H=()=>P.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,T=t=>O(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),k="[ 	\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,M=/>/g,I=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=D(1),W=(D(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),J=new WeakMap,K=P.createTreeWalker(P,129,null,!1);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const F=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=R;for(let e=0;e<i;e++){let i=t[e],l,a,d=-1,h=0;for(;h<i.length&&(o.lastIndex=h,null!==(a=o.exec(i)));)h=o.lastIndex,o===R?"!--"===a[1]?o=j:void 0!==a[1]?o=M:void 0!==a[2]?(B.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=I):void 0!==a[3]&&(o=I):o===I?">"===a[0]?(o=null!=r?r:R,d=-1):void 0===a[1]?d=-2:(d=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?I:'"'===a[3]?L:z):o===L||o===z?o=I:o===j||o===M?o=R:(o=I,r=void 0);let c=o===I&&t[e+1].startsWith("/>")?" ":"";n+=o===R?i+U:d>=0?(s.push(l),i.slice(0,d)+S+i.slice(d)+x+c):i+x+(-2===d?(s.push(void 0),e):c)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,l=this.parts,[a,d]=F(t,e);if(this.el=G.createElement(a,i),K.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=K.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(S)||e.startsWith(x)){let i=d[n++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+S).split(x),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?te:"?"===e[1]?ts:"@"===e[1]?tr:tt})}else l.push({type:6,index:r})}for(let e of t)s.removeAttribute(e)}if(B.test(s.tagName)){let t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),K.nextNode(),l.push({type:2,index:++r});s.append(t[e],H())}}}else if(8===s.nodeType){if(s.data===C)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)l.push({type:7,index:r}),t+=x.length-1}}r++}}static createElement(t,e){let i=P.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){var r,n,o;if(e===W)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl,a=N(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===a?l=void 0:(l=new a(t))._$AT(t,i,s),void 0!==s?(null!==(o=i._$Co)&&void 0!==o?o:i._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Q(t,l._$AS(t,e.values),l,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:P).importNode(i,!0);K.currentNode=r;let n=K.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new tn(n,this,t)),this._$AV.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(n=K.nextNode(),o++)}return K.currentNode=P,r}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{constructor(t,e,i,s){var r;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){N(t=Q(this,t,e))?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):T(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(Z(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{let t=new X(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}T(t){O(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new Y(this.k(H()),this.k(H()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class tt{constructor(t,e,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!N(t=Q(this,t,e,0))||t!==this._$AH&&t!==W)&&(this._$AH=t);else{let s,o;let l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=Q(this,l[i+s],e,s))===W&&(o=this._$AH[s]),n||(n=!N(o)||o!==this._$AH[s]),o===q?t=q:t!==q&&(t+=(null!=o?o:"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class te extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const ti=b?b.emptyScript:"";class ts extends tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,ti):this.element.removeAttribute(this.name)}}class tr extends tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Q(this,t,e,0))&&void 0!==i?i:q)===W)return;let s=this._$AH,r=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==q&&(s===q||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tn{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const to=A.litHtmlPolyfillSupport;null==to||to(G,Y),(null!==(e=A.litHtmlVersions)&&void 0!==e?e:A.litHtmlVersions=[]).push("2.8.0");const tl=(t,e,i)=>{var s,r;let n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,o=n._$litPart$;if(void 0===o){let t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new Y(e.insertBefore(H(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o};class ta extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tl(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return W}}ta.finalized=!0,ta._$litElement$=!0,null===(i=globalThis.litElementHydrateSupport)||void 0===i||i.call(globalThis,{LitElement:ta});const td=globalThis.litElementPolyfillSupport;null==td||td({LitElement:ta}),(null!==(s=globalThis.litElementVersions)&&void 0!==s?s:globalThis.litElementVersions=[]).push("3.3.3"),customElements.define("login-card-row",class extends ta{static get properties(){return{icon:{type:String}}}static get styles(){return h`
      .row {
        display: flex;
        flex-direction: row;
        margin: 8px;
      }
      .row:hover .arrows {
        display: block;
      }

      .row > .image-margin {
        display: grid;
        align-content: center;
        min-width: 32px;
      }

      .image-margin > img {
        width: 22px;
        height: 22px;
      }
      .arrows {
        display: none;
        padding: -4px 0 -4px 0;
      }
      .arrows > span {
        cursor: pointer;
      }
    `}render(){return V`
      <div class="row">
        <div class="image-margin">
          ${this.icon?V`<img src=${this.icon} role="presentation" />`:null==(()=>null)?void 0:null}
        </div>
        <slot name="row-content"></slot>
        <div class="arrows">
          <span>↑</span>
          <span>↓</span>
        </div>
      </div>
    `}}),customElements.define("list-card",class extends ta{static get styles(){return h`
      .card {
        display: grid;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #69696969;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    `}render(){return V`
      <div class="card">
        <div>
          <slot name="content"></slot>
        </div>
      </div>
    `}});const th={"https://google.com":"../../assets/google.png","https://amazon.com":"../../assets/amazon.png","https://facebook.com":"../../assets/facebook.png"};customElements.define("login-card",class extends ta{static get properties(){return{login:{type:Object}}}static get styles(){return h`
      .input-display {
        width: 100%;
        padding: 4px;
        padding-inline-start: 8px;
        border-radius: 8px;
      }

      .input-display:hover,
      .input-display:focus-within {
        background-color: rgba(147, 144, 144, 0.2);
      }

      .input-display label {
        color: #6b6b6b;
      }

      .input-display > input {
        border: none;
        width: 100%;
        padding-block: 4px;
        margin-inline-end: 8px;
        background-color: transparent;
      }

      .input-display > input:focus-visible {
        outline: none;
      }
    `}getIconSrc(t){if(t.includes("websites"))return th[this.login[t]]||"../../assets/default.png"}renderInput(t,e,i="text"){let s=e.split("\n").map(s=>t.includes("websites")?V`<div><a href=${s}>${s}</a></div>`:t.includes("address")?V`<div>
          <a href=${`https://www.google.ca/maps/place/${s}`}>${s}</a>
        </div>`:e.includes("@")?V`<div>
          <a href=${`mailto:${s}`}>${s}</a>
        </div>`:V`<input name="${t}" type="${i}" value=${s} />`);return V`
      <div slot="row-content" class="input-display">
        <div>
          <label for="${t}">${t}</label>
        </div>
        ${s}
      </div>
    `}render(){return V`
      <list-card>
        <div slot="content">
          ${Object.entries(this.login).map(([t,e])=>{let i="text";if(t.includes("password")&&(i="password"),t.includes("card-number")){let t=e.match(/.{1,4}/g)||[];e=t.join("-")}return V`
              <login-card-row .icon=${this.getIconSrc(t)}>
                ${this.renderInput(t,e,i)}
              </login-card-row>
            `})}
        </div>
      </list-card>
    `}}),customElements.define("list-container",class extends ta{static get properties(){return{items:{type:Array}}}static get styles(){return h`
      .list {
        display: grid;
        width: 100%;
        height: 100%;
        grid-gap: 32px;
      }
    `}constructor(){super(),this.items=[]}renderItems(){return this.items.map(t=>V`<login-card .login=${t}></login-card>`)}render(){return V` <div class="list">${this.renderItems()}</div> `}}),customElements.define("mega-list",class extends ta{static get styles(){return h`
      ul {
        list-style-type: none;
      }

      list-container {
        width: 80%;
        max-width: 500px;
      }

      .container {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr;
        justify-items: center;
      }
    `}render(){return V`
      <div class="container">
        <h1>Manage Credentials</h1>
        <list-container .items=${[{"allowed on websites":"https://google.com",username:"joedoe",password:"123456789"},{"allowed on websites":"https://accounts.firefox.com",username:"joedoe",password:"123456789"},{"allowed on websites":"https://amazon.com",username:"joedoe",password:"123456789"},{"allowed on websites":"https://amazon.com",username:"joedoe",password:"123456789"},{"allowed on websites":"https://amazon.com",username:"joedoe",password:"123456789"},{"allowed on websites":"https://www.bmo.com\nhttps://www.bmoinvestorline.com","credit-card-number":"378282246310005","credit-card-type":"visa","credit-card-expiry":"05/29",username:"joedoe",password:"123456789"},{"allowed on websites":"https://www.bmo.com\nhttps://www.bmoinvestorline.com","credit-card-number":"5555555555554444","credit-card-type":"mastercard","credit-card-expiry":"05/29",username:"joedoe",password:"123456789"},{"allowed on websites":"https://www.bmo.com\nhttps://www.bmoinvestorline.com","credit-card-number":"5610591081018250","credit-card-type":"american-express","credit-card-expiry":"05/29",username:"joedoe",password:"123456789"},{"allowed on websites":"https://www.bmo.com\nhttps://www.bmoinvestorline.com","never use on websites":"https://facebook.com",address:"366 Adelaide St W #500",city:"Toronto",province:"ON","postal code":"M5V 1R9",username:"joedoe",password:"123456789",email:"joe@doe.com"}]}></list-container>
      </div>
    `}});
//# sourceMappingURL=index.126782d2.js.map
