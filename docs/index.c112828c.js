var e,t,i,s;const l=window,n=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class a{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const d=e=>new a("string"==typeof e?e:e+"",void 0,o),h=(e,...t)=>{let i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new a(i,e,o)},u=(e,t)=>{n?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{let i=document.createElement("style"),s=l.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)})},c=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return d(t)})(e):e,p=window,v=p.trustedTypes,$=v?v.emptyScript:"",m=p.reactiveElementPolyfillSupport,g={toAttribute(e,t){switch(t){case Boolean:e=e?$:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b},f="finalized";class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){let l=this[e];this[t]=s,this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||_}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return u(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=_){var s;let l=this.constructor._$Ep(e,i);if(void 0!==l&&!0===i.reflect){let n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:g).toAttribute(t,i.type);this._$El=e,null==n?this.removeAttribute(l):this.setAttribute(l,n),this._$El=null}}_$AK(e,t){var i;let s=this.constructor,l=s._$Ev.get(e);if(void 0!==l&&this._$El!==l){let e=s.getPropertyOptions(l),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:g;this._$El=l,this[l]=n.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||b)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1,i=this._$AL;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}w[f]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:w}),(null!==(e=p.reactiveElementVersions)&&void 0!==e?e:p.reactiveElementVersions=[]).push("1.6.3");const y=window,A=y.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,C="?"+S,U=`<${C}>`,M=document,P=()=>M.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,k=e=>N(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),O="[ 	\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,j=/>/g,I=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,D=/"/g,L=/^(?:script|style|textarea|title)$/i,B=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),V=B(1),W=(B(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),J=new WeakMap,K=M.createTreeWalker(M,129,null,!1);function Z(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const F=(e,t)=>{let i=e.length-1,s=[],l,n=2===t?"<svg>":"",o=T;for(let t=0;t<i;t++){let i=e[t],r,a,d=-1,h=0;for(;h<i.length&&(o.lastIndex=h,null!==(a=o.exec(i)));)h=o.lastIndex,o===T?"!--"===a[1]?o=R:void 0!==a[1]?o=j:void 0!==a[2]?(L.test(a[2])&&(l=RegExp("</"+a[2],"g")),o=I):void 0!==a[3]&&(o=I):o===I?">"===a[0]?(o=null!=l?l:T,d=-1):void 0===a[1]?d=-2:(d=o.lastIndex-a[2].length,r=a[1],o=void 0===a[3]?I:'"'===a[3]?D:z):o===D||o===z?o=I:o===R||o===j?o=T:(o=I,l=void 0);let u=o===I&&e[t+1].startsWith("/>")?" ":"";n+=o===T?i+U:d>=0?(s.push(r),i.slice(0,d)+x+i.slice(d)+S+u):i+S+(-2===d?(s.push(void 0),t):u)}return[Z(e,n+(e[i]||"<?>")+(2===t?"</svg>":"")),s]};class G{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let l=0,n=0,o=e.length-1,r=this.parts,[a,d]=F(e,t);if(this.el=G.createElement(a,i),K.currentNode=this.el.content,2===t){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=K.nextNode())&&r.length<o;){if(1===s.nodeType){if(s.hasAttributes()){let e=[];for(let t of s.getAttributeNames())if(t.endsWith(x)||t.startsWith(S)){let i=d[n++];if(e.push(t),void 0!==i){let e=s.getAttribute(i.toLowerCase()+x).split(S),t=/([.?@])?(.*)/.exec(i);r.push({type:1,index:l,name:t[2],strings:e,ctor:"."===t[1]?et:"?"===t[1]?es:"@"===t[1]?el:ee})}else r.push({type:6,index:l})}for(let t of e)s.removeAttribute(t)}if(L.test(s.tagName)){let e=s.textContent.split(S),t=e.length-1;if(t>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],P()),K.nextNode(),r.push({type:2,index:++l});s.append(e[t],P())}}}else if(8===s.nodeType){if(s.data===C)r.push({type:2,index:l});else{let e=-1;for(;-1!==(e=s.data.indexOf(S,e+1));)r.push({type:7,index:l}),e+=S.length-1}}l++}}static createElement(e,t){let i=M.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,s){var l,n,o;if(t===W)return t;let r=void 0!==s?null===(l=i._$Co)||void 0===l?void 0:l[s]:i._$Cl,a=H(t)?void 0:t._$litDirective$;return(null==r?void 0:r.constructor)!==a&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===a?r=void 0:(r=new a(e))._$AT(e,i,s),void 0!==s?(null!==(o=i._$Co)&&void 0!==o?o:i._$Co=[])[s]=r:i._$Cl=r),void 0!==r&&(t=Q(e,r._$AS(e,t.values),r,s)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:s}=this._$AD,l=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:M).importNode(i,!0);K.currentNode=l;let n=K.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new Y(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new en(n,this,e)),this._$AV.push(t),a=s[++r]}o!==(null==a?void 0:a.index)&&(n=K.nextNode(),o++)}return K.currentNode=M,l}v(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{constructor(e,t,i,s){var l;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=null===(l=null==s?void 0:s.isConnected)||void 0===l||l}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){H(e=Q(this,e,t))?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):k(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==q&&H(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:s}=e,l="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=G.createElement(Z(s.h,s.h[0]),this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===l)this._$AH.v(i);else{let e=new X(l,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new G(e)),t}T(e){N(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let l of e)s===t.length?t.push(i=new Y(this.k(P()),this.k(P()),this,this.options)):i=t[s],i._$AI(l),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class ee{constructor(e,t,i,s,l){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=l,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){let l=this.strings,n=!1;if(void 0===l)(n=!H(e=Q(this,e,t,0))||e!==this._$AH&&e!==W)&&(this._$AH=e);else{let s,o;let r=e;for(e=l[0],s=0;s<l.length-1;s++)(o=Q(this,r[i+s],t,s))===W&&(o=this._$AH[s]),n||(n=!H(o)||o!==this._$AH[s]),o===q?e=q:e!==q&&(e+=(null!=o?o:"")+l[s+1]),this._$AH[s]=o}n&&!s&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class et extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}const ei=A?A.emptyScript:"";class es extends ee{constructor(){super(...arguments),this.type=4}j(e){e&&e!==q?this.element.setAttribute(this.name,ei):this.element.removeAttribute(this.name)}}class el extends ee{constructor(e,t,i,s,l){super(e,t,i,s,l),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=Q(this,e,t,0))&&void 0!==i?i:q)===W)return;let s=this._$AH,l=e===q&&s!==q||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==q&&(s===q||l);l&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class en{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const eo=y.litHtmlPolyfillSupport;null==eo||eo(G,Y),(null!==(t=y.litHtmlVersions)&&void 0!==t?t:y.litHtmlVersions=[]).push("2.8.0");const er=(e,t,i)=>{var s,l;let n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t,o=n._$litPart$;if(void 0===o){let e=null!==(l=null==i?void 0:i.renderBefore)&&void 0!==l?l:null;n._$litPart$=o=new Y(t.insertBefore(P(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o};class ea extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=er(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return W}}ea.finalized=!0,ea._$litElement$=!0,null===(i=globalThis.litElementHydrateSupport)||void 0===i||i.call(globalThis,{LitElement:ea});const ed=globalThis.litElementPolyfillSupport;null==ed||ed({LitElement:ea}),(null!==(s=globalThis.litElementVersions)&&void 0!==s?s:globalThis.litElementVersions=[]).push("3.3.3"),customElements.define("login-card-row",class extends ea{static get properties(){return{icon:{type:String},editMode:{type:Boolean}}}static get styles(){return h`
      .row {
        display: flex;
        flex-direction: row;
        margin: 8px;
      }
      .row:hover .arrows {
        display: flex;
        flex-direction: column;
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

      .arrows > button {
        display: relative;
        margin: -2px;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }
    `}render(){return V`
      <div class="row">
        <div class="image-margin">
          ${this.icon?V`<img src=${this.icon} role="presentation" />`:null==(()=>null)?void 0:null}
        </div>
        ${this.editMode?V`
              <slot name="edit-row-content"></slot>
              
            `:V`
              <slot name="row-content"></slot>
              
            `}
        <div class="arrows">
          ${this.moveUp?V`<button title="Move line up" @click=${this.moveUp}>▲</button>`:null}
          ${this.editMode?V`
              <button
                title="Save"
                @click=${()=>{this.editMode=!1}}
              >
                💾
              </button>
            `:V`
              <button title="Edit" @click=${()=>this.editMode=!0}>✎</button>
            `}
         ${this.moveDown?V`<button title="Move line down" @click=${this.moveDown}>▼</button>`:null}
        </div>
      </div>
    `}}),customElements.define("list-card",class extends ea{static get styles(){return h`
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
    `}});const eh={"https://google.com":"./assets/google.png","https://amazon.com":"./assets/amazon.png","https://facebook.com":"./assets/facebook.png",default:"./assets/default.png"};customElements.define("login-card",class extends ea{static get properties(){return{login:{type:Array}}}static get styles(){return h`
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
    `}getIconSrc(e,t){if(e.includes("websites"))return eh[t]??eh.default}onMoveUp(e){e>0&&this.login.lines.splice(e-1,2,this.login.lines[e],this.login.lines[e-1]),this.requestUpdate()}onMoveDown(e){e<this.login.lines.length-1&&this.login.lines.splice(e,2,this.login.lines[e+1],this.login.lines[e]),this.requestUpdate()}renderInput(e,t,i="text"){let s=t.split("\n").map(s=>e.includes("websites")?V`<div><a href=${s}>${s}</a></div>`:e.includes("address")?V`<div>
          <a href=${`https://www.google.ca/maps/place/${s}`}>${s}</a>
        </div>`:t.includes("@")?V`<div>
          <a href=${`mailto:${s}`}>${s}</a>
        </div>`:V`<input name="${e}" type="${i}" value=${s} />`),l=t.split("\n").map(e=>V`<textarea placeholder="Enter your data" rows="1">
${e}</textarea
      >`);return V`
      <div slot="row-content" class="input-display">
        <div>
          <label for="${e}">${e}</label>
        </div>
        ${s}
      </div>

      <div slot="edit-row-content" class="input-display">
        <div>
          <input
            list="label-suggestions"
            placeholder="Enter label"
            value=${e}
          />
          <datalist id="label-suggestions">
            <option>username</option>
            <option>password</option>
            <option>credit-card-number</option>
            <option>credit-card-type</option>
            <option>credit-card-expiry</option>
            <option>allowed websites</option>
            <option>never show on websites</option>
            <option>Serg's favourite dishwasher model#</option>
            <option>VIN# for car</option>
            <option>address</option>
          </datalist>
        </div>
        ${l}
      </div>
    `}render(){return V`
      <list-card>
        <div slot="content">
          ${this.login.lines.map(({label:e,value:t},i)=>{let s="text";if(e.includes("password")&&(s="password"),e.includes("card-number")){let e=t.match(/.{1,4}/g)||[];t=e.join("-")}return V`
              <login-card-row
                .moveUp=${i>0?()=>this.onMoveUp(i):null}
                .moveDown=${i<this.login.lines.length-1?()=>this.onMoveDown(i):null}
                .editMode=${!e&&!t}
                .icon=${this.getIconSrc(e,t)}
              >
                ${this.renderInput(e,t,s)}
              </login-card-row>
            `})}
        </div>
      </list-card>
    `}}),customElements.define("list-container",class extends ea{static get properties(){return{items:{type:Array}}}static get styles(){return h`
      .list {
        display: grid;
        width: 100%;
        height: 100%;
        grid-gap: 32px;
      }
    `}constructor(){super(),this.items=[]}renderItems(){return this.items.map(e=>V`<login-card .login=${e}></login-card>`)}render(){return V` <div class="list">${this.renderItems()}</div> `}}),customElements.define("mega-list",class extends ea{static get styles(){return h`
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
        <list-container .items=${[{lines:[{label:"",value:""}]},{lines:[{label:"allowed on websites",value:"https://google.com"},{label:"password",value:"123456789"},{label:"username",value:"joedoe"}]},{lines:[{label:"allowed on websites",value:"https://accounts.firefox.com"},{label:"username",value:"joedoe"},{label:"password",value:"123456789"}]},{lines:[{label:"allowed on websites",value:"https://amazon.com"},{label:"username",value:"joedoe"},{label:"password",value:"123456789"}]},{lines:[{label:"allowed on websites",value:"https://amazon.com"},{label:"username",value:"joedoe"},{label:"password",value:"123456789"}]},{lines:[{label:"allowed on websites",value:"https://amazon.com"},{label:"username",value:"joedoe"},{label:"password",value:"123456789"}]},{lines:[{label:"allowed on websites",value:"https://www.bmo.com\nhttps://www.bmoinvestorline.com"},{label:"credit-card-number",value:"378282246310005"},{label:"credit-card-type",value:"visa"},{label:"credit-card-expiry",value:"05/29"},{label:"username",value:"joedoe"},{label:"password",value:"123456789"}]},{lines:[{label:"allowed on websites",value:"https://www.bmo.com\nhttps://www.bmoinvestorline.com"},{label:"credit-card-number",value:"5555555555554444"},{label:"credit-card-type",value:"mastercard"},{label:"credit-card-expiry",value:"05/29"},{label:"username",value:"joedoe"},{label:"password",value:"123456789"}]},{lines:[{label:"allowed on websites",value:"https://www.bmo.com\nhttps://www.bmoinvestorline.com"},{label:"credit-card-number",value:"5610591081018250"},{label:"credit-card-type",value:"american-express"},{label:"credit-card-expiry",value:"05/29"},{label:"username",value:"joedoe"},{label:"password",value:"123456789"}]},{lines:[{label:"allowed on websites",value:"https://www.bmo.com\nhttps://www.bmoinvestorline.com"},{label:"never use on websites",value:"https://facebook.com"},{label:"address",value:"366 Adelaide St W #500"},{label:"city",value:"Toronto"},{label:"province",value:"ON"},{label:"postal code",value:"M5V 1R9"},{label:"username",value:"joedoe"},{label:"password",value:"123456789"},{label:"email",value:"joe@doe.com"}]}]}></list-container>
      </div>
    `}});
//# sourceMappingURL=index.c112828c.js.map
