import g from"./EditProfile-3114d9ba.js";import{F as v}from"./FisioLayout-94a6a239.js";import A from"./SentInformation-c3f03355.js";import y from"./NotApproved-d8c3a850.js";import k from"./ResumeData-baeb537e.js";import N from"./PendingAppointments-f31daf83.js";import x from"./PastAppointments-456f8a81.js";import w from"./News-5b8a6b53.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{e as a,b as c,w as D,j as s,o as e,a as o,c as n,f as r}from"./app-0a1a8757.js";import"./index-b6e1c569.js";import"./Photo-ab06da60.js";import"./Loader-7dc79f18.js";/* empty css                                               */import"./AcademicInfo-6ef11402.js";import"./Documentation-ac90afc6.js";const b={props:["fisio","degrees","especialties","universities","resume_url","criminal_record_url","hasAcademic","hasDocumentation","pendingAppointments","pastAppointments"],data(){return{status:this.fisio.status}},components:{FisioterapeutasLayout:v,EditProfile:g,SentInformation:A,NotApproved:y,ResumeData:k,PendingAppointments:N,PastAppointments:x,News:w},methods:{logout(){this.$inertia.post("/logout")}}},F={class:"row",style:{"--bs-gutter-x":"0.75rem"}},I=o("hr",{class:"hr-orange"},null,-1),B={key:3,class:"row margin-center"},C={class:"row my-4 margin-center p-0"},E={key:1,class:"col-sm-6 md-col-12"},L=o("div",{class:"card mb-4 text-center"},[o("p",{class:"color-orange font-bold"},"No tienes citas pendientes")],-1),R=[L],S={key:3,class:"col-sm-6 md-col-12"},V=o("div",{class:"card mb-4 text-center"},[o("p",{class:"color-orange font-bold"},"Aún no haz realizado ninguna cita")],-1),j=[V],z={class:"row my-4 margin-center p-0"},q=o("h4",null,"Novedades y Consejos",-1);function G(H,J,t,K,i,M){const m=s("EditProfile"),p=s("SentInformation"),d=s("NotApproved"),_=s("ResumeData"),l=s("PendingAppointments"),u=s("PastAppointments"),f=s("News"),h=s("FisioterapeutasLayout");return e(),a("div",null,[c(h,{fisio:t.fisio},{default:D(()=>[o("div",F,[I,i.status==0?(e(),n(m,{key:0,fisio:t.fisio,degrees:t.degrees,especialties:t.especialties,universities:t.universities,hasAcademic:t.hasAcademic,hasDocumentation:t.hasDocumentation},null,8,["fisio","degrees","especialties","universities","hasAcademic","hasDocumentation"])):i.status==1?(e(),n(p,{key:1})):i.status==3?(e(),n(d,{key:2})):r("",!0),i.status==2?(e(),a("div",B,[c(_),o("div",C,[t.pendingAppointments.length!=0?(e(),n(l,{key:0,appointments:t.pendingAppointments},null,8,["appointments"])):(e(),a("div",E,R)),t.pastAppointments.length!=0?(e(),n(u,{key:2,appointments:t.pastAppointments},null,8,["appointments"])):(e(),a("div",S,j))]),o("div",z,[q,c(f)])])):r("",!0)])]),_:1},8,["fisio"])])}const ct=P(b,[["render",G]]);export{ct as default};