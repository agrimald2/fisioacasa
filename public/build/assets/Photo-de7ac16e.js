import{l as m}from"./Loader-e6b279eb.js";import{e,a,t as p,C as h,c as d,f as n,o as t,j as _}from"./app-090398bb.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                               */const u={props:["photoUrl","fisioName"],data(){return{loading:!1,photoFile:null,photoDataUrl:this.photoUrl,photoTemp:null,fisioName:this.fisioName}},components:{Loader:m},methods:{onFileChange(s){const i=s.target.files[0];i&&(this.photoFile=i,this.photoTemp=URL.createObjectURL(i))},async save(){this.loading=!0;const s=new FormData;s.append("photo",this.photoFile),await this.$inertia.post("/fisio/photo",s,{headers:{"Content-Type":"multipart/form-data"}}),window.location.reload()}}},g={class:"card mb-4 mb-xl-0 border-orange"},y={class:"card-header",style:{"text-align":"center","padding-bottom":"0"}},b={class:"color-blue text-xl font-bold"},v={class:"card-body text-center image_container",style:{"padding-bottom":"0"}},k={key:0,for:"file-input"},x={key:0,class:"img-account-profile rounded-circle mb-2 avatar",src:"http://bootdey.com/img/Content/avatar/avatar1.png",alt:"Profile Photo",style:{height:"8.5rem !important",width:"8.5rem !important"}},P=["src"],T={key:1,for:"file-input"},w=["src"],C=["src"],F={key:2,class:"small font-italic mb-4 color-blue"},U={key:3,class:"small font-italic mb-4 color-orange"},N={key:5,class:"btn btn-primary bg-blue",type:"submit"};function D(s,i,S,B,o,r){const c=_("loader");return t(),e("div",g,[a("div",y,[a("h6",b,p(o.fisioName),1)]),a("div",v,[a("form",{onSubmit:i[1]||(i[1]=h((...l)=>r.save&&r.save(...l),["prevent"]))},[a("input",{type:"file",onChange:i[0]||(i[0]=(...l)=>r.onFileChange&&r.onFileChange(...l)),id:"file-input",style:{display:"none"}},null,32),o.photoDataUrl?(t(),e("label",T,[o.photoTemp?(t(),e("img",{key:1,class:"img-account-profile rounded-circle mb-2 avatar",src:o.photoTemp,alt:"Profile photo",style:{height:"8.5rem !important",width:"8.5rem !important"}},null,8,C)):(t(),e("img",{key:0,class:"img-account-profile rounded-circle mb-2 avatar",src:"/img/fisioPhotos/"+o.photoDataUrl,alt:"Profile photo",style:{height:"8.5rem !important",width:"8.5rem !important"}},null,8,w))])):(t(),e("label",k,[o.photoTemp?(t(),e("img",{key:1,class:"img-account-profile rounded-circle mb-2 avatar",src:o.photoTemp,alt:"Profile photo",style:{height:"8.5rem !important",width:"8.5rem !important"}},null,8,P)):(t(),e("img",x))])),o.loading?(t(),e("div",U," Foto Subida con éxito! ")):(t(),e("div",F," Selecciona una foto JPG o PNG ")),o.loading?(t(),d(c,{key:4})):n("",!0),o.photoTemp&&!o.loading?(t(),e("button",N," SUBIR ESTA FOTO ")):n("",!0)],32)])])}const E=f(u,[["render",D],["__scopeId","data-v-11273f02"]]);export{E as default};
