<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="读者卡号">
        <el-input v-model="form.card_num" />
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.nick_name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="请选择性别">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
        <el-form-item label="身份">
        <el-select v-model="form.identity" placeholder="请选择身份">
          <el-option label="学生" value="学生" />
          <el-option label="教师" value="教师" />
        </el-select>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="form.user_name" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="学院">
        <el-input v-model="form.college" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <router-link to="/Badmin/mReader" style="margin-left:30px;">
        <el-button>
            取消
        </el-button>
      </router-link>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  // do not use same name with ref
  const form = reactive({
    card_num: '',
    nick_name:"",
    gender: '',
    user_name:"",
    phone: '',
    password:'',
    identity:'',
    college:'',
    email:'',
  })
  
  const onSubmit = () => {
    //保存数据库

    //跳转
    router.push("/Badmin/mReader");
  }
  </script>
  