<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="读者卡号">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.bId" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.region" placeholder="please select">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.date1" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.language" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>
            <router-link to="/Badmin/mReader">取消</router-link>
        </el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  // do not use same name with ref
  const form = reactive({
    name: '',
    bId:"",
    region: '',
    author:"",
    date1: '',
    date2: '',
    price:"",
    language: '',
    desc: '',
  })
  
  const onSubmit = () => {
    //保存数据库

    //跳转
    router.push("/Badmin/mReader");
  }
  </script>
  