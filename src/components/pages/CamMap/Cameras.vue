<template>
  <div id="mainHolder">
      <side-bar :items="actions" v-on:emittedResponse="changeActive($event)" :curActive="currentActive"></side-bar>
      <div id="changingParts">
          <component :is="currentActive"> </component>
      </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue';
import CameraPage from './camcomponents/CameraPage.vue';
import ReportPins from './camcomponents/ReportPins.vue';
export default {
  name: 'map-and-cameras',
  components: {
      'side-bar': SideBar,
      'camera-page': CameraPage,
      'pin-page': ReportPins
  },
  data () {
    return {
        currentActive: 'my-map',
        actions: [
            {name:'Cameras',function:'camera-page'},
            {name:'Report Pins',function:'pin-page'},
            {name:'All',function:'my-map'}
        ]
    }
  },
  methods: {
      changeActive: function(event){
          this.currentActive = event;
          console.log(this.currentActive);
      }
  }
}
</script>

<style scoped>
#changingParts {
    width: 80%;
    height: 100%;
}

#mainHolder {
    display: flex;
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 600px) and (max-device-width: 900px) and (orientation:portrait) {
    #mainHolder {
        flex-direction: column;
    }

    #changingParts {
        width: 100%;
        height: 95%;
    }
}
</style>
