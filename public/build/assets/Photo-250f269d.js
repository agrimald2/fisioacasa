import{e as i,a,t as n,D as c,f as p,o as s,z as m,A as h}from"./app-7cf9b0eb.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const _={props:["photoUrl","fisioName"],data(){return{photoFile:null,photoDataUrl:this.photoUrl,photoTemp:null,fisioName:this.fisioName}},methods:{onFileChange(t){const o=t.target.files[0];o&&(this.photoFile=o,this.photoTemp=URL.createObjectURL(o))},async save(){const t=new FormData;t.append("photo",this.photoFile),await this.$inertia.post("/fisio/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}}},f=t=>(m("data-v-b7ec6051"),t=t(),h(),t),u={class:"card mb-4 mb-xl-0 border-orange"},b={class:"card-header",style:{"text-align":"center"}},g={class:"color-blue text-xl font-bold"},y={class:"card-body text-center image_container"},v={key:0,for:"file-input"},P={key:0,class:"img-account-profile rounded-circle mb-2 avatar",src:"http://bootdey.com/img/Content/avatar/avatar1.png",alt:"Profile Photo",style:{height:"8.5rem !important",width:"8.5rem !important"}},T=["src"],k={key:1,for:"file-input"},x=["src"],w=["src"],F=f(()=>a("div",{class:"small font-italic mb-4 color-blue"}," Selecciona una foto JPG or PNG ",-1)),S={key:2,class:"btn btn-primary bg-blue",type:"submit"};function U(t,o,C,D,e,r){return s(),i("div",u,[a("div",b,[a("h6",g,n(e.fisioName),1)]),a("div",y,[a("form",{onSubmit:o[1]||(o[1]=c((...l)=>r.save&&r.save(...l),["prevent"]))},[a("input",{type:"file",onChange:o[0]||(o[0]=(...l)=>r.onFileChange&&r.onFileChange(...l)),id:"file-input",style:{display:"none"}},null,32),e.photoDataUrl?(s(),i("label",k,[e.photoTemp?(s(),i("img",{key:1,class:"img-account-profile rounded-circle mb-2 avatar",src:e.photoTemp,alt:"Profile photo",style:{height:"8.5rem !important",width:"8.5rem !important"}},null,8,w)):(s(),i("img",{key:0,class:"img-account-profile rounded-circle mb-2 avatar",src:"/img/fisioPhotos/"+e.photoDataUrl,alt:"Profile photo",style:{height:"8.5rem !important",width:"8.5rem !important"}},null,8,x))])):(s(),i("label",v,[e.photoTemp?(s(),i("img",{key:1,class:"img-account-profile rounded-circle mb-2 avatar",src:e.photoTemp,alt:"Profile photo",style:{height:"8.5rem !important",width:"8.5rem !important"}},null,8,T)):(s(),i("img",P))])),F,e.photoTemp?(s(),i("button",S," SUBIR ESTA FOTO ")):p("",!0)],32)])])}const B=d(_,[["render",U],["__scopeId","data-v-b7ec6051"]]);export{B as default};
