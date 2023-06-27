<template>
  <div class="common-layout">
    <el-container>
      <el-header style="background: #333; padding: 0; height: 7vh">
        <myheader></myheader>
      </el-header>
      <el-container>
        <el-aside width="200px" style="height: 93vh; background: #545c64">
          <myaside></myaside>
        </el-aside>
        <el-main>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input v-model="admininf.name" clearable />
            </el-form-item>
            <el-form-item label="管理员类型">
              <el-select
                v-model="admininf.rtype"
                placeholder="请选择管理员类型"
              >
                <el-option label="系统管理员" value="系统管理员" />
                <el-option label="图书管理员" value="图书管理员" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-form>
          <el-row style="margin-top:20px; border-bottom:1px solid #ddd">
            <el-col :span="3">
                <div></div>
            </el-col>
            <el-col :span="5">
               <div>管理员姓名</div>
            </el-col>
            <el-col :span="5">
               <div>管理员类型</div>
            </el-col>
            <el-col :span="5">
               <div>操作</div>
            </el-col>
        </el-row>
          <!-- 动态生成的书籍列表 -->
          <div
            v-for="item in data"
            :key="item.bID"
            style="border-bottom: 1px solid #ddd"
          >
            <el-row>
              <el-col :span="3">
                <el-checkbox v-model="item.checked" />
              </el-col>
              <el-col :span="5">
                <div>{{ item.Aname }}</div>
              </el-col>
              <el-col :span="5">
                <el-tag size="small">{{ item.Atype }}</el-tag>
              </el-col>
              <el-col :span="5">
                <el-button type="primary">修改密码</el-button>
                <el-button type="warning">删除</el-button>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script  setup>
import myaside from "../common/aside.vue";
import myheader from "../common/header.vue";
import { reactive } from "vue";
import { ref } from "vue";
const admininf = reactive({
  name: "",
  type: "",
});
const data = [
    {
        Aname:"admin",
        Atype: "系统管理员",
    },
    {
        Aname:"HZS",
        Atype: "图书管理员",
    },
    {
        Aname:"axwd",
        Atype: "图书管理员",
    },
]
</script>
