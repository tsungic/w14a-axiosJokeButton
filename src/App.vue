<template>
  <div id="app">
    <joke-button></joke-button>
    <normal-joke v-if="jokeState == 'normal'"></normal-joke>
    <snake-joke v-if="jokeState =='snake'"></snake-joke>
    <loud-joke v-if="jokeState == 'loud'"></loud-joke>
    <button @click ="jokeState = 'normal'">Normal</button>
    <button @click ="jokeState = 'snake'">Snake</button>
    <button @click ="jokeState = 'loud'">Loud</button>
  </div>
</template>

<script>
import JokeButton from "./components/JokeButton.vue";
import NormalJoke from "./components/NormalJoke.vue";
import SnakeJoke from "./components/SnakeJoke.vue";
import LoudJoke from "./components/LoudJoke.vue";

export default {
  name: 'App',
  components: {
    JokeButton,
    NormalJoke,
    SnakeJoke,
    LoudJoke
  },
  data() {
    return {
      //string called normal
      jokeState: "normal"
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
