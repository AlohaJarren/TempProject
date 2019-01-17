<template>
    <div id="forum">
        <div id="optionBar">
            <h2>Filter</h2>
            <select>
                <option value="" disabled selected>Category</option>
                <option value="Accident">Accident</option>
                <option value="Dangers">Dangers</option>
                <option value="Complaints">Complaints</option>
                <option value="Driver Life">Driver Life</option>
                <option value="Misc.">Misc.</option>
            </select>
            
            <select>
                <option value="" disabled selected>Time</option>
                <option value="Accident">Today</option>
                <option value="Dangers">Last Week</option>
                <option value="Complaints">Last Month</option>
                <option value="Driver Life">Last Year</option>
                <option value="Misc.">Misc.</option>
            </select>

        </div>
        <div id="mainStuff">
            <ul id="resultContainer">
                <li v-for="items in GetItem">
                    <h2>{{items.category}}</h2>
                    <p class="date">{{items.date}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my-button',
  props: {

  },
  data () {
      return {
          GetItem: {}
      }
  },
  created () {
      this.$http.get('https://dnvvqevqxf.execute-api.us-west-2.amazonaws.com/dev/get').then(function(data){
          let tempData = JSON.parse(data.data.body); //parses it to Objects as its just string in an object
          this.GetItem = tempData.message.rows;
          console.log(tempData.message.rows)
      });
  }
}
</script>

<style scoped>
#forum {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
#optionBar, #mainStuff {
    display: inline-flex;
    width: 100%;
}
#optionBar{
    height: 8%;
    border: 1px solid blue;
}

#optionBar > h2 {
    text-align: center;
    font-size: 100%;
    margin: auto 2rem;
}

#optionBar > select {
    margin: auto 0em;
    width: 25%;
    height: 95%;
    font-size: 100%;
    background: transparent;
    border: 2.5px solid black;
    border-radius: 2rem;
}
#mainStuff {
    display: flex;
    width: 100%;
    flex-direction: column;
}
#resultContainer {
    display: inline-block;
    width: 100%;
    height: -webkit-fill-available;
    margin: 0 auto;
    border: 1px solid black;
    flex-direction: column;
    overflow-y: scroll;
    list-style: none;
}
li {
    width: 75%;
    height: 10rem;
    position: relative;
    border: 1px solid green;
    border-radius: 1.2rem;
    margin: 1rem auto;
    display: flex;
}

li > *:not(h2) {
    position: absolute;
}
li > h2 {
    font-size: 2rem;
    margin: auto 0 auto 2%;
}
.date {
    right: 2%;
}
</style>