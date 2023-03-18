import{a as u}from"./index-12b2b243.js";import{H as _}from"./Header-b7a814f0.js";import{I as p}from"./Indications-b0925067.js";import{e as b,b as r,a as e,l as i,m as a,F as f,k as l,o as h}from"./app-af4fdc27.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const x={props:[],components:{Header:_,Indications:p},data(){return{title:"Agrega Ubicaciones",subtitle:"Busca la dirección exacta en Google Maps",mainIndication:"Agrega tus ubicaciones más frecuentes",subIndication:"Elige las zonas dónde quisieras ofrecer tus servicios en un radio de hasta 2.5KM. Ejemplo: Tu domicilio, Centro de trabajo, etc.",address:null,address_name:null,address_extra_info:null}},methods:{addLocation(){u.post("/fisio/addLocation",{address:this.address,address_name:this.address_name,address_extra_info:this.address_extra_info}).then(n=>{window.location.reload()}).catch(n=>{console.error(n)})}},mounted(){}},g={class:"col-12 col-md-8"},v={class:"card mb-2 mb-xl-0"},C={class:"card-body text-center"},N={class:"form-group"},E={class:"row"},A={class:"col-12 col-md-12"},B=e("label",{for:"search-input"},"DIRECCIÓN EXACTA",-1),L={class:"col-12 col-md-6"},U=e("label",{for:"search-input"},"NOMBRE DE LA UBICACIÓN",-1),w={class:"col-12 col-md-6"},y=e("label",{for:"search-input"},"DESCRIPCIÓN (Opcional)",-1),V=["disabled"];function k(n,o,D,H,s,d){const c=l("Header"),m=l("Indications");return h(),b(f,null,[r(c,{title:s.title,subtitle:s.subtitle},null,8,["title","subtitle"]),r(m,{mainIndication:s.mainIndication,subIndication:s.subIndication},null,8,["mainIndication","subIndication"]),e("div",g,[e("div",v,[e("div",C,[e("div",N,[e("div",E,[e("div",A,[B,i(e("input",{id:"search-input","onUpdate:modelValue":o[0]||(o[0]=t=>s.address=t),type:"text",class:"form-control",placeholder:"Nombre"},null,512),[[a,s.address]])]),e("div",L,[U,i(e("input",{id:"search-input","onUpdate:modelValue":o[1]||(o[1]=t=>s.address_name=t),type:"text",class:"form-control",placeholder:"Nombre"},null,512),[[a,s.address_name]])]),e("div",w,[y,i(e("input",{id:"search-input","onUpdate:modelValue":o[2]||(o[2]=t=>s.address_extra_info=t),type:"text",class:"form-control",placeholder:"Nombre"},null,512),[[a,s.address_extra_info]])])])]),e("button",{disabled:!s.address_name||!s.address,style:{color:"white"},onClick:o[3]||(o[3]=(...t)=>d.addLocation&&d.addLocation(...t)),class:"btn bg-orange"}," Agregar Ubicación ",8,V)])])])],64)}const O=I(x,[["render",k]]);export{O as default};
