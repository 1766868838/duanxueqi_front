<template>
    <div class="common-layout">
      <el-container>
        <el-header style="background:#333; padding: 0;height: 7vh;">
            <myheader></myheader>
        </el-header>
        <el-container>
          <el-aside width="200px" style="height:93vh;background:#545c64;">
            <myaside></myaside>
        </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </template>

<script lang="ts">

</script>

<script lang="ts" setup>
import myaside from '../common/aside.vue'
import myheader from '../common/header.vue'
</script>