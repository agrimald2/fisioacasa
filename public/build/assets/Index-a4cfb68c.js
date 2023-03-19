import{a as I}from"./index-a9e58290.js";import{e as l,b as p,w as g,k as r,o as c,a as t,t as d,f as _,l as u,m as h,c as v}from"./app-cd1b42df.js";/* empty css                                               */import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{F as y}from"./FisioLayout-dcf6da75.js";import{H as E}from"./Header-0db4b738.js";import{I as C}from"./Indications-38aa44e7.js";const R={props:["actual_fare","actual_win","fisio"],data(){return{loading:!1,amountExpected:null,finalAmount:0,transport:15,appointment_price:0,comision:20,gateawayComision:4,title:"Agrega tu precio",subtitle:"Este será tu precio por sesión inicial",mainIndication:"¿CUÁNTO QUIERES GANAR?",subIndication:"La plataforma calculará el precio final para el cliente, agregando nuestras comisiones y gastos por cada servicio brindado."}},components:{FisioterapeutasLayout:y,Header:E,Indications:C},computed:{finalAmount(){let s=parseInt(this.amountExpected),e=this.comision,i=this.transport;if(!s)return 0;s+=s*(e/100);let m=s+=i;s+=m*(18/100);let o=m*(this.gateawayComision/100)+1;return s+=o,this.appointment_price=s=Math.ceil(s/5)*5,this.appointment_price}},methods:{updatePrice(){this.loading=!0,I.post("/fisio/updatePrice",{appointment_price:this.appointment_price,fisio_price:this.amountExpected,transport_price:this.transport}).then(s=>{this.loading=!1,window.location.reload()}).catch(s=>{console.error(s)})}}},F={class:"col-12 col-md-8"},L={class:"mb-2 mb-xl-0"},N={key:0,class:"card"},U={class:"card-body text-center row"},S=t("h5",{class:"text-align"},"TARIFA ACTUAL",-1),T=t("hr",null,null,-1),k={class:"row margin-center"},P={class:"col-xl-6 col-sm-6 mb-xl-0 mb-4"},G={class:"card"},O={class:"card-body p-3"},V={class:"row"},B={class:"numbers"},D=t("p",{class:"text-sm mb-0 text-capitalize font-weight-bold"}," Precio Final ",-1),H={class:"font-weight-bolder mb-0"},M={class:"col-xl-6 col-sm-6 mb-xl-0 mb-4"},Q={class:"card"},z={class:"card-body p-3"},q={class:"row"},Y={class:"numbers"},Z=t("p",{class:"text-sm mb-0 text-capitalize font-weight-bold"}," Ganancia Neta ",-1),j={class:"font-weight-bolder mb-0"},J={class:"card mt-2"},K={class:"card-body text-center row"},W=t("h5",{class:"text-align mt-4"},"ACTUALIZAR TARIFA",-1),X=t("hr",{class:"bg-orange"},null,-1),$={class:"col-12 col-md-6 mt-2"},tt=t("label",{for:"search-input"},"QUIERO GANAR",-1),st={class:"col-12 col-md-6 mt-2"},ot=t("label",{for:"search-input"},"PRECIO FINAL ",-1),et=t("h5",{class:"mt-4"},"¿CUÁNTO TE PAGAMOS?",-1),it={key:0},at=t("h5",{class:"mt-4"},"¿QUÉ INCLUYE EL PRECIO FINAL?",-1),nt=t("p",{class:"list"},"Te damos S/15 para que te movilices",-1),ct=t("p",{class:"list"},"% De nuestra comisión",-1),lt=t("p",{class:"list"},"Gastos de la plataforma",-1);function rt(s,e,i,m,o,a){const f=r("Header"),b=r("Indications"),A=r("loader"),x=r("FisioterapeutasLayout");return c(),l("div",null,[p(x,{fisio:i.fisio},{default:g(()=>[p(f,{title:o.title,subtitle:o.subtitle},null,8,["title","subtitle"]),p(b,{mainIndication:o.mainIndication,subIndication:o.subIndication},null,8,["mainIndication","subIndication"]),t("div",F,[t("div",L,[i.actual_fare?(c(),l("div",N,[t("div",U,[S,T,t("div",k,[t("div",P,[t("div",G,[t("div",O,[t("div",V,[t("div",B,[D,t("h5",H,"S/. "+d(i.actual_fare),1)])])])])]),t("div",M,[t("div",Q,[t("div",z,[t("div",q,[t("div",Y,[Z,t("h5",j,"S/. "+d(i.actual_win),1)])])])])])])])])):_("",!0),t("div",J,[t("div",K,[W,X,t("div",$,[tt,u(t("input",{id:"search-input","onUpdate:modelValue":e[0]||(e[0]=n=>o.amountExpected=n),type:"tel",class:"form-control text-center",placeholder:"S/."},null,512),[[h,o.amountExpected]])]),t("div",st,[ot,u(t("input",{disabled:"",id:"search-input","onUpdate:modelValue":e[1]||(e[1]=n=>a.finalAmount=n),type:"tel",class:"form-control text-center",placeholder:"S/."},null,512),[[h,a.finalAmount]])]),et,a.finalAmount?(c(),l("h6",it,"S/ "+d(parseInt(o.amountExpected)+15),1)):_("",!0),at,nt,ct,lt,o.loading?(c(),v(A,{key:1})):_("",!0),o.loading?_("",!0):(c(),l("button",{key:2,onClick:e[2]||(e[2]=(...n)=>a.updatePrice&&a.updatePrice(...n)),class:"btn bg-orange mt-2"}," GUARDAR TARIFA - S/"+d(a.finalAmount),1))])])])])]),_:1},8,["fisio"])])}const bt=w(R,[["render",rt]]);export{bt as default};
