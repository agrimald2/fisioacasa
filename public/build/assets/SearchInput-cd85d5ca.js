import{e as I,a as c,l as v,m as b,t as E,W as _,o as C}from"./app-090398bb.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";var w=function s(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,i,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(i=r;i--!==0;)if(!s(e[i],t[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=r;i--!==0;){var l=o[i];if(!s(e[l],t[l]))return!1}return!0}return e!==e&&t!==t};const p="__googleMapsScriptId";var a;(function(s){s[s.INITIALIZED=0]="INITIALIZED",s[s.LOADING=1]="LOADING",s[s.SUCCESS=2]="SUCCESS",s[s.FAILURE=3]="FAILURE"})(a||(a={}));class n{constructor({apiKey:e,authReferrerPolicy:t,channel:r,client:i,id:o=p,language:l,libraries:h=[],mapIds:u,nonce:f,region:d,retries:g=3,url:m="https://maps.googleapis.com/maps/api/js",version:y}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=r,this.client=i,this.id=o||p,this.language=l,this.libraries=h,this.mapIds=u,this.nonce=f,this.region=d,this.retries=g,this.url=m,this.version=y,n.instance){if(!w(this.options,n.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(n.instance.options)}`);return n.instance}n.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?a.FAILURE:this.done?a.SUCCESS:this.loading?a.LOADING:a.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}const S={data(){return{msg:"Hello Vue Maps!",vm:{searchPlace:"",location:{}}}},mounted(){new n({apiKey:"AIzaSyB8qguqfNNiVO__4S-Vbom6SB8D_cUv1co",version:"weekly"}).load().then(()=>{new google.maps.Map(document.getElementById("map"),{center:{lat:-34.397,lng:150.644},zoom:8})})},props:[],components:{}},A={class:"col-12 col-md-6"},O=c("label",{for:"search-input"},"DIRECCIÓN DE LA UBICACIÓN",-1),D={id:"search-input",type:"text",ref:"input",class:"form-control",placeholder:"Ingresa una ubicación"},N=c("div",{id:"map"},null,-1);function $(s,e,t,r,i,o){const l=_("gmaps-searchbox");return C(),I("div",A,[O,c("input",D,null,512),v(c("input",{"onUpdate:modelValue":e[0]||(e[0]=h=>i.vm.searchPlace=h)},null,512),[[b,i.vm.searchPlace],[l,i.vm,"location"]]),c("pre",null,E(i.vm),1),N])}const R=k(S,[["render",$]]);export{R as default};
