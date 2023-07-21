
import Vue from "vue";
import Vuex from "vuex"
import cNumberOptions from './count'
import pAddOptions from './person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cNumberOptions,
        pAddOptions
    }
})