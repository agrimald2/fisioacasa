import{a as h}from"./index-68b2ddfd.js";import p from"./Photo-6732bb67.js";import v from"./AcademicInfo-82f8aef7.js";import A from"./Documentation-cc3092ad.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{e as s,a as o,b as a,g as d,f as n,F as x,i as c,o as i,z as b,A as y}from"./app-1b7ad124.js";const D={props:["fisio","degrees","especialties","universities","hasDocumentation","hasAcademic"],name:"Profile",components:{Photo:p,AcademicInfo:v,Documentation:A},data(){return{}},methods:{sendToRevision(){h.post("/fisio/sendToRevision").then(t=>{window.location.reload()}).catch(t=>{console.error(t)})}}},l=t=>(b("data-v-2ff37e50"),t=t(),y(),t),I=l(()=>o("h5",{style:{"text-align":"center"}},[d(" Por favor, "),o("i",null,"completa tus datos"),d(" para proceder al siguiente paso ")],-1)),P={class:"row no-pd margin-center"},k={class:"col-md-4 col-12"},N=l(()=>o("div",{class:"col-md-8 col-12"},[o("div",{class:"card"},"*Acá debería ir un Tutorial*")],-1)),w={class:"col-md-6 col 12 info_container"},T={class:"col-md-6 col-12 info_container"},C={class:"row mt-2 text-center"},E={key:0},S={key:0,style:{color:"red"}},V={key:1,style:{color:"red"}},B=["disabled"];function R(t,r,e,F,U,m){const _=c("Photo"),u=c("AcademicInfo"),f=c("Documentation");return i(),s(x,null,[I,o("div",P,[o("div",k,[a(_,{photoUrl:e.fisio.profile_photo_path,fisioName:e.fisio.name},null,8,["photoUrl","fisioName"])]),N,o("div",w,[a(u,{degrees:e.degrees,especialties:e.especialties,universities:e.universities,completed:e.hasAcademic},null,8,["degrees","especialties","universities","completed"])]),o("div",T,[a(f,{completed:e.hasDocumentation},null,8,["completed"])]),o("div",C,[e.hasDocumentation&&e.hasAcademic?n("",!0):(i(),s("span",E,[d(" Completa todas las secciones para enviar a revisión: "),e.hasAcademic?n("",!0):(i(),s("span",S,"Información Académica, ")),e.hasDocumentation?n("",!0):(i(),s("span",V,"Sube todos tus documentos"))])),o("button",{onClick:r[0]||(r[0]=z=>m.sendToRevision()),class:"btn btn-next mt-3",disabled:!(e.hasDocumentation&&e.hasAcademic)}," Enviar para revisión ",8,B)])])],64)}const L=g(D,[["render",R],["__scopeId","data-v-2ff37e50"]]);export{L as default};
