import g from"./EditProfile-980495e3.js";import{F as v}from"./FisioLayout-ac9db589.js";import A from"./SentInformation-933e8b00.js";import y from"./NotApproved-1e09d1d0.js";import k from"./ResumeData-01dcf881.js";import N from"./PendingAppointments-82c5f915.js";import x from"./PastAppointments-8b63e79d.js";import w from"./News-76b65784.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{e as a,b as c,w as D,j as s,o as e,a as o,c as n,f as r}from"./app-8988990b.js";import"./index-f3190292.js";import"./Photo-4a7d734f.js";import"./Loader-8034089e.js";/* empty css                                               */import"./AcademicInfo-96b1fac5.js";import"./Documentation-c6802fae.js";const b={props:["fisio","degrees","especialties","universities","resume_url","criminal_record_url","hasAcademic","hasDocumentation","pendingAppointments","pastAppointments"],data(){return{status:this.fisio.status}},components:{FisioterapeutasLayout:v,EditProfile:g,SentInformation:A,NotApproved:y,ResumeData:k,PendingAppointments:N,PastAppointments:x,News:w},methods:{logout(){this.$inertia.post("/logout")}}},F={class:"row",style:{"--bs-gutter-x":"0.75rem"}},I=o("hr",{class:"hr-orange"},null,-1),B={key:3,class:"row margin-center"},C={class:"row my-4 margin-center p-0"},E={key:1,class:"col-sm-6 md-col-12"},L=o("div",{class:"card mb-4 text-center"},[o("p",{class:"color-orange font-bold"},"No tienes citas pendientes")],-1),R=[L],S={key:3,class:"col-sm-6 md-col-12"},V=o("div",{class:"card mb-4 text-center"},[o("p",{class:"color-orange font-bold"},"Aún no haz realizado ninguna cita")],-1),j=[V],z={class:"row my-4 margin-center p-0"},q=o("h4",null,"Novedades y Consejos",-1);function G(H,J,t,K,i,M){const m=s("EditProfile"),p=s("SentInformation"),d=s("NotApproved"),_=s("ResumeData"),l=s("PendingAppointments"),u=s("PastAppointments"),f=s("News"),h=s("FisioterapeutasLayout");return e(),a("div",null,[c(h,{fisio:t.fisio},{default:D(()=>[o("div",F,[I,i.status==0?(e(),n(m,{key:0,fisio:t.fisio,degrees:t.degrees,especialties:t.especialties,universities:t.universities,hasAcademic:t.hasAcademic,hasDocumentation:t.hasDocumentation},null,8,["fisio","degrees","especialties","universities","hasAcademic","hasDocumentation"])):i.status==1?(e(),n(p,{key:1})):i.status==3?(e(),n(d,{key:2})):r("",!0),i.status==2?(e(),a("div",B,[c(_),o("div",C,[t.pendingAppointments.length!=0?(e(),n(l,{key:0,appointments:t.pendingAppointments},null,8,["appointments"])):(e(),a("div",E,R)),t.pastAppointments.length!=0?(e(),n(u,{key:2,appointments:t.pastAppointments},null,8,["appointments"])):(e(),a("div",S,j))]),o("div",z,[q,c(f)])])):r("",!0)])]),_:1},8,["fisio"])])}const ct=P(b,[["render",G]]);export{ct as default};