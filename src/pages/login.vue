<template>
  <el-row style="min-height: 100vh" class="bg-indigo-500">
    <el-col :lg="16" :md="12" class="flex items-center justify-center flex-col">
      <div class="font-bold text-3xl text-light-50 mb-4">图书管理系统</div>
      <div class="text-gray-200">第十四小组</div>
    </el-col>
    <el-col
      :lg="8"
      :md="12"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
      <div
        class="flex items-center justify-center my-5 text-gray-300 space-x-2"
      >
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form
        :rules="rules"
        :model="form"
        class="w-[300px] flex items-center justify-center flex-col"
      >
        <el-form-item prop="username">
          <el-input v-model="form.card_num" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <el-icon><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="mb-2 flex items-center text-sm">
          <el-radio-group v-model="identity" class="ml-4">
            <el-radio label="3" size="large">系统管理员</el-radio>
            <el-radio label="2" size="large">图书管理员</el-radio>
          </el-radio-group>
          <el-radio-group v-model="identity" class="ml-4">
            <el-radio label="1" size="large">教师</el-radio>
            <el-radio label="0" size="large">学生</el-radio>
          </el-radio-group>
        </div>
        <el-form-item class="flex items-center justify-center">
          <el-button
            round
            color="#626aef"
            class="w-[250px]"
            type="primary"
            @click="LoginApi"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script  setup>
import { ref } from "vue";
import { reactive } from "vue";
import axios from "axios";
import { User, Lock } from "@element-plus/icons-vue";
import { login } from "~/api/manager";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import { useUserStore } from "../store.js";
const pi = useUserStore();
const identity = ref("3");
const router = useRouter();

// import router from '../router';

// do not use same name with ref
const form = reactive({
  card_num: "",
  password: "",
});
//验证规则
const rules = {
  card_num: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
};
// const onSubmit = () => {

//     // if(form.username == "111"&&form.password =="111"){
//     //     this.$router.push("/badmin")
//     // }
//     login(form.username,form.password)
//     .then(res=>{
//         console.log(res);
//         //提示成功
//         ElNotification({
//             message:"登录成功",
//             type: 'success',
//             duration:3000
//         })
//         router.push("/badmin")
//     })
//     .catch(err=>{
//         ElNotification({
//             message: err.response.data.msg || "请求失败",
//             type: 'error',
//             duration:3000
//         })
//     })
//     console.log(form.username);
//     console.log(form.password);
//     router.push('/Sadmin')

// }

/**
 * 调用后台登录接口
 */
const LoginApi = async () => {
  console.log(1)
  if (form.card_num == "") {
    alert("用户名不能为空");
    return ;
  } else if (form.password == "") {
    alert("密码不能为空");
    return ;
  }
  await axios({
    method: "get",
    url: "/dev/login",
    params: {
      card_num: form.card_num,
      password: form.password,
      identity_type: identity.value,
    },
  }).then((res) => {
    if (res.data != "") {
      pi.user_inf = res.data;
      pi.card_num=form.card_num
      pi.password=form.password
      pi.identity=identity.value
      if (identity.value == 3) {
        router.push("/AdminManage");
      } else {
        getBorrowinf()
        router.push("/Person");
      }
    }
  });
};
//获取个人借阅记录
const getBorrowinf = async () => {
  await axios({
    method: "get",
    url: "/dev/selectOneBorrow",
    params:{
        card_num:form.card_num
    }
  }).then((res)=>{
    pi.borrow_data=res.data;
    console.log(res.data)
    console.log(pi.borrow_data[0])
  })
};
</script>