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
        <el-menu-item index="1-1">借阅管理</el-menu-item>
        <el-menu-item index="1-2">图书管理</el-menu-item>
        <el-menu-item index="1-3">读者管理</el-menu-item>
        <el-menu-item index="1-4">类型管理</el-menu-item>
        <el-menu-item index="1-5">管理员管理</el-menu-item>
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
