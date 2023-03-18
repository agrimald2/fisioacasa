import{v as _,e as c,b as e,u as o,w as m,F as g,o as f,X as h,a,g as u,f as w,E as v,n as y,D as V}from"./app-3bf74c65.js";import{A as b}from"./AuthenticationCard-e0b6a11d.js";import{_ as k}from"./AuthenticationCardLogo-432380e1.js";import{_ as x}from"./Checkbox-14cc54cb.js";import{_ as i,a as l}from"./TextInput-e8ea988d.js";import{_ as n}from"./InputLabel-8b262014.js";import{_ as C}from"./PrimaryButton-340f0ac2.js";import"./_plugin-vue_export-helper-c27b6911.js";const $=a("h4",{class:"font-bold"},"Registro de Administradores",-1),q=a("hr",{class:"mb-2"},null,-1),A=["onSubmit"],U={class:"mt-4"},N={class:"mt-4"},F={class:"mt-4"},P={class:"mt-4"},R={key:0,class:"mt-4"},B={class:"flex items-center"},E={class:"ml-2"},S=["href"],T=["href"],j={class:"flex items-center justify-end mt-4"},L={__name:"Register",setup(z){const s=_({name:"",phone:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(d,t)=>(f(),c(g,null,[e(o(h),{title:"Register Admin"}),e(b,null,{logo:m(()=>[e(k)]),default:m(()=>[$,q,a("form",{onSubmit:V(p,["prevent"])},[a("div",null,[e(n,{for:"name",value:"Nombre"}),e(i,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":t[0]||(t[0]=r=>o(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),a("div",U,[e(n,{for:"phone",value:"Celular"}),e(i,{id:"phone",modelValue:o(s).phone,"onUpdate:modelValue":t[1]||(t[1]=r=>o(s).phone=r),type:"tel",class:"mt-1 block w-full",required:"",autocomplete:"phone"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),a("div",N,[e(n,{for:"email",value:"Email"}),e(i,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":t[2]||(t[2]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),a("div",F,[e(n,{for:"password",value:"Contraseña"}),e(i,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":t[3]||(t[3]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),a("div",P,[e(n,{for:"password_confirmation",value:"Confirmar Contraseña"}),e(i,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),d.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(f(),c("div",R,[e(n,{for:"terms"},{default:m(()=>[a("div",B,[e(x,{id:"terms",checked:o(s).terms,"onUpdate:checked":t[5]||(t[5]=r=>o(s).terms=r),name:"terms",required:""},null,8,["checked"]),a("div",E,[u(" I agree to the "),a("a",{target:"_blank",href:d.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,S),u(" and "),a("a",{target:"_blank",href:d.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,T)])]),e(l,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):w("",!0),a("div",j,[e(o(v),{href:d.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[u(" Already registered? ")]),_:1},8,["href"]),e(C,{class:y(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:m(()=>[u(" Register ")]),_:1},8,["class","disabled"])])],40,A)]),_:1})],64))}};export{L as default};