import"./index-f3190292.js";import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";import{e as l,a as o,g as r,o as d}from"./app-8988990b.js";const i={data(){return{address:null,address_name:null,place:null,selectedLat:null,selectedLng:null,address_number:null}},methods:{initAutocomplete(){const s=this.$refs.autocompleteSearch,a=new google.maps.LatLngBounds(new google.maps.LatLng(-12.3553,-77.1908),new google.maps.LatLng(-11.7233,-76.6338)),n={componentRestrictions:{country:"PE"},bounds:a,strictBounds:!0,types:["geocode"]},t=new google.maps.places.Autocomplete(s,n);t.addListener("place_changed",()=>{const e=t.getPlace();this.place=e,this.selectedAddress=e.formatted_address,this.selectedLat=e.geometry.location.lat(),this.selectedLng=e.geometry.location.lng(),this.address_number=e.address_components[0].long_name})}},mounted(){this.initAutocomplete()}},p={class:"col-12 col-md-12"},m=o("label",{class:"location_label",for:"search-input"},[r("Dirección "),o("span",{class:"examples"},"(Agrega Número de Calle)")],-1),u={id:"search-input",type:"text",class:"form-control",placeholder:"Calle fisioacasa 123",ref:"autocompleteSearch"};function g(s,a,n,t,e,_){return d(),l("div",p,[m,o("input",u,null,512)])}const x=c(i,[["render",g]]);export{x as default};
