<template>
  <div id="sideBar">
      <ul>
          <li v-for="item in items"> 
              <p @click="changeActive(item.function)">{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  props: {
      items: {
          type: Array,
          required: true
      },
      curActive: {
          type: String,
          required: true
      }
  },
  data () {
    return {

    }
  },
  methods: {
      changeActive: function(data) {
          console.log(`sending ${data}`)
          this.$emit('emittedResponse',data);
      }
  }
}
</script>

<style scoped>
#sideBar {
    width: 20%;
}
ul {
    padding: 0;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
li {
    display: table;
    margin: 1rem auto;
    width: 75%;
    text-align: center;
    border: 3px solid black;
    border-radius: 2rem;
    transition: all 0.5s;
}
li:hover {
    background: black;
    color: white;
    cursor: pointer;
}

@media screen and (min-width: 600px) and (max-device-width: 900px) and (orientation:portrait) {

    #sideBar {
        display: flex;
        height: 5%;
        width: 100%;
    }

    #sideBar > ul {
        flex-direction: row;
        width: 100%
    }

    #sideBar > ul > li {
        width: 25%;
    }
}
</style>
