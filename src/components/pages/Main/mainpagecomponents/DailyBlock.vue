<template>
  <div class='blocks'>
      <div id="logo">
          <img src="../../../../assets/logo.png" alt="Neado Libido">
          <h2>Traffic Reporting Made Easy</h2>
      </div>
  </div>
</template>

<script>
import Button from './button.vue';
export default {
  name: 'daily-block',
  props: {
      direct: {
          type: String,
          required: true
      }
  },
  data () {
    return {
        date: this.GetDate(),
        options: ["traffic","weather","Incidents"]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
div {
    background: url('../../../../assets/h3.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#logo {
    display: flex;
    flex-direction: column;
}

h2 {
    text-align: center;
    font-size: 3rem;
    color: white;
}

#logo > img {
    margin: 2rem auto;
    height: height;
    width: 25%;
}
</style>