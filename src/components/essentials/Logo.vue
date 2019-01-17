<template>
    <div id="logoContainer" @click="backHome()">
        <h2>ProjecTraffic</h2>
        <img src="../../assets/logo.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'logo',
//   props: {
//       width: {
//           type: String,
//           required: true,
//       },
//       height: {
//           type: String,
//           required: true,
//       }
//   },
  methods: {
      backHome: function() {
          this.$emit('backToHome','my-mainPage');
      }
  }
}
</script>
<style scoped>
#logoContainer {
    display: inline-flex;
    width: auto;
    padding: 0 0.5rem;
    height: 100%;
}

#logoContainer:hover {
    cursor: pointer;
} 

h2 {
    font-size: 150%;
    color: white;
    margin: auto 0;
}
img {
    height: 90%;
    margin: auto;
    padding: 0 0.3rem;
}

@media screen and (min-width: 600px) and (max-device-width: 900px) and (orientation:portrait) {
    h2 {
        font-size: 175%;
    }
    img {
        display: none;
    }
}
</style>