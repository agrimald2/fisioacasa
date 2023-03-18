import{a as u}from"./index-64a1df50.js";import{H as p}from"./Header-3f445b64.js";import{I as _}from"./Indications-9b0bcee3.js";import{e as b,b as a,a as e,l as d,m as r,F as h,k as c,o as f}from"./app-d4810072.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const g={props:[],components:{Header:p,Indications:_},data(){return{title:"Agrega Ubicaciones",subtitle:"Busca la dirección exacta en Google Maps",mainIndication:"Agrega tus ubicaciones más frecuentes",subIndication:"Elige las zonas dónde quisieras ofrecer tus servicios en un radio de hasta 2.5KM. Ejemplo: Tu domicilio, Centro de trabajo, etc.",address:null,address_name:null}},methods:{addLocation(){u.post("/fisio/addLocation",{address:this.address,address_name:this.address_name}).then(n=>{window.location.reload()}).catch(n=>{console.error(n)})}},mounted(){}},v={class:"col-12 col-md-8"},x={class:"card mb-2 mb-xl-0"},C={class:"card-body text-center"},A={class:"form-group"},E={class:"row"},N={class:"col-12 col-md-6"},B=e("label",{for:"search-input"},"DIRECCIÓN EXACTA",-1),L={class:"col-12 col-md-6"},w=e("label",{for:"search-input"},"NOMBRE DE LA UBICACIÓN",-1),U=["disabled"];function k(n,o,y,H,s,i){const l=c("Header"),m=c("Indications");return f(),b(h,null,[a(l,{title:s.title,subtitle:s.subtitle},null,8,["title","subtitle"]),a(m,{mainIndication:s.mainIndication,subIndication:s.subIndication},null,8,["mainIndication","subIndication"]),e("div",v,[e("div",x,[e("div",C,[e("div",A,[e("div",E,[e("div",N,[B,d(e("input",{id:"search-input","onUpdate:modelValue":o[0]||(o[0]=t=>s.address=t),type:"text",class:"form-control",placeholder:"Nombre"},null,512),[[r,s.address]])]),e("div",L,[w,d(e("input",{id:"search-input","onUpdate:modelValue":o[1]||(o[1]=t=>s.address_name=t),type:"text",class:"form-control",placeholder:"Nombre"},null,512),[[r,s.address_name]])])])]),e("button",{disabled:!s.address_name||!s.address,style:{color:"white"},onClick:o[2]||(o[2]=(...t)=>i.addLocation&&i.addLocation(...t)),class:"btn bg-orange"}," Agregar Ubicación ",8,U)])])])],64)}const F=I(g,[["render",k]]);export{F as default};
