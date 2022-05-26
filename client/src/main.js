import { createApp} from 'vue'
import App from '@/components/Index'
import router from '@/router/router'
//import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router).mount('#app')