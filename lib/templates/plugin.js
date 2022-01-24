import Vue from 'vue'
import Buefy from 'buefy'

export default (_context, inject) => {
    Vue.use(Buefy, <%= JSON.stringify(options, null, 2) %>)
    inject('buefy', Vue.prototype.$buefy)
}
