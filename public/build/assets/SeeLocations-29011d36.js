import{a as p}from"./index-c01c9d02.js";import{H as u}from"./Header-b3c875a8.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{e as s,b,a as t,F as i,h,j as f,o as a,t as v,p as y,i as L}from"./app-090398bb.js";const g={props:["locations"],components:{Header:u},data(){return{title:"Ver Ubicaciones",subtitle:"Puedes ELIMINAR una ubicación haciendo CLICK en ella"}},methods:{deleteLocation(e){p.post(`/fisio/deleteLocation/${e}`).then(o=>{window.location.reload()}).catch(o=>{console.error(o)})}}},x=e=>(y("data-v-a23073ba"),e=e(),L(),e),I={class:"col-12 card"},S={class:"card mb-2 mb-xl-0"},k={class:"card-body row"},C={class:"btn bg-orange"},w=["onClick"],H=x(()=>t("i",{class:"fa-solid fa-trash-can"},null,-1)),B=[H];function N(e,o,l,V,c,r){const d=f("Header");return a(),s(i,null,[b(d,{title:c.title,subtitle:c.subtitle},null,8,["title","subtitle"]),t("div",I,[t("div",S,[t("div",k,[(a(!0),s(i,null,h(l.locations,(n,_)=>(a(),s("div",{key:_,class:"col-12 col-md-3 margin-center",style:{display:"flex","justify-content":"center","align-items":"center"}},[t("div",C,v(n.name),1),t("div",{onClick:j=>r.deleteLocation(n.id),class:"btn delete_icon"},B,8,w)]))),128))])])])],64)}const D=m(g,[["render",N],["__scopeId","data-v-a23073ba"]]);export{D as default};
