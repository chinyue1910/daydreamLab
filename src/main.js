import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserFriends, faTicketAlt, faMapMarkedAlt, faMapMarkerAlt, faCalendarPlus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLine } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
library.add(faClock, faUserFriends, faTicketAlt, faFacebookF, faTwitter, faLine, faMapMarkedAlt, faMapMarkerAlt, faCalendarPlus, faAngleLeft, faAngleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
