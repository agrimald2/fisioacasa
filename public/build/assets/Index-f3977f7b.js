import{F as n}from"./FisioLayout-94a6a239.js";import r from"./CreateSchedules-db7c9a4e.js";import l from"./SeeSchedules-8cdc0464.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{c as m,w as h,j as o,o as u,a as s,b as t}from"./app-0a1a8757.js";import"./index-b6e1c569.js";import"./Header-b5a8126e.js";import"./Indications-5b3a3054.js";import"./DaySchedule-1db67aa2.js";import"./moment-fbc5633a.js";const _={props:["locations","schedules","fisio"],components:{FisioLayout:n,CreateSchedules:r,SeeSchedules:l},data(){return{showModal:!1}},methods:{openModal(){this.showModal=!0},closeModal(){this.showModal=!1},deleteItem(){this.showModal=!1}}},p={class:"row margin-center"},f={class:"row margin-center"};function S(w,M,e,x,C,F){const a=o("CreateSchedules"),c=o("SeeSchedules"),i=o("FisioLayout");return u(),m(i,{fisio:e.fisio},{default:h(()=>[s("div",p,[t(a,{locations:e.locations},null,8,["locations"])]),s("div",f,[t(c,{schedules:e.schedules},null,8,["schedules"])])]),_:1},8,["fisio"])}const j=d(_,[["render",S]]);export{j as default};