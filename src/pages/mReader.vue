<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-button type="primary" @click="Add">添加</el-button>
                <el-button type="success" @click="modify">修改</el-button>
                <el-button type="warning">删除</el-button>
            </el-col>
        </el-row>
        <el-row style="margin-top:50px; border-bottom:1px solid #ddd">
            <el-col :span="3">
                <div>选中</div>
            </el-col>
            <el-col :span="3">
               <div>读者卡号</div>
            </el-col>
            <el-col :span="3">
               <div>用户名</div>
            </el-col>
            <el-col :span="3">
               <div>真实姓名</div>
            </el-col>
            <el-col :span="4">
               <div>性别</div>
            </el-col>
            <el-col :span="4">
               <div>电话</div>
            </el-col>
            <el-col :span="3">
               <div>邮箱</div>
            </el-col>
        </el-row>
          <!-- 动态生成的书籍列表 -->
      <div v-for="item in data" :key="item.rId" style="margin-top:10px; border-bottom:1px solid #ddd">
        <el-row>
          <el-col :span="3">
            <el-checkbox v-model="item.checked" />
          </el-col>
          <el-col :span="3">
            <div>{{ item.rId}}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.username }}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.Rname}}</div>
          </el-col>
          <el-col :span="4">
            <div>{{ item.rSex}}</div>
          </el-col>
          <el-col :span="4">
            <div>{{ item.phone}}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.email}}</div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
//静态测试数据
const data = [
    {
        Rname: "彭于晏",
        username:"xxx",
        rId: "8120116042",
        rSex: "男",
        phone: "13767134834",
        email:"yu123@163.com",
    },   {
        Rname: "彭于晏",
        username:"xxx",
        rId: "8120116042",
        rSex: "男",
        phone: "13767134834",
        email:"yu123@163.com",
    },   {
        Rname: "彭于晏",
        username:"xxx",
        rId: "8120116042",
        rSex: "男",
        phone: "13767134834",
        email:"yu123@163.com",
    },
]
//checkbox状态
const checked1 = ref(false)

const Add =()=>{
    router.push("/Badmin/aReader")
}
const modify =()=>{
    router.push("/Badmin/mr")
}
</script>