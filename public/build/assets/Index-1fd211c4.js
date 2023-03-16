import{a as p}from"./index-68b2ddfd.js";import{G as h}from"./GuestLayout-1cf274d5.js";import{c as _,w as f,i as w,o as a,a as e,e as r,j as l,k as n,f as d,l as u}from"./app-1b7ad124.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const v={data(){return{dni:"",document:"",name:"",surname:"",birthdate:"",sex:"",email:"",phone:"",password:"",showForm:0,fisio:[]}},components:{GuestLayout:h},methods:{validateDNI(){console.log(this.dni),p.get("/fisio/validateDNI",{params:{dni:this.dni}}).then(i=>{i.data=="SI"?window.location.href="/fisio/dashboard":(this.showForm=1,this.fisio=i.data,this.name=i.data.name,this.surname=i.data.surname,this.birthdate=i.data.birthdate,this.sex=i.data.sex,this.email=i.data.email,this.phone=i.data.phone,this.password=i.data.password)}).catch(i=>{console.error(i)})},registerFisio(){p.post("/fisio/create",{document:this.dni,name:this.name,surname:this.surname,birthdate:this.birthdate,sex:this.sex,email:this.email,phone:this.phone,password:this.password}).then(i=>{window.location.href="/fisio/dashboard"}).catch(i=>{console.error(i)})}}},x={class:"row pre_container"},y=e("div",{class:"row center mb-3"},[e("img",{src:"/img/logo-large.png",alt:""})],-1),E={class:"row center no-row"},g={key:0,class:"row register_container center py-2"},I=e("div",{class:"row"},[e("h6",{style:{"text-align":"center"},class:"mt-1"},"Ingresa tu DNI")],-1),N={class:"row"},C={key:1,class:"row form_container center"},O=e("div",{class:"col-5 left_side"},null,-1),D={class:"col-12 col-md-7 right_side"},L={key:0,class:"row mt-2"},U=e("label",{for:"dni"},"DOCUMENTO DE IDENTIDAD",-1),V={class:"row mt-2"},k=e("label",{for:"name"},"NOMBRES",-1),A={class:"row mt-2"},R=e("label",{for:"name"},"APELLIDOS",-1),M={class:"row mt-2"},F=e("label",{for:"birthdate"},"FECHA DE NACIMIENTO",-1),S={class:"row mt-2"},T=e("label",{for:"startDate"},"SEXO",-1),B={class:"row center"},P={class:"wrapper"},G=e("label",{for:"option-1",class:"option option-1"},[e("div",{class:"dot"}),e("span",null,"Masculino")],-1),H=e("label",{for:"option-2",class:"option option-2"},[e("div",{class:"dot"}),e("span",null,"Femenino")],-1),j={class:"row mt-2"},W=e("label",{for:"phone"},"WHATSAPP (Número Peruano)",-1),X={class:"row mt-2"},q=e("label",{for:"email"},"EMAIL",-1),z={class:"row mt-2"},J=e("label",{for:"password"},"CONTRASEÑA",-1),K={class:"row mt-2"};function Q(i,t,Y,Z,o,m){const c=w("GuestLayout");return a(),_(c,null,{default:f(()=>[e("div",x,[y,e("div",E,[o.showForm?d("",!0):(a(),r("div",g,[I,e("div",N,[l(e("input",{class:"form-control my-2",type:"tel",placeholder:"DNI","aria-label":"default input example","onUpdate:modelValue":t[0]||(t[0]=s=>o.dni=s)},null,512),[[n,o.dni]]),o.dni.length==8?(a(),r("button",{key:0,onClick:t[1]||(t[1]=s=>m.validateDNI()),class:"btn btn-orange mt-1"}," Siguiente ")):d("",!0)])])),o.showForm?(a(),r("div",C,[O,e("div",D,[o.dni?d("",!0):(a(),r("div",L,[U,l(e("input",{class:"form-control",type:"tel",placeholder:"DNI","aria-label":"default input example","onUpdate:modelValue":t[2]||(t[2]=s=>o.dni=s)},null,512),[[n,o.dni]])])),e("div",V,[k,l(e("input",{class:"form-control",id:"name",type:"text",placeholder:"NOMBRE COMPLETO","aria-label":"default input example","onUpdate:modelValue":t[3]||(t[3]=s=>o.fisio.name=s)},null,512),[[n,o.fisio.name]])]),e("div",A,[R,l(e("input",{class:"form-control",id:"surname",type:"text",placeholder:"APELLIDOS","aria-label":"default input example","onUpdate:modelValue":t[4]||(t[4]=s=>o.fisio.surname=s)},null,512),[[n,o.fisio.surname]])]),e("div",M,[F,l(e("input",{id:"birthdate",class:"form-control",type:"date","onUpdate:modelValue":t[5]||(t[5]=s=>o.fisio.birthdate=s)},null,512),[[n,o.fisio.birthdate]])]),e("div",S,[T,e("div",B,[e("div",P,[l(e("input",{type:"radio",value:"M",name:"select",id:"option-1","onUpdate:modelValue":t[6]||(t[6]=s=>o.fisio.sex=s)},null,512),[[u,o.fisio.sex]]),l(e("input",{type:"radio",value:"F",name:"select",id:"option-2","onUpdate:modelValue":t[7]||(t[7]=s=>o.fisio.sex=s)},null,512),[[u,o.fisio.sex]]),G,H])])]),e("div",j,[W,l(e("input",{class:"form-control",id:"phone",type:"tel",pattern:"9[0-9]{0,8}",placeholder:"CELULAR","aria-label":"default input example","onUpdate:modelValue":t[8]||(t[8]=s=>o.phone=s)},null,512),[[n,o.phone]])]),e("div",X,[q,l(e("input",{class:"form-control",id:"email",type:"tel",placeholder:"CORREO ELECTRÓNICO","aria-label":"default input example","onUpdate:modelValue":t[9]||(t[9]=s=>o.email=s)},null,512),[[n,o.email]])]),e("div",z,[J,l(e("input",{class:"form-control",id:"password",type:"password",placeholder:"CORREO ELECTRÓNICO","aria-label":"default input example","onUpdate:modelValue":t[10]||(t[10]=s=>o.password=s)},null,512),[[n,o.password]])]),e("div",K,[o.email&&o.phone?(a(),r("button",{key:0,class:"btn btn-orange mt-3",onClick:t[11]||(t[11]=s=>m.registerFisio())}," Siguiente ")):d("",!0)])])])):d("",!0)])])]),_:1})}const se=b(v,[["render",Q]]);export{se as default};
