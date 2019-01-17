<template>
  <div id="root">
    <my-header v-on:emittedEvent="changeComponent($event)"></my-header>
    <div id="scene">
      <component :is="currentShow"> </component>
    </div>
  </div>
</template>

<script>
import Header from './components/essentials/Header.vue';
import MainPage from './components/pages/Main/MainPage.vue';
import Forum from './components/pages/Forums/Forum.vue';
import CamMap from './components/pages/CamMap/Cameras.vue';
import Report from './components/pages/Report/Report.vue';
import AboutMe from './components/pages/AboutMe/About.vue';
export default {
  name: 'root',
  components: {
    'my-header': Header,
    'my-mainPage': MainPage,
    'my-forum': Forum,
    'my-camMap': CamMap,
    'my-report': Report,
    'my-aboutMe' : AboutMe
  },
  data () {
    return {
      currentShow: 'my-mainPage'
    }
  },
  methods: {
    changeComponent: function(event) {
      this.currentShow = event;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arimo');

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

*{
  font-family: "freightsans_regular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  transition: all 0.5s ease;
}

*:not(.vue-map){
  transition: none;
}

*:not(.vue-map-container) {
  transition: none;
}

html,body,#root {
  width: 100%;
  height: 100%;
  margin: 0;
  background: rgb(247, 247, 247);
}

#scene {
  width: 100%;
  height: 93%;
  overflow: hidden;
}
</style>
