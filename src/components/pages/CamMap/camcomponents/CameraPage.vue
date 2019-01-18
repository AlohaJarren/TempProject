<template>
  <div id="cameraTab">
      <h2>{{slogan}}</h2>
      <input type="text" v-model="searchInput" placeholder="Camera Location" />
      <div id="cameraContainer">
          <div class="images" v-for="items in xmlLinks">
              <img :src="items.FullImageURL" alt="">
              <p>{{items.Name}}</p>
          </div>
      </div>
  </div>
</template>

<script>
const cameras = require('../../../../../cameras/aiea.json')
export default {
  name: 'cam-search',
  data () {
    return {
        slogan: 'Explore and Search Cameras',
        searchInput: '',
        xmlLinks: cameras.Camera
    }
  },
  computed: {
      camSearch: function() {
          return this.xmlLinks.filter(post => {
            return post.Name.toLowerCase().includes(this.searchInput.toLowerCase());
          });
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
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: -webkit-fill-available;
}

.images {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 1rem;
}

.images > p {
    width: 100%;
    position: absolute;
    text-align: center;
    margin: 0;
    padding: 5%;
    color: white;
    top: 0%;
    background: linear-gradient(90deg, rgba(241,216,250,1) 0%, rgba(250,213,255,1) 40%, rgba(93,228,255,1) 100%);
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
