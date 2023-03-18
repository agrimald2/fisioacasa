import{F as x}from"./FisioLayout-9bdbe0d1.js";import{H as _}from"./Header-fde6f18f.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{c as h,w as m,k as l,o as a,b as f,a as t,e as d,h as b,t as o,F as y,p as g,j as v}from"./app-9be77887.js";import"./index-e9edfd19.js";const w={name:"Schedules",props:["fisio","patients"],components:{FisioterapeutasLayout:x,Header:_},data(){return{title:"Gestiona tus Pacientes",subtitle:"Puedes filtrar por nombre, ubicación, estato y fechas"}}},F=e=>(g("data-v-5ac72df1"),e=e(),v(),e),k={class:"card"},I={class:"card-body px-0 pt-0 pb-2"},S={class:"table-responsive p-0"},L={class:"table align-items-center mb-0"},B=F(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Nombre "),t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}," Celular "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Nacimiento "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Sexo "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"})])],-1)),C={class:"d-flex px-2 py-1"},H={class:"d-flex flex-column justify-content-center"},N={class:"text-xs text-secondary mb-0"},V={class:"text-xs text-secondary mb-0"},j={class:"text-xs font-weight-bold mb-0"},D={class:"align-middle text-center text-sm"},P={class:"text-xs font-weight-bold mb-0"},E={class:"align-middle text-center"},G={class:"text-xs font-weight-bold mb-0"},$={class:"align-middle"};function q(e,n,c,z,i,A){const r=l("Header"),p=l("FisioterapeutasLayout");return a(),h(p,{fisio:c.fisio},{default:m(()=>[f(r,{title:i.title,subtitle:i.subtitle},null,8,["title","subtitle"]),t("div",k,[t("div",I,[t("div",S,[t("table",L,[B,t("tbody",null,[(a(!0),d(y,null,b(c.patients,s=>(a(),d("tr",{key:s.id},[t("td",null,[t("div",C,[t("div",H,[t("p",N,o(s.name),1),t("p",V,o(s.surname),1)])])]),t("td",null,[t("p",j,o(s.phone),1)]),t("td",D,[t("p",P,o(s.phone),1)]),t("td",E,[t("p",G,o(s.sex),1)]),t("td",$,[t("a",{href:"javascript:;",class:"font-weight-bold text-xs btn bg-orange btn-orange","data-toggle":"tooltip","data-original-title":"Ver user",onClick:n[0]||(n[0]=J=>e.seeDetails(e.appointment.id))}," Ver ")])]))),128))])])])])])]),_:1},8,["fisio"])}const T=u(w,[["render",q],["__scopeId","data-v-5ac72df1"]]);export{T as default};