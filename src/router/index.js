import App from '../app'
const danmu = r => require.ensure([], () => r(require('../components/page/danmu')), 'danmu');
const about = r => require.ensure([], () => r(require('../components/page/about')), 'about');
export default [{
    path: '',
    component: danmu, //顶层路由，对应index.html
    children: [ //二级路由。对应home.vue
    
    ]
},
 {
    path: '/danmu',
    component: danmu
},
{
    path: '/about',
    component: about
}

]