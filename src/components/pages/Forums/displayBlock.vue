<template>
    <div id="overlay">
        <div id="contentContainer">
            <span id="startingStuff">
                <h2>{{title}}</h2>
                <h3>{{date}}</h3>
            </span>

        </div>
    </div>
</template>

<script>
export default {
  name: 'my-overlay',
  props: {
      title: {
          type: String,
          required: true
      },
      date: {
          type: String,
          required: true
      },
      category: {
          type: String,
          required: true
      },
      description: {
          type: String,
          required: true
      }
  },
  data () {
      return {
          
      }
  },
}
</script>

<style scoped>

</style>