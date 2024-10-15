import {
	createApp
} from 'vue'
import '@arco-design/web-vue/es/message/style/css.js';
import App from './App.vue';
import './style.css';
// 引入 HLS.js
import Hls from 'hls.js';

const app = createApp(App)
app.mount('#app')


// 禁用右键菜单
document.addEventListener('contextmenu', (event) => {
	event.preventDefault();
});
