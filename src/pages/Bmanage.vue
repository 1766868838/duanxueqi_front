<template>
    <div>
        <el-row>
            <el-col :span="24">
              <router-link to="/Badmin/bbooks" style="margin-right: 30px;">
                <el-button type="primary">
                 借书 
                </el-button>
              </router-link> 
              <router-link to="/Badmin/Rbook" style="margin-right: 30px;">
                <el-button type="success">
                   还书
                </el-button>
              </router-link>  
                <el-button type="warning">删除</el-button>
            </el-col>
        </el-row>
        <el-row style="margin-top:50px; border-bottom:1px solid #ddd">
            <el-col :span="3">
                <div>选中</div>
            </el-col>
            <el-col :span="3">
               <div>图书名称</div>
            </el-col>
            <el-col :span="3">
               <div>借书卡</div>
            </el-col>
            <el-col :span="3">
               <div>借阅人</div>
            </el-col>
            <el-col :span="4">
               <div>借阅时间</div>
            </el-col>
            <el-col :span="4">
               <div>还书时间</div>
            </el-col>
            <el-col :span="3">
               <div>还书类型</div>
            </el-col>
        </el-row>
          <!-- 动态生成的书籍列表 -->
      <div v-for="item in data" :key="item.Bname" style="margin-top:10px; border-bottom:1px solid #ddd">
        <el-row>
          <el-col :span="3">
            <el-checkbox v-model="item.checked" />
          </el-col>
          <el-col :span="3">
            <div>{{ item.Bname }}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.Bcard }}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.Bman }}</div>
          </el-col>
          <el-col :span="4">
            <div>{{ item.time }}</div>
          </el-col>
          <el-col :span="4">
            <div>{{ item.BackTime }}</div>
          </el-col>
          <el-col :span="3">
            <div>{{ item.BackType }}</div>
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
        Bname: "红楼梦",
        Bcard: "8120116042",
        Bman: "彭于晏",
        time: "2021-04-05 21:42:35",
        BackTime:"2021-05-05 10:00:00",
        BackType:"正常还书"
    },
    {
        Bname: "西游记",
        Bcard: "8120116043",
        Bman: "胡歌",
        time: "2021-05-01 16:42:35",
        BackTime:"2021-05-05 10:00:00",
        BackType:"正常还书"
    },
    {
        Bname: "三国演义",
        Bcard: "8120116044",
        Bman: "陈恋",
        time: "2021-05-05 15:05:35",
        BackTime:"2021-05-05 10:00:00",
        BackType:"正常还书"
    },
]
//checkbox状态
const checked1 = ref(false)
</script>
