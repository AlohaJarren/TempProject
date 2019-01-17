<template>
  <div id="exit" @click="toMap">
      X
  </div>
</template>

<script>
export default {
  name: 'cam-search',
  props: {
      whereTo: {
          type: String,
          required: true
      }
  },
  data () {
    return {
        slogan: 'Explore and Search Cameras',
    }
  },
  created() {
  },
  methods: {
      toMap: function() {
          this.$emit('backToSomething',this.whereTo);
      }
  }
}
</script>

<style scoped>
    div {
        position: absolute;
        right: 2%;
        top: 9%;
        font-size: 2rem;
    }

    @media screen and (min-width: 600px) and (max-device-width: 900px) and (orientation:portrait) {
        div {
            top: 12%;
            font-size: 4rem;
        }
    }
</style>
