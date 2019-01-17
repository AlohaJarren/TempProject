<template>
  <div class='blocks'>
      <h2>View the Entirity of Hawaii</h2>
      <div id="holdContainers">
          <div id="map"> 
              <my-map> </my-map>
          </div>
        <div id="camera"> </div>
      </div>
      <my-button :runFunction="function(){}" :description="something"> </my-button>
  </div>
</template>

<script>
export default {
  name: 'camera-block',
  props: {
      direct: {
          type: String,
          required: true
      }
  },
  data () {
    return {
        something: 'Go to Cameras & Map'
    }
  }
}
</script>

<style scoped>
.blocks {
    background: rgb(221, 95, 95);
}

#holdContainers {
    display: inline-flex;
    width: 80%;
    justify-content: space-between;
    margin: 0 auto 3%;
}

#map,#camera {
    width: 30rem;
    height: 18rem;
    border: 3px solid black;
    border-radius: 2rem;
    overflow: hidden;
}

#camera {
    background-image: url('http://cctv.cdn.goakamai.org//SnapShot/320x240/TL-0037.jpg?icx=1547663897423');
    background-size: cover;
    background-position: center;
}

</style>