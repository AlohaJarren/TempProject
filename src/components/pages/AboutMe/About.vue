<template>
  <div id="AboutMe">
      <img :src="imgSrc" :alt="imgAlt" id="me">
      <h1>{{name}}</h1>
      <h2>{{slogan}}</h2>
      <ul id="links">
          <li v-for="items in links">
              <img :src="items.img" :alt="items.text">
              <p>{{items.text}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
        imgSrc: 'https://scontent-lax3-2.cdninstagram.com/vp/54fb5085900d49228d4e10860e20b8b5/5D015430/t51.2885-15/e35/p1080x1080/44691807_1436595683110274_4851399008266366026_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com',
        imgAlt: 'Jarren Calizo',
        name: 'Jarren Calizo',
        slogan: '2nd Year Computer Programmer (Waipahu High School)',
        links: [
            {img:'./src/assets/github.png',text:'Github',link:'https://github.com/AlohaJarren'},
            //{img:'./src/assets/instagram.png',text:'Instagram'}
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
#AboutMe {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
#me {
    display: table;
    max-height: 50%;
    border:  3px solid mediumspringgreen;
    border-radius: 100%;
    margin: 2rem auto 0.5rem;
}
h1, h2 {
    text-align: center;
}
h1 {
    font-size: 3rem;
}
ul {
    display: flex;
    width: 75%;
    justify-content: space-evenly;
    margin: 0 auto;
}
li {
    display: inline-flex;
    width: 25%;
    height: 4rem;
    border: 3px solid mediumspringgreen;
    border-radius: 2rem;
    padding: 0.5rem;
    list-style-type: none;
}
li > img {
    display: inline-flex;
    height: 93%;
}
li > p {
    margin: auto;
    font-size: 2rem;
}
li:hover {
    cursor: pointer;
}
</style>
