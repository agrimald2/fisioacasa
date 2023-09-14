import{a as h}from"./index-c01c9d02.js";import{l as b}from"./Loader-e6b279eb.js";import{e as r,a as t,t as s,g as m,l,m as p,A as f,F as _,h as y,c as x,f as u,o as d,p as k,i as A,j as I}from"./app-090398bb.js";import{u as w,a as M,f as S,e as T}from"./index-df7866e3.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                               */const V={props:["appointmentInfo","Appdate","patient","location"],data:()=>({failed:!1,valid:!0,number_card:"",mask_credit_card:"credit-card",rules_cvc:{required:e=>!!e||"El cvc es requerido",min:e=>e&&e.length>=3||"Mínimo 3 números",max:e=>e&&e.length<=4||"Máximo 4 números"},items_months:[{text:"01 - Enero",value:"01"},{text:"02 - Febrero",value:"02"},{text:"03 - Marzo",value:"03"},{text:"04 - Abril",value:"04"},{text:"05 - Mayo",value:"05"},{text:"06 - Junio",value:"06"},{text:"07 - Julio",value:"07"},{text:"08 - Agosto",value:"08"},{text:"09 - Septiembre",value:"09"},{text:"10 - Octubre",value:"10"},{text:"11 - Noviembre",value:"11"},{text:"12 - Diciembre",value:"12"}],amount:150,name_titular:"",email:"",last_name_titular:"",month_expiration:"",year_expiration:"",cvv2:"",rules_year:[e=>!!e||"El año de expiración es requerido",e=>e&&e.length>=2||"Mínimo 2 números",e=>e&&e.length<=2||"Máximo 2 números"],emailRules:[e=>!!e||"El correo electrónico es requerido",e=>/.+@.+/.test(e)||"El correo electrónico debe de ser valido"],token:"",endpoint_sandbox_openpay:"https://sandbox-api.openpay.pe/v1/",endpoint_payament:"/api/charge",deviceSessionId:"",openpay_id:"mrvfi7f4rsnkp9egkous",openpay_key:"pk_353a0f93f26c443f9b01e99970893fc5",openpay_sandbox_mode:!0,mesageButton:"Pagar",iconButton:"attach_money",colorButton:"primary"}),mounted(){OpenPay.setId(this.openpay_id),OpenPay.setApiKey(this.openpay_key),OpenPay.setSandboxMode(this.openpay_sandbox_mode),this.deviceSessionId=OpenPay.deviceData.setup()},computed:{formattedDate(){const e={weekday:"long",day:"numeric",month:"long"},a=w(new Date(this.Appdate),"America/Lima"),i=M(a,1);return S(i,"eee d 'de' MMMM",{locale:T,...e})}},methods:{createAppointment(){h.post("/appointment/payAppointment",{patient_id:this.patient.id,fisio_id:this.appointmentInfo.fisio.id,schedule_id:this.appointmentInfo.id,date:this.Appdate,start_time:this.appointmentInfo.start_time,end_time:this.appointmentInfo.end_time,price:this.appointmentInfo.fisio.appointment_price,fisio_win:this.appointmentInfo.fisio.fisio_price,transport_price:this.appointmentInfo.fisio.transport_price,fisio_name:this.appointmentInfo.fisio.name,location_id:this.location}).then(e=>{console.log("pagado"),window.location.href="/appointment/thanks/"+e.data}).catch(e=>{console.error(e)})},pay(){this.loading=!0,OpenPay.token.create({holder_name:this.name_titular+" "+this.last_name_titular,card_number:this.number_card,cvv2:this.cvv2,expiration_month:this.month_expiration,expiration_year:this.year_expiration},e=>{this.token=e.data.id,console.log("Pagado"),this.createAppointment()},e=>{console.log(e),console.log("No pasó la tarjeta"),this.failed=!0,this.loading=!1,console.table(e),console.log(e.data.description)}),h.post(this.endpoint_payament,{name:this.name_titular,last_name:this.last_name_titular,amount:this.amount,email:this.email,token:this.token,deviceSessionId:this.deviceSessionId}).then(e=>{this.mesageButton="Pagado",this.loadingPay=!1,this.iconButton="check_circle",this.colorButton="green"})}},components:{loader:b}},n=e=>(k("data-v-6ce63af9"),e=e(),A(),e),E=n(()=>t("button",{class:"btn btn-orange mt-1 mx-auto my-1",style:{padding:"0.4rem 0.4rem","border-radius":"5px"},"data-toggle":"modal","data-target":"#paymentModal"}," Agendar ",-1)),D={style:{"max-width":"100vw","max-height":"100vh"},class:"modal fade",id:"paymentModal",tabindex:"-1",role:"dialog","aria-labelledby":"paymentModalLabel","aria-hidden":"true"},B={class:"modal-dialog",role:"document"},C={class:"modal-content"},O={class:"modal-body"},F={class:"card mx-auto mb-2"},L={class:"heading text-center color-blue font-bold text-xl"},N={class:"heading text-center",style:{color:"black"}},U={class:"info"},j={class:"info"},z={class:"info"},R={class:"center"},q={class:"card mx-auto",style:{"padding-top":"0"}},J={class:"row card-details"},G={class:"col-12"},K={class:"form-group"},Z=n(()=>t("p",{class:"text-warning mb-0"},"Nombre en Tarjeta",-1)),H={class:"form-group"},Q=n(()=>t("p",{class:"text-warning mb-0"},"Apellido en Tarjeta",-1)),W={class:"form-group"},X=n(()=>t("p",{class:"text-warning mb-0"},"Email en Tarjeta",-1)),Y={class:"form-group mb-0"},$=n(()=>t("p",{class:"text-warning mb-2"},"Número Tarjeta",-1)),ee=["mask"],te={class:"form-group pt-2"},oe={class:"row d-flex"},ae={class:"col-sm-4 col-6"},ne=n(()=>t("p",{class:"text-warning mb-0"},"Mes",-1)),se=["value"],ie={class:"col-sm-4 col-6"},le=n(()=>t("p",{class:"text-warning mb-0"},"Año",-1)),de=["value"],re={class:"col-sm-3"},pe=n(()=>t("p",{class:"text-warning mb-0"},"CVV",-1)),me={class:"row mt-4"},ce={key:1,style:{color:"darkred","font-weight":"bold"}},_e=["disabled"],ue=n(()=>t("i",{class:"fas fa-arrow-right px-3 py-2"},null,-1)),he=n(()=>t("div",{class:"row mt-2"},[t("button",{type:"button",class:"","data-dismiss":"modal",style:{"text-decoration":"underline"}}," Atrás ")],-1));function fe(e,a,i,ye,ve,c){const v=I("loader");return d(),r(_,null,[E,t("div",D,[t("div",B,[t("div",C,[t("div",O,[t("div",F,[t("h5",L," PAGA TU CITA "+s(i.location),1),t("p",N,[m(" Con el Fisioterapeuta "),t("span",U,s(i.appointmentInfo.fisio.name),1),m(" el día "),t("span",j,s(c.formattedDate),1),m(" a las "),t("span",z,s(i.appointmentInfo.start_time),1)]),t("p",R," Precio : S/."+s(i.appointmentInfo.fisio.appointment_price),1)]),t("div",q,[t("form",J,[t("div",G,[t("div",K,[Z,l(t("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.name_titular=o),type:"text",placeholder:"Titular (NOMBRE)",size:"17"},null,512),[[p,e.name_titular]])]),t("div",H,[Q,l(t("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.last_name_titular=o),type:"text",placeholder:"Titular (APELLIDO)",size:"17"},null,512),[[p,e.last_name_titular]])]),t("div",W,[X,l(t("input",{type:"email","onUpdate:modelValue":a[2]||(a[2]=o=>e.email=o),name:"email",placeholder:"Email del Titular",size:"17"},null,512),[[p,e.email]])]),t("div",Y,[$,l(t("input",{type:"text",name:"card-number_card",mask:e.mask_credit_card,"onUpdate:modelValue":a[3]||(a[3]=o=>e.number_card=o),placeholder:"1234 5678 9012 3457",size:"17",id:"cno",minlength:"19",maxlength:"19"},null,8,ee),[[p,e.number_card]])]),t("div",te,[t("div",oe,[t("div",ae,[ne,l(t("select",{class:"form-control",id:"exampleFormControlSelect1","onUpdate:modelValue":a[4]||(a[4]=o=>e.month_expiration=o)},[(d(!0),r(_,null,y(e.items_months,(o,g)=>(d(),r("option",{key:g,value:o.value},s(o.text),9,se))),128))],512),[[f,e.month_expiration]])]),t("div",ie,[le,l(t("select",{class:"form-control",id:"exampleFormControlSelect1","onUpdate:modelValue":a[5]||(a[5]=o=>e.year_expiration=o)},[(d(),r(_,null,y(5,o=>t("option",{key:o,value:o+22}," 20"+s(o+22),9,de)),64))],512),[[f,e.year_expiration]])]),t("div",re,[pe,l(t("input",{name:"cvc",label:"CVC",type:"number","onUpdate:modelValue":a[6]||(a[6]=o=>e.cvv2=o),placeholder:"●●●",pattern:"[0-9]*",size:"3",minlength:"3",maxlength:"3"},null,512),[[p,e.cvv2]])]),t("div",me,[e.loading?(d(),x(v,{key:0})):u("",!0),e.failed?(d(),r("p",ce," ¡REVISA LOS DATOS DE LA TARJETA! ")):u("",!0),e.loading?u("",!0):(d(),r("button",{key:2,type:"button",class:"btn btn-primary paytext",onClick:a[7]||(a[7]=(...o)=>c.pay&&c.pay(...o)),disabled:!e.valid},[m(" PAGAR S/"+s(i.appointmentInfo.fisio.appointment_price)+" ",1),ue],8,_e))]),he])])])])])])])])])],64)}const we=P(V,[["render",fe],["__scopeId","data-v-6ce63af9"]]);export{we as default};
