<template>
  <el-col>
    <el-menu
      default-active="2"
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>功能管理</span>
        </template>
        <el-menu-item index="1-1">
          <router-link to="/Badmin/bmanage"> 借阅管理</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">图书管理</el-menu-item>
        <el-menu-item index="1-3">读者管理</el-menu-item>
        <el-menu-item index="1-4">查询修改个人信息</el-menu-item>
        <el-menu-item index="1-5">帮助读者借书或还书</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>统计分析</span>
        </template>
        <el-menu-item index="2-1">统计分析</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-col>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
