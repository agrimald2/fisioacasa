import{F as c}from"./FisioLayout-94a6a239.js";import r from"./CreateLocation-45aa60db.js";import l from"./SeeLocations-afece90f.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{c as m,w as _,j as o,o as p,a as s,b as e}from"./app-0a1a8757.js";import"./index-b6e1c569.js";import"./Header-b5a8126e.js";import"./Indications-5b3a3054.js";const f={props:["locations","fisio"],components:{FisioLayout:c,CreateLocations:r,SeeLocations:l},data(){return{showModal:!1}},methods:{openModal(){this.showModal=!0},closeModal(){this.showModal=!1},deleteItem(){this.showModal=!1}}},h={class:"row"},u={class:"row"};function L(w,M,t,x,C,F){const a=o("CreateLocations"),i=o("SeeLocations"),n=o("FisioLayout");return p(),m(n,{fisio:t.fisio},{default:_(()=>[s("div",h,[e(a)]),s("div",u,[e(i,{locations:t.locations},null,8,["locations"])])]),_:1},8,["fisio"])}const $=d(f,[["render",L]]);export{$ as default};