import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import router from './router'

createApp(App).use(router).use(Antd).mount('#app')
