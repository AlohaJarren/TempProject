<template>
  <div id="my-header">
      <my-logo v-on:backToHome="ChangePage($event)"> </my-logo> <!-- Could have used an event bus -->
      <ul>
          <li v-for="items in contents">
              <h3 @click="ChangePage(items.change)">{{items.name}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      contents: [
          {name:'Map & Cameras',change:'my-camMap'},
          {name: 'Forums',change:'my-forum'},
        //   {name: 'Near You',change:'my-near'},
          {name: 'About Me',change:'my-aboutMe'},
          {name: 'Report',change:'my-report'}
      ]
    }
  },
  methods: {
      ChangePage: function(page) {
          this.$emit('emittedEvent',page);
      }
  }
}
</script>

<style scoped>
#my-header {
    display: inline-flex;
    width: 100%;
    height: 14%;
    z-index: 2;
    background-color: #508585;
}
ul {
    display: flex;
    margin: 0;
    justify-content: space-between;
    padding: 0 2%;
    width: 96%;
}
li {
    list-style-type: none;
    color: white;
    text-align: center;
    display: inline-grid;
  }
  li:hover {
      cursor: pointer;
      opacity: 0.5;
  }
  li > * {
    margin: auto 0;
  }
  h3 {
      margin: auto;
  }
  

</style>
