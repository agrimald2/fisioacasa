import{k as n,l as u,m as r,u as d,o as p,e as i,p as k}from"./app-0f20232d.js";const h=["value"],f={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(t,{emit:s}){const c=t,e=n({get(){return c.checked},set(o){s("update:checked",o)}});return(o,a)=>u((p(),i("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>k(e)?e.value=l:null),type:"checkbox",value:t.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,h)),[[r,d(e)]])}};export{f as _};
