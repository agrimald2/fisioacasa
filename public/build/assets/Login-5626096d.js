import{a as c}from"./index-64a1df50.js";import{G as p}from"./GuestLayout-1c79cecf.js";import{c as m,w,k as _,o as i,a as s,l,m as u,Q as h,e as f,f as v,p as b,j as g}from"./app-d4810072.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const C={data(){return{email:"",password:"",showPassword:!1}},components:{GuestLayout:p},methods:{login(){c.post("/fisio/login",{email:this.email,password:this.password}).then(e=>{window.location.href="/fisio/dashboard"}).catch(e=>{window.location.href="/fisio/dashboard",console.error(e)})},showPasswordBtn(){this.showPassword=!this.showPassword}}},n=e=>(b("data-v-ea501e70"),e=e(),g(),e),x={class:"row"},P=n(()=>s("div",{class:"row center mb-3"},[s("img",{src:"/img/logo-large.png",alt:""})],-1)),k={class:"row center no-row"},B={class:"row form_container center"},E={class:"row mt-2"},I=n(()=>s("label",{for:"email"},"EMAIL",-1)),L={class:"row mt-2"},S=n(()=>s("label",{for:"password"},"CONTRASEÑA",-1)),A=["type"],N={class:"row mt-2 mb-3"};function O(e,o,R,G,t,r){const d=_("GuestLayout");return i(),m(d,null,{default:w(()=>[s("div",x,[P,s("div",k,[s("div",B,[s("div",E,[I,l(s("input",{class:"form-control",id:"email",type:"email",placeholder:"CORREO ELECTRÓNICO","aria-label":"default input example","onUpdate:modelValue":o[0]||(o[0]=a=>t.email=a)},null,512),[[u,t.email]])]),s("div",L,[S,l(s("input",{class:"form-control",id:"password",type:t.showPassword?"text":"password",placeholder:"CONTRASEÑA","aria-label":"default input example","onUpdate:modelValue":o[1]||(o[1]=a=>t.password=a)},null,8,A),[[h,t.password]]),s("span",{class:"btn-blue showPass",onClick:o[2]||(o[2]=(...a)=>r.showPasswordBtn&&r.showPasswordBtn(...a))},"Mostrar Contraseña")]),s("div",N,[t.email&&t.password?(i(),f("button",{key:0,type:"submit",class:"btn btn-orange mt-3",onClick:o[3]||(o[3]=a=>r.login())}," Iniciar Sesión ")):v("",!0)])])])])]),_:1})}const U=y(C,[["render",O],["__scopeId","data-v-ea501e70"]]);export{U as default};