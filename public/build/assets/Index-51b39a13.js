import{F as n}from"./FisioLayout-983beed1.js";import r from"./CreateSchedules-1c635cf8.js";import l from"./SeeSchedules-a30db086.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{c as m,w as h,j as o,o as u,a as s,b as t}from"./app-090398bb.js";import"./index-c01c9d02.js";import"./Header-b3c875a8.js";import"./Indications-38d3aadf.js";import"./DaySchedule-14d44c68.js";import"./moment-fbc5633a.js";const _={props:["locations","schedules","fisio"],components:{FisioLayout:n,CreateSchedules:r,SeeSchedules:l},data(){return{showModal:!1}},methods:{openModal(){this.showModal=!0},closeModal(){this.showModal=!1},deleteItem(){this.showModal=!1}}},p={class:"row margin-center"},f={class:"row margin-center"};function S(w,M,e,x,C,F){const a=o("CreateSchedules"),c=o("SeeSchedules"),i=o("FisioLayout");return u(),m(i,{fisio:e.fisio},{default:h(()=>[s("div",p,[t(a,{locations:e.locations},null,8,["locations"])]),s("div",f,[t(c,{schedules:e.schedules},null,8,["schedules"])])]),_:1},8,["fisio"])}const j=d(_,[["render",S]]);export{j as default};