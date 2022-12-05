import { createApp } from 'vue'
import App from './App.vue'

import '@vue-js-cron/light/dist/light.css'
import cronLight from '@vue-js-cron/light'
//import app from "@/App";



createApp(App).use(cronLight).mount('#app')
