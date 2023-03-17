import{F as _}from"./FisioLayout-9eb3df2b.js";import u from"./Photo-8c541d59.js";import{H as f}from"./Header-fb61de5f.js";import{e as p,b as a,w as h,i as n,o as v,a as o,j as i,k as l,l as d}from"./app-5fc04910.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-4f4f64db.js";const E={props:["fisio"],data(){return{}},components:{FisioterapeutasLayout:_,Photo:u,Header:f},methods:{}},x={class:"row",style:{"--bs-gutter-x":"0.75rem"}},y=o("hr",{class:"hr-orange"},null,-1),N={class:"col-md-4 col-12"},O={class:"card"},w={class:"col-md-8 col-12"},C={class:"card"},I={class:"row center no-pd"},L={class:"row center no-pd no-row"},M={class:"row center no-pd"},U={class:"col-12 right_side"},D={class:"row"},P={class:"col-12 col-md-6 mt-2"},V=o("label",{for:"dni"},"DOCUMENTO DE IDENTIDAD",-1),F={class:"col-12 col-md-6 mt-2"},R=o("label",{for:"name"},"NOMBRE COMPLETO",-1),T={class:"col-12 col-md-6 mt-2"},A=o("label",{for:"birthdate"},"FECHA DE NACIMIENTO",-1),H={class:"col-12 col-md-6 mt-2"},g=o("label",{for:"startDate"},"SEXO",-1),k={class:"row center"},B={class:"wrapper margin-center"},S=o("label",{for:"option-1",class:"option option-1"},[o("div",{class:"dot"}),o("span",null,"Masculino")],-1),j=o("label",{for:"option-2",class:"option option-2"},[o("div",{class:"dot"}),o("span",null,"Femenino")],-1),W={class:"col-12 col-md-6 mt-2"},X=o("label",{for:"phone"},"WHATSAPP (Numero Peruano)",-1),q={class:"col-12 col-md-6 mt-2"},z=o("label",{for:"email"},"EMAIL",-1);function G(J,e,t,K,Q,Y){const c=n("Header"),r=n("Photo"),m=n("FisioterapeutasLayout");return v(),p("div",null,[a(m,{fisio:t.fisio},{default:h(()=>[a(c,{title:"MI PERFIL",subtitle:"Estos son tus datos personales"}),o("div",x,[y,o("div",N,[o("div",O,[a(r,{photoUrl:t.fisio.profile_photo_path,fisioName:t.fisio.name},null,8,["photoUrl","fisioName"])])]),o("div",w,[o("div",C,[o("div",I,[o("div",L,[o("div",M,[o("div",U,[o("div",D,[o("div",P,[V,i(o("input",{class:"form-control",id:"dni",type:"tel",placeholder:"DNI","aria-label":"default input example","onUpdate:modelValue":e[0]||(e[0]=s=>t.fisio.document=s)},null,512),[[l,t.fisio.document]])]),o("div",F,[R,i(o("input",{class:"form-control",id:"name",type:"text",placeholder:"NOMBRE COMPLETO","aria-label":"default input example","onUpdate:modelValue":e[1]||(e[1]=s=>t.fisio.name=s)},null,512),[[l,t.fisio.name]])]),o("div",T,[A,i(o("input",{id:"birthdate",class:"form-control",type:"date","onUpdate:modelValue":e[2]||(e[2]=s=>t.fisio.birthdate=s)},null,512),[[l,t.fisio.birthdate]])]),o("div",H,[g,o("div",k,[o("div",B,[i(o("input",{type:"radio",name:"select",id:"option-1",checked:"","onUpdate:modelValue":e[3]||(e[3]=s=>t.fisio.sex=s)},null,512),[[d,t.fisio.sex]]),i(o("input",{type:"radio",name:"select",id:"option-2",checked:"","onUpdate:modelValue":e[4]||(e[4]=s=>t.fisio.sex=s)},null,512),[[d,t.fisio.sex]]),S,j])])]),o("div",W,[X,i(o("input",{class:"form-control",id:"phone",type:"tel",placeholder:"CELULAR","aria-label":"default input example","onUpdate:modelValue":e[5]||(e[5]=s=>t.fisio.phone=s)},null,512),[[l,t.fisio.phone]])]),o("div",q,[z,i(o("input",{class:"form-control",id:"email",type:"tel",placeholder:"CORREO ELECTRÓNICO","aria-label":"default input example","onUpdate:modelValue":e[6]||(e[6]=s=>t.fisio.email=s)},null,512),[[l,t.fisio.email]])])])])])])])])])])]),_:1},8,["fisio"])])}const io=b(E,[["render",G]]);export{io as default};