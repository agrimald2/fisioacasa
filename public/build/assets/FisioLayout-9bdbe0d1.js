import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{o as s,e as n,a as e,t as v,n as h,p as g,j as x,B as f,k as p,F as _,h as k,c as S,w as T,g as j,f as z,b as $,r as C}from"./app-9be77887.js";import{a as L}from"./index-e9edfd19.js";const M={name:"Sidenav",props:["fisio"],data(){return{isMobile:window.innerWidth<=768}},mounted(){window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.isMobile=window.innerWidth<=768}}},w=a=>(g("data-v-b2db6eb0"),a=a(),x(),a),B={class:"sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3",id:"sidenav-main"},N={class:"sidenav-header"},F=w(()=>e("i",{class:"fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none","aria-hidden":"true",id:"iconSidenav"},null,-1)),P={class:"navbar-brand m-0 text-center",href:"#"},I={class:"row"},R={class:"col-4"},A=["src"],D={class:"col-8",style:{display:"flex","justify-content":"center","align-items":"center"}},E={class:"ms-1 font-weight-bold"},V=w(()=>e("hr",{class:"horizontal dark mt-0"},null,-1)),W=f('<ul class="navbar-nav" data-v-b2db6eb0><li class="nav-item" data-v-b2db6eb0><a class="nav-link" href="/fisio/dashboard" data-v-b2db6eb0><div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" data-v-b2db6eb0><i class="fas fa-tachometer-alt" data-v-b2db6eb0></i></div><span class="nav-link-text ms-1" data-v-b2db6eb0>Inicio</span></a></li><li class="nav-item" data-v-b2db6eb0><a class="nav-link" href="/fisio/appointments" data-v-b2db6eb0><div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" data-v-b2db6eb0><i class="fas fa-bars" data-v-b2db6eb0></i></div><span class="nav-link-text ms-1" data-v-b2db6eb0>Citas</span></a></li><li class="nav-item" data-v-b2db6eb0><a class="nav-link" href="/fisio/patients" data-v-b2db6eb0><div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" data-v-b2db6eb0><i class="fas fa-bars" data-v-b2db6eb0></i></div><span class="nav-link-text ms-1" data-v-b2db6eb0>Pacientes</span></a></li><li class="nav-item mt-3" data-v-b2db6eb0><h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6" data-v-b2db6eb0> Mi perfil </h6></li><li class="nav-item" data-v-b2db6eb0><a class="nav-link" href="/fisio/profile" data-v-b2db6eb0><div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" data-v-b2db6eb0><i class="fas fa-bars" data-v-b2db6eb0></i></div><span class="nav-link-text ms-1" data-v-b2db6eb0>Mi Perfil</span></a></li><li class="nav-item" data-v-b2db6eb0><a class="nav-link" href="/fisio/price" data-v-b2db6eb0><div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" data-v-b2db6eb0><i class="fas fa-bars" data-v-b2db6eb0></i></div><span class="nav-link-text ms-1" data-v-b2db6eb0>Precios</span></a></li><li class="nav-item" data-v-b2db6eb0><a class="nav-link" href="/fisio/location" data-v-b2db6eb0><div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" data-v-b2db6eb0><i class="fas fa-bars" data-v-b2db6eb0></i></div><span class="nav-link-text ms-1" data-v-b2db6eb0>Ubicaciones</span></a></li><li class="nav-item" data-v-b2db6eb0><a class="nav-link" href="/fisio/schedules" data-v-b2db6eb0><div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center" data-v-b2db6eb0><i class="fas fa-bars" data-v-b2db6eb0></i></div><span class="nav-link-text ms-1" data-v-b2db6eb0>Horarios</span></a></li></ul>',1),O=[W],H=w(()=>e("div",{class:"sidenav-footer mx-3 mt-3 pt-3"},null,-1));function U(a,t,l,m,i,o){return s(),n("aside",B,[e("div",N,[F,e("a",P,[e("div",I,[e("div",R,[e("img",{src:"/img/fisioPhotos/"+l.fisio.profile_photo_path,alt:""},null,8,A)]),e("div",D,[e("span",E,v(l.fisio.name),1)])])])]),V,e("div",{class:h([{collapse:i.isMobile},"navbar-collapse w-auto"]),id:"sidenav-collapse-main",style:{height:"auto"}},O,2),H])}const Y=u(M,[["render",U],["__scopeId","data-v-b2db6eb0"]]),q={props:["fisio"],name:"Sidenav",data(){return{breadCrumbList:[{name:"Dashboard"}],breadCrumbTotal:1,isMobile:window.innerWidth<=768}},mounted(){window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.isMobile=window.innerWidth<=768},logout(){L.post("/fisio/logout").then(a=>{window.location.href="/fisio/dashboard"}).catch(a=>{window.location.href="/fisio/dashboard",console.error(a)})}}},G={class:"navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl",id:"navbarBlur","navbar-scroll":"true"},J={class:"container-fluid py-1 px-3"},K={"aria-label":"breadcrumb"},Q={class:"breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5"},X=e("li",{class:"breadcrumb-item text-sm"},[e("a",{class:"opacity-5 text-dark",href:"#"},"Fisioterapeuta")],-1),Z={key:1},ee={key:0,class:"font-weight-bolder mb-0"},ae={class:"ms-md-auto pe-md-3 d-flex align-items-center"},te={class:"input-group"},se=["placeholder"],ie={class:"navbar-nav justify-content-end"},oe=f('<li class="nav-item d-xl-none ps-3 d-flex align-items-center"><a href="#" class="nav-link text-body p-0" id="iconNavbarSidenav"><div class="sidenav-toggler-inner"><i class="sidenav-toggler-line"></i><i class="sidenav-toggler-line"></i><i class="sidenav-toggler-line"></i></div></a></li><li class="nav-item px-3 d-flex align-items-center"><a href="#" class="nav-link text-body p-0"><i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i></a></li><li class="nav-item d-none dropdown px-3 d-flex align-items-center"><a href="#" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-bell cursor-pointer"></i></a><ul class="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton"><li class="mb-2"><a class="dropdown-item border-radius-md" href="javascript:;"><div class="d-flex py-1"><div class="my-auto"><img src="#" class="avatar avatar-sm me-3"></div><div class="d-flex flex-column justify-content-center"><h6 class="text-sm font-weight-normal mb-1"><span class="font-weight-bold">New message</span> from Laur </h6><p class="text-xs text-secondary mb-0"><i class="fa fa-clock me-1"></i> 13 minutes ago </p></div></div></a></li><li class="mb-2"><a class="dropdown-item border-radius-md" href="javascript:;"><div class="d-flex py-1"><div class="my-auto"><img src="#" class="avatar avatar-sm bg-gradient-dark me-3"></div><div class="d-flex flex-column justify-content-center"><h6 class="text-sm font-weight-normal mb-1"><span class="font-weight-bold">New album</span> by Travis Scott </h6><p class="text-xs text-secondary mb-0"><i class="fa fa-clock me-1"></i> 1 day </p></div></div></a></li></ul></li>',3),ne={class:"nav-item d-flex align-items-center"},de=e("i",{class:"fas fa-sign-out-alt me-sm-1"},null,-1),le=e("span",{class:"d-sm-inline d-none"},"Salir",-1),re=[de,le];function ce(a,t,l,m,i,o){const c=p("router-link");return s(),n("nav",G,[e("div",J,[e("nav",K,[e("ol",Q,[X,(s(!0),n(_,null,k(i.breadCrumbList,(d,r)=>(s(),n("li",{key:r,class:h(["breadcrumb-item text-sm",{"text-dark active":r+1==i.breadCrumbTotal}])},[r+1!=i.breadCrumbTotal?(s(),S(c,{key:0,class:"opacity-5 text-dark",to:{name:d.link}},{default:T(()=>[j(v(d.name),1)]),_:2},1032,["to"])):(s(),n("span",Z,v(d.name),1))],2))),128))]),(s(!0),n(_,null,k(i.breadCrumbList,(d,r)=>(s(),n("div",{key:r},[r+1==i.breadCrumbTotal?(s(),n("h6",ee,v(d.name??"N/A"),1)):z("",!0)]))),128))]),e("div",{class:h([{collapse:i.isMobile},"navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"]),id:"navbar"},[e("div",ae,[e("div",te,[e("input",{type:"text",class:"form-control",disabled:"",placeholder:l.fisio.surname},null,8,se)])]),e("ul",ie,[oe,e("li",ne,[e("button",{onClick:t[0]||(t[0]=(...d)=>o.logout&&o.logout(...d)),class:"nav-link text-body font-weight-bold px-0"},re)])])],2)])])}const be=u(q,[["render",ce]]);const ve={setup(){},methods:{goToPrice(){window.location.href="/fisio/price"},goToDashboard(){window.location.href="/fisio/dashboard"},goToSchedules(){window.location.href="/fisio/schedules"},goToLocations(){window.location.href="/fisio/location"},goToProfile(){window.location.href="/fisio/profile"},goToAppointments(){window.location.href="/fisio/appointments"}}},b=a=>(g("data-v-cedf5231"),a=a(),x(),a),fe={style:{border:"1px solid #ed6c14 !important",width:"98%"},class:"fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-2 left-1/2 dark:bg-gray-700 dark:border-gray-600"},ue={class:"grid h-full max-w-lg grid-cols-5 mx-auto"},me=b(()=>e("i",{class:"fa-solid fa-hand-holding-dollar color-blue text-xl"},null,-1)),he=[me],pe=b(()=>e("i",{class:"fa-solid fa-calendar color-blue text-xl"},null,-1)),_e=[pe],ge=f('<a class="py-2" href="/fisio/dashboard" data-v-cedf5231><div class="flex items-center justify-center" data-v-cedf5231><button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-orange color-white rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-100 focus:outline-none dark:focus:ring-blue-800" data-v-cedf5231><svg class="h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-cedf5231><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" data-v-cedf5231></path></svg></button></div></a>',1),xe=b(()=>e("i",{class:"fa-solid fa-location-dot color-blue text-xl"},null,-1)),we=b(()=>e("span",{class:"sr-only"},"Settings",-1)),ye=[xe,we],ke=b(()=>e("svg",{class:"h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",fill:"#00699e",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"})],-1)),$e=b(()=>e("span",{class:"sr-only"},"Profile",-1)),je=[ke,$e];function ze(a,t,l,m,i,o){return s(),n("div",fe,[e("div",ue,[e("button",{onClick:t[0]||(t[0]=c=>o.goToPrice()),"data-tooltip-target":"tooltip-home",type:"button",class:"inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"},he),e("button",{onClick:t[1]||(t[1]=c=>o.goToSchedules()),"data-tooltip-target":"tooltip-wallet",type:"button",class:"inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"},_e),ge,e("button",{onClick:t[2]||(t[2]=c=>o.goToLocations()),"data-tooltip-target":"tooltip-settings",type:"button",class:"inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"},ye),e("button",{onClick:t[3]||(t[3]=c=>o.goToProfile()),"data-tooltip-target":"tooltip-profile",type:"button",class:"inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"},je)])])}const Se=u(ve,[["render",ze],["__scopeId","data-v-cedf5231"]]);const Te={props:["fisio"],name:"FisioterapeutasLayout",data(){return{isMobile:window.innerWidth<=768}},mounted(){window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},components:{Sidenav:Y,Navbar:be,BottomMenu:Se},methods:{handleResize(){this.isMobile=window.innerWidth<=768},goToAppointments(){window.location.href="/fisio/appointments"}}},y=a=>(g("data-v-edb627a5"),a=a(),x(),a),Ce=y(()=>e("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",rel:"stylesheet"},null,-1)),Le={class:"main-content mt-1 border-radius-lg"},Me={class:"container-fluid py-1"},Be={class:"row"},Ne={class:"footer pt-3"},Fe={class:"container-fluid"},Pe={class:"row align-items-center justify-content-lg-between"},Ie={class:"col-lg-6 mb-lg-0 mb-4"},Re={class:"copyright text-center text-sm text-muted text-lg-left"},Ae=y(()=>e("a",{href:"https://e-pask.com",class:"font-weight-bold",target:"_blank"},"e-Pask",-1)),De=f('<div class="col-lg-6" data-v-edb627a5><ul class="nav nav-footer justify-content-center justify-content-lg-end" data-v-edb627a5><li class="nav-item" data-v-edb627a5><a href="#" class="nav-link text-muted" target="_blank" data-v-edb627a5>Fisioacasa.pe</a></li><li class="nav-item" data-v-edb627a5><a href="#" class="nav-link text-muted" target="_blank" data-v-edb627a5>¿Cómo funciona?</a></li><li class="nav-item" data-v-edb627a5><a href="#" class="nav-link text-muted" target="_blank" data-v-edb627a5>T&amp;C</a></li><li class="nav-item" data-v-edb627a5><a href="#" class="nav-link pe-0 text-muted" target="_blank" data-v-edb627a5>CONTACTO</a></li></ul></div>',1),Ee=f('<div class="bottomMenu row" data-v-edb627a5><div class="col-4 row" data-v-edb627a5><div class="col-6" data-v-edb627a5><i class="fa-solid fa-hand-holding-dollar color-blue text-xl" data-v-edb627a5></i></div><div class="col-6" data-v-edb627a5><i class="fa-solid fa-calendar color-blue text-xl" data-v-edb627a5></i></div></div><div class="col-4 row" style="justify-content:center;" data-v-edb627a5><a class="" href="/fisio/dashboard" data-v-edb627a5><div class="flex items-center justify-center" data-v-edb627a5><button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-orange color-white rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-100 focus:outline-none dark:focus:ring-blue-800" data-v-edb627a5><svg class="h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-edb627a5><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" data-v-edb627a5></path></svg></button></div></a></div><div class="col-4 row" data-v-edb627a5><div class="col-6" data-v-edb627a5><i class="fa-solid fa-location-dot color-blue text-xl" data-v-edb627a5></i></div><div class="col-6" data-v-edb627a5><i class="fa-solid fa-circle-user color-blue text-xl" data-v-edb627a5></i></div></div></div>',1),Ve=y(()=>e("img",{src:"/img/blue-bg-logo.png",alt:"",class:"margin-center",style:{width:"80%"}},null,-1)),We=[Ve];function Oe(a,t,l,m,i,o){const c=p("Sidenav"),d=p("Navbar");return s(),n(_,null,[Ce,$(c,{fisio:l.fisio},null,8,["fisio"]),e("main",Le,[$(d,{fisio:l.fisio},null,8,["fisio"]),e("div",Me,[e("div",Be,[C(a.$slots,"default",{},void 0,!0)]),e("footer",Ne,[e("div",Fe,[e("div",Pe,[e("div",Ie,[e("div",Re,[j(" © "+v(new Date().getFullYear())+" made by ",1),Ae])]),De])])])])]),Ee,i.isMobile?(s(),n("button",{key:0,onClick:t[0]||(t[0]=(...r)=>o.goToAppointments&&o.goToAppointments(...r)),style:{position:"fixed",right:"5vw",top:"1vh","font-size":"2rem"}},We)):z("",!0)],64)}const qe=u(Te,[["render",Oe],["__scopeId","data-v-edb627a5"]]);export{qe as F};