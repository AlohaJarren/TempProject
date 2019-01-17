import Vue from 'vue';
import App from './App.vue';
import VueResource from "vue-resource";
import * as VueGoogleMaps from "vue2-google-maps";

//global components
import Button from './components/pages/Main/mainpagecomponents/button.vue';
import Map from './components/essentials/Maps.vue';
import Logo from './components/essentials/Logo.vue';
import ExitButton from './components/pages/CamMap/camcomponents/exit.vue';

Vue.use(VueResource);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCCLCh0dX81ASRsu9OcFkWI__iMxcgaESg",
    libraries: "places" // necessary for places input
  }
});

Vue.component('my-logo', Logo);
Vue.component('my-button', Button);
Vue.component('my-map', Map);
Vue.component('exit-button',ExitButton);

new Vue({
  el: '#app',
  render: h => h(App)
})
