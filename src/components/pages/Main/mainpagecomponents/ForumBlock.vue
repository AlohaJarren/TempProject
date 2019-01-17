<template>
  <div class='blocks'>

  </div>
</template>

<script>
import Button from './button.vue';
export default {
  name: 'forum-block',
  props: {
      direct: {
          type: String,
          required: true
      }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.blocks {
    background: rgb(99, 159, 236);
}
</style>