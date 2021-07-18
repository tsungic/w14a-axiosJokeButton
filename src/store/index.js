import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: undefined
  },
  mutations: {
     updateJoke: function(context, joke) {
       context.joke = joke
     }
  },
  actions: {
    getNewJoke: function(context) {
      axios.request({
        url:"https://geek-jokes.sameerkumar.website/api?format=json",
        method: "GET"
      }).then((response) =>{
        console.log(response)
        context.commit("updateJoke", response.data.joke)
      }).catch((error) =>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
