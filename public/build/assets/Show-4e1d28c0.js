import{_ as c}from"./AppLayout-8913406b.js";import p from"./DeleteUserForm-65988f38.js";import l from"./LogoutOtherBrowserSessionsForm-8bd5a92b.js";import{S as s}from"./SectionBorder-a15c2fbd.js";import f from"./TwoFactorAuthenticationForm-6bd672bd.js";import u from"./UpdatePasswordForm-9e9c49cd.js";import _ from"./UpdateProfileInformationForm-a2aaf82c.js";import{c as d,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-7cf9b0eb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-2e82b870.js";import"./SectionTitle-e56bb56f.js";import"./DangerButton-6d7aaa90.js";import"./TextInput-9c7160f6.js";import"./SecondaryButton-91d0e033.js";import"./ActionMessage-bf6a4634.js";import"./PrimaryButton-8c2c1493.js";import"./InputLabel-1569bc50.js";import"./FormSection-84fe81bd.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};