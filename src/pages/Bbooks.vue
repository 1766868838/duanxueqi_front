<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="图书名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <div style="margin-bottom: 20px;">
        <el-row style="margin-top:20px; border-bottom:1px solid #ddd">
            <el-col :span="3">
                <div>选中</div>
            </el-col>
            <el-col :span="5">
               <div>图书编号</div>
            </el-col>
            <el-col :span="5">
               <div>图书名称</div>
            </el-col>
            <el-col :span="5">
               <div>图书作者</div>
            </el-col>
        </el-row>
               <!-- 动态生成的书籍列表 -->
      <div v-for="item in data" :key="item.bID" style=" border-bottom:1px solid #ddd">
        <el-row>
          <el-col :span="3">
            <el-checkbox v-model="item.checked" />
          </el-col>
          <el-col :span="5">
            <div>{{ item.bID }}</div>
          </el-col>
          <el-col :span="5">
            <div>{{ item.Bname }}</div>
          </el-col>
          <el-col :span="5">
            <div>{{ item.author }}</div>
          </el-col>
        </el-row>
      </div>
    </div>
      <el-form-item label="借书卡">
        <el-input v-model="form.Bcard" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认借书</el-button>
        <router-link to ="/Badmin/Bmanage" style="margin-left: 30px;">
        <el-button>
          取消
        </el-button>
      </router-link>
      </el-form-item>
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
  
  const onSubmit = () => {
    //存入数据库

    //返回页面
    router.push("/Badmin/Bmanage");
  }

  //静态测试数据
const data = [
    {
        bID:"100",
        Bname: "红楼梦",
        author:"曹雪芹"
    },
    {
        bID:"101",
        Bname: "西游记",
        author:"施耐庵"
    },
    {
        bID:"102",
        Bname: "三国演义",
        author:"罗贯中"
    },
]
  </script>
  