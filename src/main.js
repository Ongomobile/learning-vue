import { createApp } from "vue"
import App from "./App.vue"
import "animate.css"
import VueSweetalert2 from "vue-sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(fas)

// Vue.component("font-awesome-icon", FontAwesomeIcon)

const app = createApp(App)

app.use(VueSweetalert2)
app.component("fa", FontAwesomeIcon)
app.mount("#app")
