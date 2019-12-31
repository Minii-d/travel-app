import Vue from 'vue'
import App from '@/layouts/App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'  //轮播
import 'swiper/dist/css/swiper.css'  //轮播样式

Vue.config.productionTip = false
// import './assets/css/public.css';
import './assets/css/normal.css';
import './assets/css/iconfont.css';//字体图标的引入
Vue.use(VueAwesomeSwiper)	//安装轮播

new Vue({
  render: h => h(App),
}).$mount('#app')
