import{_ as r}from"./AppLayout-ea7e0769.js";import l from"./Group-c5201a32.js";import e from"./Item-be928504.js";import{c as p,w as n,o as m,a,b as s}from"./app-090398bb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Container-abd5f4dd.js";import"./Grid-bb6ea2cd.js";import"./Label-be40c349.js";import"./Separator-2de6c96e.js";const f=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard",-1),g={class:"py-12"},u={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},b={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},v={props:[],components:{LinkGroup:l,LinkItem:e},methods:{go(d){const o=route(d);this.$inertia.visit(o)}}},y=Object.assign(v,{__name:"Dashboard",setup(d){return(o,i)=>(m(),p(r,{title:"Dashboard"},{header:n(()=>[f]),default:n(()=>[a("div",g,[a("div",u,[a("div",b,[s(l,{title:"Datos de la aplicación"},{default:n(()=>[s(e,{label:"Fisioterapeutas",icon:"fa-user-md",onClick:i[0]||(i[0]=t=>o.go("admin.fisios"))}),s(e,{label:"Pacientes",icon:"fa-hands-helping",onClick:i[1]||(i[1]=t=>o.go("assistants.index"))}),s(e,{label:"Citas",icon:"fa-hospital-user",onClick:i[2]||(i[2]=t=>o.go("patients.index"))}),s(e,{label:"Estadística",icon:"fa-building",onClick:i[3]||(i[3]=t=>o.go("offices.index"))})]),_:1}),s(l,{title:"Registros Maestros"},{default:n(()=>[s(e,{label:"Transporte",icon:"fa-user-md",onClick:i[4]||(i[4]=t=>o.go("doctors.index"))}),s(e,{label:"Universidades",icon:"fa-hands-helping",onClick:i[5]||(i[5]=t=>o.go("assistants.index"))}),s(e,{label:"Especialidades",icon:"fa-hospital-user",onClick:i[6]||(i[6]=t=>o.go("patients.index"))}),s(e,{label:"Grados",icon:"fa-building",onClick:i[7]||(i[7]=t=>o.go("offices.index"))})]),_:1})])])])]),_:1}))}});export{y as default};
