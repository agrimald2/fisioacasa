import{e as a,a as e,g as c,D as d,f as _,o as n,z as h,A as m}from"./app-7cf9b0eb.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const u={props:["completed"],setup(){},data(){return{resume:null,criminalRecord:null,police_record:null,profesional_hability:null}},methods:{onResumeChange(o){this.resume=o.target.files[0]},onCriminalRecordChange(o){this.criminalRecord=o.target.files[0]},onPoliceRecordChange(o){this.police_record=o.target.files[0]},onProfesionalHabilityChange(o){this.profesional_hability=o.target.files[0]},async submit(){const o=new FormData;o.append("resume",this.resume),o.append("criminal_record",this.criminalRecord),o.append("police_record",this.police_record),o.append("profesional_hability",this.profesional_hability),await this.$inertia.post("/fisio/addDocumentationData",o)}},computed:{enableButton(){if(this.resume&&this.criminalRecord&&this.police_record&&this.profesional_hability)return this.resume!==""&&this.criminalRecord!==""&&this.police_record!==""&&this.profesional_hability!==""}}},l=o=>(h("data-v-fe0bbb70"),o=o(),m(),o),f={class:"row center no-pd"},b={class:"text-center color-blue"},C={key:0,style:{color:"lightgreen","font-size":"1.5rem"},class:"fa-solid fa-check-double"},g={key:1,style:{color:"red","font-size":"1.5rem"},class:"fa-solid fa-circle-exclamation"},y={class:"row center no-pd no-row"},E={class:"row register_container center no-pd margin-center bg-orange"},R={class:"row right_side"},D={class:"col-12 mt-2 doc_input_container"},v={class:"mb-3"},I=l(()=>e("label",{for:"resume_path",class:"form-label"},[e("h6",{for:"resume_path",class:"docs_label"},"CURRICULUM VITAE")],-1)),A={class:"col-12 mt-2 doc_input_container"},S={class:"mb-3"},w=l(()=>e("label",{for:"criminal_record_path",class:"form-label"},[e("h6",{for:"criminal_record_path",class:"docs_label"}," CERTIFICADO DE ANTECEDENTES PENALES ")],-1)),N={class:"col-12 mt-2 doc_input_container"},P={class:"mb-3"},T=l(()=>e("label",{for:"police_record_path",class:"form-label"},[e("h6",{for:"police_record_path",class:"docs_label"}," CERTIFICADO DE ANTECEDENTES POLICIALES ")],-1)),x={class:"col-12 mt-2 doc_input_container"},k={class:"mb-3"},B=l(()=>e("label",{for:"profesional_hability_path",class:"form-label"},[e("h6",{for:"profesional_hability_path",class:"docs_label"}," CERTIFICADO DE HABILIDAD PROFESIONAL ")],-1)),L={key:0,type:"submit",class:"btn btn-blue"};function O(o,s,r,F,H,t){return n(),a("div",f,[e("h5",b,[c(" Documentación "),e("span",null,[r.completed?(n(),a("i",C)):(n(),a("i",g))])]),e("div",y,[e("div",E,[e("div",R,[e("form",{onSubmit:s[4]||(s[4]=d((...i)=>t.submit&&t.submit(...i),["prevent"]))},[e("div",D,[e("div",v,[I,e("input",{class:"form-control inputs",type:"file",id:"resume_path",name:"resume",onChange:s[0]||(s[0]=(...i)=>t.onResumeChange&&t.onResumeChange(...i))},null,32)])]),e("div",A,[e("div",S,[w,e("input",{class:"form-control inputs",type:"file",id:"criminal_record_path",name:"criminal_record",onChange:s[1]||(s[1]=(...i)=>t.onCriminalRecordChange&&t.onCriminalRecordChange(...i))},null,32)])]),e("div",N,[e("div",P,[T,e("input",{class:"form-control inputs",type:"file",id:"police_record_path",name:"police_record",onChange:s[2]||(s[2]=(...i)=>t.onPoliceRecordChange&&t.onPoliceRecordChange(...i))},null,32)])]),e("div",x,[e("div",k,[B,e("input",{class:"form-control inputs",type:"file",id:"profesional_hability_path",name:"profesional_hability",onChange:s[3]||(s[3]=(...i)=>t.onProfesionalHabilityChange&&t.onProfesionalHabilityChange(...i))},null,32)])]),t.enableButton?(n(),a("button",L," Subir Documentos ")):_("",!0)],32)])])])])}const U=p(u,[["render",O],["__scopeId","data-v-fe0bbb70"]]);export{U as default};
