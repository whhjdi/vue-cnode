<template>
  <div class="signup">
    <div class="header">
      <router-link :to="{name:'root'}">主页</router-link>/
      <span>注册新账号</span>
    </div>
    <div class="content">
      <div class="form">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user" label='用户名'>
            <Input type="text" v-model="formInline.user" placeholder="Username" size="large" />
          </FormItem>
          <FormItem prop="password" label='密码'>
            <Input type="password" v-model="formInline.password" placeholder="Password" />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">点击注册</Button>
          </FormItem>
        </Form>
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
            this.$Message.success("注册成功");
          } else {
            this.$Message.error("注册失败");
          }
        });
      }
    }
  };
</script>
<style scoped>
  .signup {
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    background: #fff;
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
  .form {
    max-width: 560px;
  }
</style>