<template>
    <el-form :model="form" label-width="120px">
      <div style="margin-bottom: 20px;">
        <el-row style="margin-top:20px; border-bottom:1px solid #ddd">
            <el-col :span="5">
               <div>图书类型</div>
            </el-col>
            <el-col :span="5">
               <div>图书数量</div>
            </el-col>
        </el-row>
               <!-- 动态生成的书籍列表 -->
      <div v-for="item in data" :key="item.bID" style=" border-bottom:1px solid #ddd">
        <el-row style="margin: 10px 0 10px 0;">
          <el-col :span="5">
            <div>{{ item.bID }}</div>
          </el-col>
          <el-col :span="5">
            <div>{{ item.Bname }}</div>
          </el-col>
        </el-row>
      </div>
    </div>
    </el-form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  // do not use same name with ref
  const form = reactive({
    name: '',
    Bcard: '',
    region:''
  })
  

  //静态测试数据
const data = [
    {
        bID:"文学类",
        Bname: "2",
    },
    {
        bID:"法学类",
        Bname: "2",
    },
    {
        bID:"经济学类",
        Bname: "1",
    }, {
        bID:"历史类",
        Bname: "3",
    }, {
        bID:"工学类",
        Bname: "2",
    }, {
        bID:"统计学类",
        Bname: "1",
    },
]
  </script>
  