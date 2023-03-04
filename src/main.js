import { createApp } from 'vue';
// 1. 引入你需要的组件
import { Button, Card, NavBar, Calendar, Tabbar, TabbarItem, Divider, NoticeBar, AddressEdit } from 'vant';
import App from './App.vue';
import request from './utils/request';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App);

// 3. 注册你需要的组件
app.use(NoticeBar);
app.use(Card);
app.use(Calendar);
app.use(AddressEdit);
app.use(Divider);
app.use(Button);
app.use(Tabbar);
app.use(NavBar);
app.use(TabbarItem);
app.mount('#app')