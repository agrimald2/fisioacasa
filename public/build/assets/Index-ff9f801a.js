import{_ as r}from"./AppLayout-24e741aa.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import i from"./Group-50a7828a.js";import m from"./Item-f17476f8.js";import{c as h,w as n,o as t,a as s,e as o,h as x,t as p,F as g,p as u,i as b}from"./app-393a5267.js";import"./Container-267ee13c.js";import"./Grid-ac87151b.js";import"./Label-05817c53.js";import"./Separator-89614442.js";const c=a=>(u("data-v-eee41bf2"),a=a(),b(),a),y=c(()=>s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Fisioterapeutas",-1)),w={class:"py-12"},f=c(()=>s("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},[s("div",{class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-4"},"FILTROS")],-1)),v={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4"},k={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-4"},I={class:"relative overflow-x-auto"},S={class:"w-full text-sm text-left text-gray-500"},F=c(()=>s("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[s("tr",null,[s("th",{scope:"col",class:"px-6 py-3"},"#"),s("th",{scope:"col",class:"px-6 py-3"},"Nombre"),s("th",{scope:"col",class:"px-6 py-3"},"Celular"),s("th",{scope:"col",class:"px-6 py-3"},"Status"),s("th",{scope:"col",class:"px-6 py-3"},"Tarifa")])],-1)),B=["onClick"],C={class:"px-6 py-4"},L={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},D={class:"px-6 py-4"},N={class:"px-6 py-4"},O={key:0,class:"badge badge-sm bg-gray-400 p-2 uppercase"},R={key:1,class:"badge badge-sm bg-blue p-2 uppercase"},T={key:2,class:"badge badge-sm bg-orange p-2 uppercase"},$={key:3,class:"badge badge-sm bg-red-500 p-2 uppercase"},j={class:"px-6 py-4"},A={key:0},E={key:1},G={props:["fisios"],components:{LinkGroup:i,LinkItem:m},methods:{go(a){console.log("Hola"),window.location.href="/admin/fisio/"+a}}},H=Object.assign(G,{__name:"Index",setup(a){return(l,V)=>(t(),h(r,{title:"Fisioterapeutas"},{header:n(()=>[y]),default:n(()=>[s("div",w,[f,s("div",v,[s("div",k,[s("div",I,[s("table",S,[F,s("tbody",null,[(t(!0),o(g,null,x(a.fisios,(e,d)=>(t(),o("tr",{class:"bg-white border-b pointer",onClick:q=>l.go(e.id),key:d},[s("td",C,p(d+1),1),s("td",L,p(e.name)+" "+p(e.surname),1),s("td",D,p(e.phone),1),s("td",N,[e.status==0?(t(),o("span",O,"Registrado")):e.status==1?(t(),o("span",R,"Documentos")):e.status==2?(t(),o("span",T,"Aprobado")):(t(),o("span",$,"Denegado"))]),s("td",j,[e.appointment_price?(t(),o("span",A,"S/"+p(e.appointment_price),1)):(t(),o("span",E,"---"))])],8,B))),128))])])])])])])]),_:1}))}}),Y=_(H,[["__scopeId","data-v-eee41bf2"]]);export{Y as default};
