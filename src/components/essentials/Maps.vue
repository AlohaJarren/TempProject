<template>
    <gmap-map
      :center="center"
      :zoom="9.5"
    >
      <my-traffic></my-traffic>
      <gmap-marker
        :key="index"
        v-for="(items, index) in markers"
        :position="{lat:  parseFloat(items.lati), lng: parseFloat(items.long)}"
        @click="center={lat: parseFloat(items.lati), lng: parseFloat(items.long)}"
      ></gmap-marker>
    </gmap-map>
</template>

<script>
import Traffic from '../../map/TrafficLayer.js'
export default {
  name: "GoogleMap",
  components: {
    'my-traffic': Traffic
  },
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 21.4389, lng: -158.0001 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  created() {
    this.$http.get('https://dnvvqevqxf.execute-api.us-west-2.amazonaws.com/dev/get').then(function(data) {
      let tempData = JSON.parse(data.data.body); //parses it to Objects as its just string in an object
      this.markers = tempData.message.rows;
      console.log(typeof tempData.message.rows[0].long)
    });
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
<style scoped>
* {
    width: 100%;
    height: 100%;
    margin: 0;
}
</style>
