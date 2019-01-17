<template>
  <div id="message">
      <p>Thanks for Submitting!!!</p>
  </div>
</template>

<script>
export default {
  name: 'my-report',
  data () {

  },
  mounted () {
      setTimeout(function(){
          location.reload();
      },2000);
  }
}
</script>

<style scoped>
#message {
    display: inline-block;
    position: absolute;
    left: 5%;
    top: 15%;
    border: 3px solid black;
    padding: 1rem;
    border-radius: 2rem;
    background: rgb(247, 247, 247);
}
</style>
