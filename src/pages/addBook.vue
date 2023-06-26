<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="图书名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="图书编号">
        <el-input v-model="form.bId" />
      </el-form-item>
      <el-form-item label="图书类型">
        <el-select v-model="form.region" placeholder="please select">
          <el-option label="文学类" value="文学类" />
          <el-option label="经济学类" value="经济学类" />
          <el-option label="法学类" value="法学类" />
        </el-select>
      </el-form-item>
      <el-form-item label="图书作者">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="图书出版社">
        <el-input v-model="form.date1" />
      </el-form-item>
      <el-form-item label="图书语言">
        <el-input v-model="form.language" />
      </el-form-item>
      <el-form-item label="图书价格">
        <el-input v-model="form.price" />
      </el-form-item>
      <el-form-item label="图书介绍">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="出版日期">
        <el-input v-model="form.date2" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>
            <router-link to="/Badmin/librarian">取消</router-link>
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
    router.push("/Badmin/librarian");
  }
  </script>
  