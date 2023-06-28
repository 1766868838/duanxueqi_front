<template>
    <div>
        <el-row>
            <el-col :span="24">
              <router-link to="/Badmin/addBook" style="margin-right:30px;">
                <el-button type="primary">
                   添加
                </el-button>
              </router-link>
              <router-link to="/Badmin/minfo" style="margin-right:30px;">
                <el-button type="success" @click="minfo">修改</el-button>
              </router-link>
                <el-button type="warning">删除</el-button>
            </el-col>
        </el-row>
        <el-row style="margin-top:50px; border-bottom:1px solid #ddd">
            <el-col :span="1">
                <div>选中</div>
            </el-col>
            <el-col :span="1">
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
               <div>出版社</div>
            </el-col>
            <el-col :span="4">
               <div>出版日期</div>
            </el-col>
            <el-col :span="2">
               <div>价格</div>
            </el-col>
            <el-col :span="2">
               <div>语言</div>
            </el-col>
        </el-row>
          <!-- 动态生成的书籍列表 -->
      <div v-for="item in data" :key="item.Bid" style="margin-top:10px; border-bottom:1px solid #ddd">
        <el-row>
            <el-col :span="1">
            <el-checkbox v-model="item.checked" />
          </el-col>
          <el-col :span="1">
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
               <div>{{ item.press}}</div>
            </el-col>
            <el-col :span="4">
               <div>{{ item.publication_date}}</div>
            </el-col>
          <el-col :span="2">
            <div>{{ item.price }}</div>
          </el-col>
          <el-col :span="2">
            <div>{{ item.language}}</div>
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
        Bid:"1001",
        Bname: "红楼梦",
        Btype: "文学类",
        author: "曹雪芹",
        press:'花生米出版社',
        publication_date:'2023-06-21 10:36:12',
        price:"39",
        language:"中文"
    },
    {
        Bid:"1002",
        Bname: "红楼梦",
        Btype: "文学类",
        author: "曹雪芹",
        press:'花生米出版社',
        publication_date:'2023-06-21 10:36:12',
        price:"39",
        language:"中文"
    },
    {
        Bid:"1003",
        Bname: "红楼梦",
        Btype: "文学类",
        author: "曹雪芹",
        press:'花生米出版社',
        publication_date:'2023-06-21 10:36:12',
        price:"39",
        language:"中文"
    },
]
//checkbox状态
const checked1 = ref(false)

</script>