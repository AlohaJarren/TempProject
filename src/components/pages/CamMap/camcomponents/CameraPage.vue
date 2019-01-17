<template>
  <div id="cameraTab">
      <h2>{{slogan}}</h2>
      <input type="text" v-model="searchInput" @keydown.enter="camSearch()" placeholder="Camera Location" />
      <div id="cameraContainer">
          <p>Still in Progress!!!</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'cam-search',
  data () {
    return {
        slogan: 'Explore and Search Cameras',
        searchInput: '',
        xmlLinks: [
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Aiea/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Airport/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Ala%20Moana/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Beretania%20St/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Dillingham%20Blvd/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Downtown/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Ewa/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Farrington%20Hwy%20(Waipahu)/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Ft.%20Weaver%20Rd/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-1%20And%20H-201%20All/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-1%20East/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-1%20Ewa/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-1__Aiea%20to%20Airport/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-201/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-3/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kahekili/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kaimuki/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kakaako/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kalanianaole/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kalihi/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kamehameha%20Hwy%20(Aiea__Pearl%20City)/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kamehameha%20Hwy%20(Kaneohe)/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kaneohe/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kapahulu%20Ave/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kapiolani%20Blvd/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kapolei/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/King%20St/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Likelike%20Hwy/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Liliha/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Makiki/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Mililani%20Mauka/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Moanalua%20Fwy/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Moanalua%20Rd/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Nimitz%20(Airport)/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Nimitz%20(Kalihi)/xml",
            "http://goakamai.org/services/AlertService.svc/alerts/bundle?_=1544996347173",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Pali%20Hwy/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Pearl%20City/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Salt%20Lake/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/University/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Vineyard%20Blvd/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waialae/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waikele/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waikiki/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waipahu/xml",
            "http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waipio/xml",
        ]
    }
  },
  created() {
    //   this.$http.get('http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waipio/xml').then(function(data){
    //       console.log(data);
    //   })
    //   .catch(err => {
    //       console.log(err);
    //   }); || cant due to same origin policy
  },
  methods: {
      camSearch: function() {

      }
  }
}
</script>

<style scoped>

p {
    text-align: center;
}

h2 {
    text-align: center;
    font-size: 2rem;
}

#cameraTab {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(207,82,66,1) 20%, rgba(217,62,153,1) 50%, rgba(150,89,210,1) 80%, rgba(253,187,45,1) 100%);
    background-size: 400%;
    animation-name: Gradient;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

input {
    width: 50%;
    height: 1.5em;
    padding: 1rem;
    margin: 0 auto 1rem;
    border-radius: 3em;
    border: 1px solid black;
    font-size: 1.5rem;
    background: transparent;
}

#cameraContainer {
    height: -webkit-fill-available;
}

@media screen and (min-width: 600px) and (max-device-width: 900px) and (orientation:portrait) {
    h2 {
        font-size: 4rem;
    }
    input {
        width: 65%;
        height: 4rem;

    }
}
</style>
