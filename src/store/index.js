import Vue from 'vue'
import Vuex from 'vuex'
import Routes from './routes'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Routes
    }
})