import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createPinia } from 'pinia'

import Axios from 'axios';




Axios.defaults.baseURL = 'https://vue-learn-auth-default-rtdb.firebaseio.com/';
Axios.defaults.headers.post['dfe'] = 'this is my value';
Axios.defaults.headers.get['dfgf'] = 'this is my value';    

createApp(App).use(createPinia()).mount('#app')
