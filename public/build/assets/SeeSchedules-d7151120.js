import{H as m}from"./Header-e882b982.js";import k from"./DaySchedule-31d3229c.js";import"./moment-fbc5633a.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{e as l,b as p,a as c,F as d,h as y,i as u,o as t,c as b}from"./app-352a2ddd.js";import"./index-4f6670ba.js";const w={props:["schedules"],components:{Header:m,DaySchedule:k},data(){return{schedule:[{weekday:"Lunes",weekday_number:0,schedules:[]},{weekday:"Martes",weekday_number:1,schedules:[]},{weekday:"Miercoles",weekday_number:2,schedules:[]},{weekday:"Jueves",weekday_number:3,schedules:[]},{weekday:"Viernes",weekday_number:4,schedules:[]},{weekday:"Sabado",weekday_number:5,schedules:[]},{weekday:"Domingo",weekday_number:7,schedules:[]}],title:"Horario semanal",subtitle:"Haz click sobre un bloque para eliminarlo"}},mounted(){this.populateSchedule(this.schedule,this.schedules)},methods:{populateSchedule(s,a){return s.forEach(o=>{a.filter(e=>e.week_day===o.weekday_number).forEach(e=>{o.schedules.push(e)})}),this.schedule=s,s}}},f={class:"col-12 card mt-4 mb-4"},S={class:"row"};function H(s,a,o,n,e,v){const i=u("Header"),h=u("DaySchedule");return t(),l(d,null,[p(i,{title:e.title,subtitle:e.subtitle},null,8,["title","subtitle"]),c("div",f,[c("div",S,[(t(!0),l(d,null,y(e.schedule,r=>(t(),b(h,{key:r.weekday,day:r.weekday,schedules:r.schedules,headerColor:"#00699e"},null,8,["day","schedules"]))),128))])])],64)}const g=_(w,[["render",H]]);export{g as default};
