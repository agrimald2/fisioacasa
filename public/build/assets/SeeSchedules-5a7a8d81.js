import{H as m}from"./Header-b7a814f0.js";import k from"./DaySchedule-ad2b6769.js";import"./moment-fbc5633a.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{e as c,b as p,a as o,F as d,h as y,t as b,k as u,o as a,c as w}from"./app-af4fdc27.js";import"./index-12b2b243.js";const f={props:["schedules"],components:{Header:m,DaySchedule:k},data(){return{schedule:[{weekday:"Lunes",weekday_number:1,schedules:[]},{weekday:"Martes",weekday_number:2,schedules:[]},{weekday:"Miercoles",weekday_number:3,schedules:[]},{weekday:"Jueves",weekday_number:4,schedules:[]},{weekday:"Viernes",weekday_number:5,schedules:[]},{weekday:"Sabado",weekday_number:6,schedules:[]},{weekday:"Domingo",weekday_number:7,schedules:[]}],title:"Horario semanal",subtitle:"Haz click sobre un bloque para eliminarlo"}},mounted(){this.populateSchedule(this.schedule,this.schedules)},methods:{populateSchedule(s,l){return s.forEach(t=>{l.filter(e=>e.week_day===t.weekday_number).forEach(e=>{t.schedules.push(e)})}),this.schedule=s,s}}},S={class:"col-12 card mt-4 mb-4"},H={class:"row"};function D(s,l,t,n,e,v){const i=u("Header"),h=u("DaySchedule");return a(),c(d,null,[p(i,{title:e.title,subtitle:e.subtitle},null,8,["title","subtitle"]),o("div",S,[o("div",H,[(a(!0),c(d,null,y(e.schedule,r=>(a(),w(h,{key:r.weekday,day:r.weekday,schedules:r.schedules,headerColor:"#00699e"},null,8,["day","schedules"]))),128))])]),o("pre",null,"  "+b(t.schedules)+`
  `,1)],64)}const C=_(f,[["render",D]]);export{C as default};
