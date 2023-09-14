import{l as m}from"./Loader-e6b279eb.js";import{e as n,a as e,g as p,C as h,c as u,f as d,o as a,p as f,i as b,j as g}from"./app-090398bb.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                               */const y={props:["completed"],setup(){},components:{Loader:m},data(){return{loading:!1,resume:null,criminalRecord:null,police_record:null,profesional_hability:null}},methods:{onResumeChange(o){this.resume=o.target.files[0]},onCriminalRecordChange(o){this.criminalRecord=o.target.files[0]},onPoliceRecordChange(o){this.police_record=o.target.files[0]},onProfesionalHabilityChange(o){this.profesional_hability=o.target.files[0]},async submit(){this.loading=!0;const o=new FormData;o.append("resume",this.resume),o.append("criminal_record",this.criminalRecord),o.append("police_record",this.police_record),o.append("profesional_hability",this.profesional_hability),await this.$inertia.post("/fisio/addDocumentationData",o)}},computed:{enableButton(){if(this.resume&&this.criminalRecord&&this.police_record&&this.profesional_hability)return this.resume!==""&&this.criminalRecord!==""&&this.police_record!==""&&this.profesional_hability!==""}}},l=o=>(f("data-v-60f0799f"),o=o(),b(),o),E={class:"row center no-pd"},R={class:"text-center color-blue"},v={key:0,style:{color:"lightgreen","font-size":"1.5rem"},class:"fa-solid fa-check-double"},D={key:1,style:{color:"red","font-size":"1.5rem"},class:"fa-solid fa-circle-exclamation"},I={class:"row center no-pd no-row"},A={class:"row register_container center no-pd margin-center bg-orange"},S={class:"row right_side margin-center",style:{padding:"10px 0"}},w={class:"col-12 mt-2 doc_input_container"},N={class:"mb-3"},P=l(()=>e("label",{for:"resume_path",class:"form-label"},[e("h6",{for:"resume_path",class:"docs_label"},"CURRICULUM VITAE")],-1)),T={class:"col-12 mt-2 doc_input_container"},k={class:"mb-3"},x=l(()=>e("label",{for:"criminal_record_path",class:"form-label"},[e("h6",{for:"criminal_record_path",class:"docs_label"}," CERTIFICADO DE ANTECEDENTES PENALES ")],-1)),B={class:"col-12 mt-2 doc_input_container"},L={class:"mb-3"},O=l(()=>e("label",{for:"police_record_path",class:"form-label"},[e("h6",{for:"police_record_path",class:"docs_label"}," CERTIFICADO DE ANTECEDENTES POLICIALES ")],-1)),F={class:"col-12 mt-2 doc_input_container"},H={class:"mb-3"},V=l(()=>e("label",{for:"profesional_hability_path",class:"form-label"},[e("h6",{for:"profesional_hability_path",class:"docs_label"}," CERTIFICADO DE HABILIDAD PROFESIONAL ")],-1)),U={key:1,type:"submit",class:"btn btn-blue"};function z(o,i,r,M,c,t){const _=g("loader");return a(),n("div",E,[e("h5",R,[p(" Documentación "),e("span",null,[r.completed?(a(),n("i",v)):(a(),n("i",D))])]),e("div",I,[e("div",A,[e("div",S,[e("form",{onSubmit:i[4]||(i[4]=h((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",w,[e("div",N,[P,e("input",{class:"form-control inputs",type:"file",id:"resume_path",name:"resume",onChange:i[0]||(i[0]=(...s)=>t.onResumeChange&&t.onResumeChange(...s))},null,32)])]),e("div",T,[e("div",k,[x,e("input",{class:"form-control inputs",type:"file",id:"criminal_record_path",name:"criminal_record",onChange:i[1]||(i[1]=(...s)=>t.onCriminalRecordChange&&t.onCriminalRecordChange(...s))},null,32)])]),e("div",B,[e("div",L,[O,e("input",{class:"form-control inputs",type:"file",id:"police_record_path",name:"police_record",onChange:i[2]||(i[2]=(...s)=>t.onPoliceRecordChange&&t.onPoliceRecordChange(...s))},null,32)])]),e("div",F,[e("div",H,[V,e("input",{class:"form-control inputs",type:"file",id:"profesional_hability_path",name:"profesional_hability",onChange:i[3]||(i[3]=(...s)=>t.onProfesionalHabilityChange&&t.onProfesionalHabilityChange(...s))},null,32)])]),c.loading&&!r.completed?(a(),u(_,{key:0})):d("",!0),t.enableButton&&!c.loading?(a(),n("button",U," Subir Documentos ")):d("",!0)],32)])])])])}const K=C(y,[["render",z],["__scopeId","data-v-60f0799f"]]);export{K as default};