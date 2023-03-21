import{F as f}from"./FisioLayout-4860051c.js";import{H as y}from"./Header-3d20db7c.js";import h from"./ValidateAppointment-67ef957a.js";import v from"./AppointmentInfo-241bfc69.js";import H from"./Evaluation-37e9860b.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{c as l,w as A,j as o,o as i,b as n,e as a,a as r,f as s}from"./app-393a5267.js";import"./index-9eef7ace.js";import"./moment-fbc5633a.js";const b={name:"Schedules",props:["fisio","appointment","clinicalHistories"],components:{FisioterapeutasLayout:f,Header:y,Validate:h,AppointmentInfo:v,Evaluation:H},data(){return{title:"DETALLES DE LA CITA",subtitle:"Encontrarás toda la información referente",mainIndication:"",displayForm:!1}},methods:{showHistoryClinicForm(){this.displayForm=!0}}},k={key:0,class:"row margin-center"},E={key:0,class:"col-12 col-md-4"},V={class:"card mb-4 mb-xl-0 orange-border"},x={class:"card-body text-center"},L={key:1,class:"col-12 col-md-8"},w={key:1,class:"row margin-center"};function C(I,g,t,B,e,m){const p=o("Header"),d=o("Validate"),c=o("AppointmentInfo"),_=o("Evaluation"),u=o("FisioterapeutasLayout");return i(),l(u,{fisio:t.fisio},{default:A(()=>[n(p,{title:e.title,subtitle:e.subtitle},null,8,["title","subtitle"]),t.appointment.status==0?(i(),a("div",k,[e.displayForm?s("",!0):(i(),a("div",E,[r("div",V,[r("div",x,[n(d,{onValidateAppointment:m.showHistoryClinicForm,appointment:t.appointment},null,8,["onValidateAppointment","appointment"])])])])),e.displayForm?s("",!0):(i(),a("div",L,[n(c,{appointment:t.appointment,clinicalHistories:t.clinicalHistories},null,8,["appointment","clinicalHistories"])])),e.displayForm?(i(),l(_,{key:2,fisio_id:t.fisio.id,appointment_id:t.appointment.id,patient_id:t.appointment.patient_id},null,8,["fisio_id","appointment_id","patient_id"])):s("",!0)])):(i(),a("div",w,[n(c,{appointment:t.appointment,clinicalHistories:t.clinicalHistories},null,8,["appointment","clinicalHistories"])]))]),_:1},8,["fisio"])}const K=F(b,[["render",C],["__scopeId","data-v-2f62d723"]]);export{K as default};
