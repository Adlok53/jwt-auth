import { createApp } from 'vue'
import Index from '@/Index'
import router from '@/router'

const app = createApp(Index)
app.use(router)
.mount('#app')