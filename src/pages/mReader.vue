<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加读者"
    width="80%"
    :before-close="handleClose"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="读者卡号">
        <el-input v-model="reader.cardNum" placeholder="必填" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="reader.password" placeholder="必填" />
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="reader.nickname" placeholder="必填" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="reader.gender" placeholder="必选">
          <el-option label="男" value="1" />
          <el-option label="女" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="身份">
        <el-select v-model="reader.gender" placeholder="必选" >
          <el-option label="教师" value="1" />
          <el-option label="学生" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="真实姓名">
      <el-input v-model="reader.username" placeholder="必填" />
    </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="reader.phoneNum" placeholder="必填" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="reader.email" placeholder="必填" />
      </el-form-item>
      <el-form-item label="学院">
        <el-input v-model="reader.college" placeholder="必填" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addReaderApi">保存</el-button>
        <el-button @click="dialogVisible = false"> 取消 </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <div>
    <h1 class="font-bold text-3xl" style="margin-bottom: 10px">读者管理</h1>
    <el-table :data="data" height="740" style="width: 100%">
      <el-table-column fixed="right" label="">
        <template #default="scope">
          <el-button type="danger" size="small" @click="DeletereaderApi(scope.row)"> 删除 </el-button>
        </template>
      </el-table-column>
      <el-table-column fixed label="" width="120">
        <template #default="scope">
          <router-link to="/Badmin/mr">
            <el-button type="success" size="small" @click="chooseBook(scope.row)"> 修改 </el-button>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="cardNum" label="读者卡号" width="180" />
      <el-table-column prop="nickname" label="用户名" width="180" />
      <el-table-column prop="username" label="真实姓名" width="180" />
      <el-table-column prop="gender" label="性别" width="80">
        <template v-slot="scope">
        <span v-if="scope.row.gender == 0">女</span>
        <span v-else>男</span>
      </template>
      </el-table-column>
      <el-table-column prop="identity" label="身份" width="180">
        <template v-slot="scope">
        <span v-if="scope.row.identity == 0">学生</span>
        <span v-else>教师</span>
      </template>
      </el-table-column>
      <el-table-column prop="phoneNum" label="电话" min-width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="college" label="学院" width="180" />
      <el-table-column prop="" label="" />
    </el-table>
  </div>
  <el-button
    type="primary"
    @click="dialogVisible = true"
    style="width: 30%; height: 40px"
    class="text-3xl"
  >
    添加读者
  </el-button>
</template>
<script setup>
import { computed, ref, toRaw } from "vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import axios from "axios";
import { useUserStore } from "../store.js";
const pi = useUserStore();
const router = useRouter();
const dialogVisible = ref(false);
const reader = reactive({
  cardNum: "",
  password:"",
  nickname: "",
  username: "",
  gender: "1",
  phoneNum: "",
  email: "",
  college: "",
  identity: "0",
});
//读者信息
const data = ref([]);
//显示读者列表
const showReaderApi=()=>{
  axios({
    method: "get",
    url: "/dev/user/selectReader",
  }).then(function (response) {
    console.log(response.data)
    data.value = response.data;
    console.log(data)
  });
}
showReaderApi()

//点击修改读者后记录当前修改的读者
const chooseBook = (row) =>{
  pi.currentReader=row
  console.log(pi.currentReader)
}

//删除读者
const DeletereaderApi= async(row)=>{
  console.log(row.cardNum)
  await axios({
    method: "post",
    url: "/dev/user/deleteById",
    params:{cardNum: row.cardNum},
  })
}

//添加读者
const addReaderApi = ()=>{
  if(reader.cardNum==""||reader.password==""||reader.nickname==""||reader.username==""||reader.phoneNum==""||reader.email==""||reader.college==""){
    alert("请完善读者信息")
    return
  }
  let addreader = JSON.stringify(toRaw(reader))
  console.log(addreader)
  axios({
    method: "post",
    url: "/dev/user/addReader",
    data:addreader,
    headers: {
      "Content-Type": "application/json",
    },
  })
  dialogVisible.value=false
}
</script>