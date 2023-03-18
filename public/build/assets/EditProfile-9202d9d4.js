import{a as f}from"./index-64a1df50.js";import p from"./Photo-b5173f93.js";import v from"./AcademicInfo-a58cf560.js";import g from"./Documentation-557f9e9d.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{e as s,a as o,b as a,g as d,f as n,F as b,k as c,o as i,p as x,j as y}from"./app-d4810072.js";import"./Loader-d52ea707.js";const D={props:["fisio","degrees","especialties","universities","hasDocumentation","hasAcademic"],name:"Profile",components:{Photo:p,AcademicInfo:v,Documentation:g},data(){return{}},methods:{sendToRevision(){f.post("/fisio/sendToRevision").then(t=>{window.location.reload()}).catch(t=>{console.error(t)})}}},l=t=>(x("data-v-df3518d5"),t=t(),y(),t),I=l(()=>o("h5",{style:{"text-align":"center"}},[d(" Por favor, "),o("i",null,"completa tus datos"),d(" para proceder al siguiente paso ")],-1)),k={class:"row no-pd margin-center"},P={class:"col-md-4 col-12"},N=l(()=>o("div",{class:"col-md-8 col-12"},[o("div",{class:"card"},"*Acá debería ir un Tutorial*")],-1)),w={class:"col-md-6 col 12 info_container"},T={class:"col-md-6 col-12 info_container"},C={class:"row mt-2 text-center margin-center"},E={key:0},S={key:0,style:{color:"red"}},V={key:1,style:{color:"red"}},B=["disabled"];function R(t,r,e,F,U,m){const _=c("Photo"),u=c("AcademicInfo"),h=c("Documentation");return i(),s(b,null,[I,o("div",k,[o("div",P,[a(_,{photoUrl:e.fisio.profile_photo_path,fisioName:e.fisio.name},null,8,["photoUrl","fisioName"])]),N,o("div",w,[a(u,{degrees:e.degrees,especialties:e.especialties,universities:e.universities,completed:e.hasAcademic},null,8,["degrees","especialties","universities","completed"])]),o("div",T,[a(h,{completed:e.hasDocumentation},null,8,["completed"])]),o("div",C,[e.hasDocumentation&&e.hasAcademic?n("",!0):(i(),s("span",E,[d(" Completa todas las secciones para enviar a revisión: "),e.hasAcademic?n("",!0):(i(),s("span",S,"Información Académica, ")),e.hasDocumentation?n("",!0):(i(),s("span",V,"Sube todos tus documentos"))])),o("button",{onClick:r[0]||(r[0]=j=>m.sendToRevision()),class:"btn btn-blue mt-3",disabled:!(e.hasDocumentation&&e.hasAcademic)}," Enviar para revisión ",8,B)])])],64)}const M=A(D,[["render",R],["__scopeId","data-v-df3518d5"]]);export{M as default};