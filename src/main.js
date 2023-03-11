import { createApp } from 'vue';
// 1. 引入你需要的组件
import { Button, Step, Steps, Swipe, SwipeItem, Card, NavBar, ContactCard, Dialog, Collapse, CollapseItem, Calendar, Tabbar, TabbarItem, Divider, NoticeBar, AddressEdit } from 'vant';
import App from './App.vue';
import request from './utils/request';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App);

// 3. 注册你需要的组件
app.use(NoticeBar);
app.use(ContactCard);
app.use(Card);
app.use(Step);
app.use(Steps);
app.use(Swipe);
app.use(SwipeItem);
app.use(Calendar);
app.use(AddressEdit);
app.use(Divider);
app.use(Collapse);
app.use(CollapseItem);
app.use(Dialog);
app.use(Button);
app.use(Tabbar);
app.use(NavBar);
app.use(TabbarItem);
app.mount('#app')