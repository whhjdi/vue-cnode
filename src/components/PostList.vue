<template>
  <div class="PostList">
    <!--loading动画-->
    <div class="loading" v-if="isLoading">
      <Loading></Loading>
      <!-- <img src="../assets/loading.gif" alt="loading"> -->
    </div>
    <div class="posts" v-else>
      <ul>
        <li>
          <div class="toobar">
            <span v-for="(list,index) in lists" :key="list.tab" :class="{active:index===clicked}" @click="getData(list.tab,index)">{{list.text}}</span>
          </div>
        </li>
        <li v-for="post in posts" :key="post.id">
          <!--头像-->
          <img :src="post.author.avatar_url" alt="">
          <!--回复数/浏览数-->
          <span class="allcount">
            <span class="reply_count">{{post.reply_count}}</span>
            /{{post.visit_count}}
          </span>
          <!--帖子分类-->
          <span :class="[{
            put_good:post.good===true,
            put_top:post.top===true,
            topiclist_tab:(post.good!==true&&post.top!==true)
            }]">
            <span>{{post | tabFormatter}}</span>
          </span>
          <!--标题-->
          <router-link :to="{
              name: 'post_content',
              params:{
                id: post.id,
                name: post.author.loginname
              }
            }">
            <span>{{post.title}}</span>
          </router-link>

          <!--最后回复-->
          <span class="last_reply">
            {{post.last_reply_at | formatDate}}
          </span>

        </li>
        <li>
          <Page :total="1000" show-elevator @on-change="renderList" />
          <!-- <pagination @handle="renderList"></pagination> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import pagination from './Pagination'
  import Loading from "./Loading.vue";
  import { Page } from "iview";
  export default {
    name: "PostList",
    data() {
      return {
        isLoading: false,
        clicked: 0,
        tab: "",
        posts: [],
        postpage: 1,
        lists: [
          { name: "all", text: "全部", tab: "" },
          { name: "good", text: "精华", tab: "good" },
          { name: "share", text: "分享", tab: "share" },
          { name: "ask", text: "问答", tab: "ask" },
          { name: "job", text: "招聘", tab: "job" }
        ]
      };
    },
    components: {
      Page,
      Loading
    },
    methods: {
      getData(tab, index) {
        this.$http
          .get("https://cnodejs.org/api/v1/topics", {
            params: {
              page: this.postpage,
              limit: 20,
              tab
            }
          })
          .then(res => {
            this.tab = tab;
            this.isLoading = false;
            this.posts = res.data.data;
            this.clicked = index;
            console.log(this.posts);
          })
          .catch(err => {
            console.log(err);
          });
      },
      renderList(value) {
        this.postpage = value;
        this.getData(this.tab, 0);
      }
    },
    created() {
      this.isLoading = true;
      this.getData("", 0);
    }
  };
</script>

<style scoped>
  @media (max-width: 1344px) {
    .PostList {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
  @media (max-width: 768px) {
    .PostList,
    .posts {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0 !important;
    }
  }
  .PostList {
    background-color: #e1e1e1;
  }
  .posts {
    margin-top: 10px;
  }

  .PostList img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }
  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
      "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good,
  .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
    padding: 2px 3px;
    border-radius: 2px;
  }
  .active {
    background: #80bd01;
    color: #fff !important;
  }
  .toobar span:hover {
    background: #80bd01;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>


