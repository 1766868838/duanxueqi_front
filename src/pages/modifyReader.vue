<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form.gender" placeholder="请选择性别">
        <el-option label="男" value="1" />
        <el-option label="女" value="0" />
      </el-select>
    </el-form-item>
    <el-form-item label="身份">
      <el-select v-model="form.identity" placeholder="请选择身份">
        <el-option label="学生" value="0" />
        <el-option label="教师" value="1" />
      </el-select>
    </el-form-item>
    <el-form-item label="真实姓名">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.phoneNum" />
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="学院">
      <el-input v-model="form.college" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="updateReader">确认修改</el-button>
      <router-link to="/Badmin/mReader" style="margin-left: 30px">
        <el-button @click="onSubmit"> 取消 </el-button>
      </router-link>
    </el-form-item>
  </el-form>
</template>
  
  <script lang="ts" setup>
import { reactive,toRaw } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useUserStore } from "../store.js";
const pi = useUserStore();
const router = useRouter();
// do not use same name with ref
const form = reactive({
  cardNum: "",
  nickname: "",
  gender: "1",
  username: "",
  phoneNum: "",
  identity: "0",
  college: "",
  email: "",
  password: "",
});

const onSubmit = () => {
  //保存数据库

  //跳转
  router.push("/Badmin/mReader");
};

//初始化读者修改界面
const init = () => {
  form.cardNum = pi.currentReader.cardNum;
  form.nickname = pi.currentReader.nickname;
  form.username = pi.currentReader.username;
  form.phoneNum = pi.currentReader.phone;
  form.college = pi.currentReader.college;
  form.email = pi.currentReader.email;
};
init();

//提交修改
const updateReader = async () => {
  let originDate = JSON.stringify(toRaw(pi.currentReader));
  let currentDate = JSON.stringify(toRaw(form));
  console.log(currentDate)
  await axios({
    method: "post",
    url: "/dev/user/update",
    data: currentDate,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res);
  });
  router.push("/Badmin/mReader");
};

</script>
  