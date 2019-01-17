<template>
  <div id="mainContainer">
      <h2>{{slogan}}</h2>
      <div id="inputs">
        <select v-model="report.category">
            <option value="" disabled selected>Category Type</option>
            <option value="Accident" selected>Accident</option>
            <option value="Dangers">Dangers</option>
            <option value="Complaints">Complaints</option>
            <!-- <option value="Driver Life">Driver Life</option> -->
            <option value="Misc.">Misc.</option>
        </select>

        <select v-model="nonMiscFillIn" v-if="report.category === 'Accident'">
            <option value="" disabled selected>Type</option>
            <option v-for="items in types.accidents" :value="items">{{items}}</option>
        </select>

        <select v-model="nonMiscFillIn" v-else-if="report.category === 'Dangers'">
            <option value="" disabled selected>Type</option>
            <option v-for="items in types.dangers" :value="items">{{items}}</option>
        </select>

        <select v-model="nonMiscFillIn" v-else-if="report.category === 'Complaints'">
            <option value="" disabled selected>Type</option>
            <option v-for="items in types.dangers" :value="items">{{items}}</option>
        </select>


        <input type="text" v-model="miscFillIn" v-if="nonMiscFillIn === 'Misc.'" placeholder="title" maxlength="55">
        <div id="showLocation">
            <ul>
                <li>Longitude: {{report.long}}</li>
                <li>Latitude: {{report.lati}}</li>
            </ul>
            <my-button :description="'Relocate'" :runFunction="relocate" id="locateButton"> </my-button>
        </div>
        <select v-model="report.speed">
            <option value="" disabled selected>Select Speed</option>
            <option v-for="items in types.speed" :value="items">{{items}}</option>
        </select>
        <textarea type="text" v-model="report.description" placeholder="description(optional)" maxlength="280"> </textarea>
        <p v-if="locTrack === false" id="failmessage">{{failTrack}}</p>
        <my-button :description="reportButton" :runFunction="putReport" v-else></my-button>
      </div>
      <message-box v-if="submitted"> </message-box>
  </div>
</template>

<script>
import MessageBox from './message.vue';
export default {
  name: 'my-report',
  components: {
      'message-box': MessageBox
  },
  data () {
    return {
        slogan: 'Report A Event',
        nonMiscFillIn: '',
        miscFillIn: '',
        report: {
            title: this.nonMiscFillIn === 'Misc.' ? this.miscFillIn : this.nonMiscFillIn,
            date: this.getDate(),
            speed: '',
            category: '',
            description: '',
            long: 1.0,
            lati: 1.0
        },
        types: {
            accidents: [
                'Rear-End Collision',
                'Side-Impact Collision',
                'Sideswipe Collision',
                'Rollover',
                'Head On Collisions',
                'Single Car Accident',
                'Multiple Vechicle Pile-Up',
                'Misc.'
            ],
            dangers: [
                'Forest-Fires',
                'Pot-holes',
                'Uprooted Trees',
                'Misc.'
            ],
            complaints: [
                'Streetways & Sidewalks',
                'Pedestrians',
                'Freeways',
                'Bridges and Tunnels',
                'Misc.'
            ],
            speed: [
                '5<',
                '5-25',
                '25-45',
                '45-60',
                '60+'
            ]
        },
        locTrack: true,
        submitted: false,
        failTrack: 'Cannot report due to lack of Geolocation',
        reportButton: 'Submit'
    }
  },
  mounted () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCoords);
    } else {
        this.locTrack = false;
    }
  },
  methods: {
      getCoords: function(position) {
          this.report.long = position.coords.longitude;
          this.report.lati = position.coords.latitude;
          console.log(this.report.lati + " " + this.report.long);
      },
      relocate: function() {
        console.log('relocating');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoords);
        } else {
            this.locTrack = false;
        }
      },
      getDate: function() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        return str;
      },
      putReport: function() {
          console.log(this.report);
          this.$http.post('https://dnvvqevqxf.execute-api.us-west-2.amazonaws.com/dev/post',this.report);
          this.submitted = true;
      }
  },
}
</script>

<style scoped>

#mainContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
}
h2 {
    margin: 1rem 0;
    text-align: center;
}
#inputs {
    display: inline-flex;
    height: -webkit-fill-available;
    flex-direction: column;
    justify-content: space-evenly;
}
input, textarea, select {
    margin: 0 auto;
    width: 25rem;
    border: 3px solid black;
}
textarea,input {
    padding: 0.5rem;
    border-radius: 2rem;
}
input {
    height: 2rem;
    font-size: 1.5rem;
}
textarea {
    height: 7.89rem;
    font-size: 1rem;
    border-radius: 1rem;
    resize: none;
}
select {
    font-size: 1.5rem;
    border-radius: 2rem;
    padding: 0 0.5rem;
}

#showLocation {
    width: 25rem;
    height: 5rem;
    border: 3px solid black;
    border-radius: 2rem;
    display: inline-flex;
    justify-content: space-evenly;
    padding: 0.5rem;
    margin: 0 auto;
}

#locateButton {
    margin: auto;
}

/* @media screen and (min-width: 900px) {
    #mainContainer {
      flex-basis:40%;
    }
  } */

@media screen and (min-width: 600px) and (max-device-width: 900px) and (orientation:portrait) {
  h2 {
    font-size: 5rem;
    margin: 0;
  }

  input,textarea,select {
      width: 95%;
  }
  select {
      height: 5%;
  }
  textarea {
      height: 15%;
  }

  #showLocation {
    width: 95%;
    height: 10%;
    display: flex;
    flex-direction: column;
  }
  #showLocation > ul > li {
    text-align: center;
    list-style: none;
  }
}

@media screen and (min-width: 600px) and (max-device-width: 900px) and (orientation:landscape) {
    #inputs {
        flex-wrap: wrap;
    }
}

/* @media screen and (min-width: 383px) {
   h2 {
       font-size: 5rem;
   }
  }  */
</style>
