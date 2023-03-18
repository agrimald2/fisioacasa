import{a as _}from"./index-3e22f4a5.js";import{H as u}from"./Header-c0bdb292.js";import{I as p}from"./Indications-61de861d.js";import{e as b,b as r,a as e,j as i,k as a,F as f,i as l,o as h}from"./app-6b69cfe2.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const x={props:[],components:{Header:u,Indications:p},data(){return{title:"Agrega Ubicaciones",subtitle:"Busca la dirección exacta en Google Maps",mainIndication:"Agrega tus ubicaciones más frecuentes",subIndication:"Elige las zonas dónde quisieras ofrecer tus servicios en un radio de hasta 2.5KM. Ejemplo: Tu domicilio, Centro de trabajo, etc.",address:null,address_name:null,address_extra_info:null}},methods:{addLocation(){_.post("/fisio/addLocation",{address:this.address,address_name:this.address_name,address_extra_info:this.address_extra_info}).then(n=>{window.location.reload()}).catch(n=>{console.error(n)})}},mounted(){}},v={class:"col-12 col-md-8"},g={class:"card mb-2 mb-xl-0"},C={class:"card-body text-center"},N={class:"form-group"},E={class:"row"},A={class:"col-12 col-md-12"},B=e("label",{for:"search-input"},"DIRECCIÓN EXACTA",-1),L={class:"col-12 col-md-6"},U=e("label",{for:"search-input"},"NOMBRE DE LA UBICACIÓN",-1),w={class:"col-12 col-md-6"},y=e("label",{for:"search-input"},"DESCRIPCIÓN (Opcional)",-1),V={ref:"map",class:"map"},k=["disabled"];function D(n,o,H,M,s,d){const c=l("Header"),m=l("Indications");return h(),b(f,null,[r(c,{title:s.title,subtitle:s.subtitle},null,8,["title","subtitle"]),r(m,{mainIndication:s.mainIndication,subIndication:s.subIndication},null,8,["mainIndication","subIndication"]),e("div",v,[e("div",g,[e("div",C,[e("div",N,[e("div",E,[e("div",A,[B,i(e("input",{id:"search-input","onUpdate:modelValue":o[0]||(o[0]=t=>s.address=t),type:"text",class:"form-control",placeholder:"Nombre"},null,512),[[a,s.address]])]),e("div",L,[U,i(e("input",{id:"search-input","onUpdate:modelValue":o[1]||(o[1]=t=>s.address_name=t),type:"text",class:"form-control",placeholder:"Nombre"},null,512),[[a,s.address_name]])]),e("div",w,[y,i(e("input",{id:"search-input","onUpdate:modelValue":o[2]||(o[2]=t=>s.address_extra_info=t),type:"text",class:"form-control",placeholder:"Nombre"},null,512),[[a,s.address_extra_info]])])])]),e("div",V,null,512),e("button",{disabled:!s.address_name||!s.address,style:{color:"white"},onClick:o[3]||(o[3]=(...t)=>d.addLocation&&d.addLocation(...t)),class:"btn bg-orange"}," Agregar Ubicación ",8,k)])])])],64)}const q=I(x,[["render",D]]);export{q as default};
