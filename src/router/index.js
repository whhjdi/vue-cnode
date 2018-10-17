import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path:'/',
      components: {
        main: PostList
      }
    },
    {
      name: 'post_content',
      path:'/topic/:id&author=:name',
      components: {
        main: Article,
        slidebar: SlideBar
      }
    },
    {
      name: 'user_info',
      path:'/user_info/:name',
      components: {
        main: UserInfo,

      }
    },
    {
      name: 'login',
      path:'/login',
      components: {
        main: Login,
      }
    },
    {
      name: 'signup',
      path:'/signup',
      components: {
        main: SignUp,
      }
    }
  ]
})
