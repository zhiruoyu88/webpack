import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main'
import book from '../components/book'
Vue.use(Router)
export default new Router({
    routes:[
    {
        path:'/',
        name:'main',
        component:main
    },
    {
        path:'/book/:bookId',
        name:'book',
        component:book
    }
    ]
})
