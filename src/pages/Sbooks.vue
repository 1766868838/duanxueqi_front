<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="图书编号">
        <el-input v-model="formInline.user" clearable />
      </el-form-item>
      <el-form-item label="书名">
        <el-input v-model="formInline.user" clearable />
      </el-form-item>
      <el-form-item label="图书类型">
        <el-select v-model="formInline.region" placeholder="please select">
          <el-option label="文学类" value="文学类" />
          <el-option label="经济学类" value="经济学类" />
          <el-option label="法学类" value="法学类" />
          <el-option label="历史类" value="历史类" />
          <el-option label="工学类" value="工学类" />
          <el-option label="统计学类" value="统计学类" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-row style="margin-top:50px; border-bottom:1px solid #ddd">
            <el-col :span="3">
                <div>图书编号</div>
            </el-col>
            <el-col :span="3">
               <div>图书名称</div>
            </el-col>
            <el-col :span="3">
               <div>图书类型</div>
            </el-col>
            <el-col :span="3">
               <div>作者</div>
            </el-col>
            <el-col :span="4">
               <div>价格</div>
            </el-col>
            <el-col :span="4">
               <div>语言</div>
            </el-col>
        </el-row>
          <!-- 动态生成的书籍列表 -->
      <div v-for="item in data" :key="item.Bid" style="margin-top:10px; border-bottom:1px solid #ddd">
        <el-row>
          <el-col :span="3">
            <div>{{ item.Bid}}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.Bname }}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.Btype }}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.author}}</div>
          </el-col>
          <el-col :span="4">
            <div>{{ item.price }}</div>
          </el-col>
          <el-col :span="4">
            <div>{{ item.language}}</div>
          </el-col>
        </el-row>
        </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
  const formInline = reactive({
    user: '',
    region: '',
    date: '',
    regin:""
  })
  //静态测试数据
const data = [
    {
        Bid:"1001",
        Bname: "红楼梦",
        Btype: "文学类",
        author: "曹雪芹",
        price:"39",
        language:"中文"
    },
    {
        Bid:"1002",
        Bname: "红楼梦",
        Btype: "文学类",
        author: "曹雪芹",
        price:"39",
        language:"中文"
    },
    {
        Bid:"1003",
        Bname: "红楼梦",
        Btype: "文学类",
        author: "曹雪芹",
        price:"39",
        language:"中文"
    },
]
const checked = ref(false)
  const onSubmit = () => {
    console.log('submit!')
  }
  </script>
  