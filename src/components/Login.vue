<template>
  <div class="login">
    <div class="left">
      <div class="header">
        <router-link :to="{name:'root'}">主页</router-link>/
        <span>登录</span>
      </div>
      <div class="content">
        <div class="form">
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user" label='用户名'>
              <Input type="text" v-model="formInline.user" placeholder="Username" />
            </FormItem>
            <FormItem prop="password" label='密码'>
              <Input type="password" v-model="formInline.password" placeholder="Password" />
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">点击登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="header">关于</div>
      <div class="about">
        <div class="title">
          CNode：Node.js专业中文社区
        </div>
        <div class="text">在这里你可以：</div>
        <ul>
          <li>向别人提出你遇到的问题</li>
          <li>帮助遇到问题的人</li>
          <li>分享自己的知识</li>
          <li>和其它人一起进步</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import { Form, FormItem, Input, Button } from "iview";

  export default {
    components: {
      Form,
      FormItem,
      Input,
      Button
    },
    data() {
      return {
        formInline: {
          user: "",
          password: ""
        },
        ruleInline: {
          user: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur"
            }
          ],
          password: [
            {
              required: true,
              message: "请输入密码.",
              trigger: "blur"
            },
            {
              type: "string",
              min: 6,
              message: "密码的长度必须大于6位",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.$Message.success("登陆成功");
          } else {
            this.$Message.error("登录失败");
          }
        });
      }
    }
  };
</script>
<style scoped>
  @media (max-width: 980px) {
    .right {
      display: none;
    }
  }
  .login {
    display: flex;
    margin-top: 15px;
  }
  .left {
    flex: 1;
    background: #fff;
    margin-left: 30px;
    margin-right: 30px;
  }
  .right {
    width: 290px;
    font-size: 14px;
    margin-right: 30px;
  }
  .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
  }
  .content {
    padding: 50px 80px;
    border-radius: 0 0 3px 3px;
  }
  .about {
    font-size: 14px;
    padding: 5px;
    background: #fff;
  }
  .about .title {
    font-size: 14px;
    word-break: break-word;
  }
  .about ul {
    padding-left: 25px;
    padding-top: 10px;
  }
  .form {
    max-width: 560px;
  }
</style>