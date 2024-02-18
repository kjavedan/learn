import '@/styles'
import '@/plugins/unocss'

// State management
import { setupStore } from '@/store'

// Localazation
import { setupI18n } from '@/plugins/vueI18n'

// UI library
import { setupElementPlus } from '@/plugins/elementPlus'

// Routing
import { setupRouter } from '@/router'

import { createApp } from 'vue'
import App from './App.vue'

const setupAll = async () => {
  const app = createApp(App)

  await setupI18n(app)

  setupStore(app)

  setupElementPlus(app)

  setupRouter(app)

  app.mount('#app')
}

setupAll()
