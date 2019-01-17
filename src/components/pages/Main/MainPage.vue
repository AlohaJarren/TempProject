<template>
  <div id="mainHolder">
      <daily-block :direct="link[2]"> </daily-block>
      <camera-block :direct="link[0]"> </camera-block>
      <forum-block :direct="link[1]"> </forum-block>
  </div>
</template>

<script>
import DailyBlock from './mainpagecomponents/DailyBlock.vue';
import CameraBlock from './mainpagecomponents/Camerablock.vue';
import ForumBlock from './mainpagecomponents/ForumBlock.vue';
export default {
  name: 'main-page',
  components: {
      'daily-block':DailyBlock,
      'camera-block':CameraBlock,
      'forum-block':ForumBlock
  },
  data () {
    return {
        link: [
            'Camera',
            'Forums',
            'About'
        ]
    }
  }
}
</script>

<style scoped>
#mainHolder {
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
}
.blocks {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
.blocks > h2 {
    font-size: 3rem;
    text-align: center;
}
</style>
