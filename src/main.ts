import '@/plugins/unocss'

// State management
import { setupStore } from '@/store'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

setupStore(app)

app.mount('#app')
