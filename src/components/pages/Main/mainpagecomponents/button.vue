<template>
    <button @click="runFunction">{{description}}</button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
      runFunction: {
          required: true
      },
      description: {
          type: String,
          required: true
      }
  },
}
</script>

<style scoped>
button {
    border: none;
    display: table;
    margin: 2rem auto 0 auto;
    padding: 1rem 2rem;
    color: rgb(245, 243, 243);
    background-color: rgb(73, 206, 255);
    border-radius: 0.5rem;
}
button:hover {
    cursor: pointer;
}
</style>