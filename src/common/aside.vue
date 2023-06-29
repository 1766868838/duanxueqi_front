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
    <router-link to="/Person">
          <el-menu-item index="1-5" v-if="pi.identity!=3">个人主页</el-menu-item>
        </router-link>
        <router-link to="/AdminManage">
          <el-menu-item index="1-6" v-if="pi.identity==3">管理员管理</el-menu-item>
        </router-link>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>功能</span>
        </template>
        <router-link to="/Badmin/bmanage" >
          <el-menu-item index="1-1" v-if="pi.identity==2">借阅管理</el-menu-item>
        </router-link>
        <router-link to="/Badmin/librarian">
          <el-menu-item index="1-2" v-if="pi.identity==2">图书管理</el-menu-item>
        </router-link>
        <router-link to="/Badmin/sb">
          <el-menu-item index="1-3">图书查询</el-menu-item>
        </router-link>
        <router-link to="/Badmin/mReader">
          <el-menu-item index="1-4" v-if="pi.identity==2">读者管理</el-menu-item>
        </router-link>
        
      </el-sub-menu>
      <el-sub-menu index="4" v-if="pi.identity==2||pi.identity==3">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>统计分析</span>
        </template>
        <router-link to="/Badmin/sa">
        <el-menu-item index="4-1">统计分析</el-menu-item>
        </router-link>
      </el-sub-menu>
    </el-menu>
  </el-col>
</template>

<script lang="ts" setup>
import { useUserStore } from "../store.js";
const pi = useUserStore();
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  
};
const handleClose = (key: string, keyPath: string[]) => {
  
};
</script>
