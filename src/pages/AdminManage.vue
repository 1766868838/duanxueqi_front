<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加管理员"
    width="80%"
    :before-close="handleClose"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="管理员账号">
        <el-input v-model="reader.cardNum" placeholder="必填" />
      </el-form-item>
      <el-form-item label="管理员密码">
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
      <el-form-item label="真实姓名">
      <el-input v-model="reader.username" placeholder="必填" />
    </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="reader.phoneNum" placeholder="必填" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="reader.email" placeholder="必填" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addReaderApi">保存</el-button>
        <el-button @click="dialogVisible = false"> 取消 </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog
    v-model="dialogVisible1"
    title="修改信息"
    width="80%"
    :before-close="handleClose"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="管理员密码">
        <el-input v-model="reader.password" placeholder="必填" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateManager">保存</el-button>
        <el-button @click="dialogVisible1 = false"> 取消 </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

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
            <el-form-item label="管理员类型">
              <el-select
                v-model="admininf.type"
                placeholder="请选择管理员类型"
              >
                <el-option label="系统管理员" value=3 />
                <el-option label="图书管理员" value=2 />
                <el-option label="全选" value="" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="dialogVisible=true">添加管理员</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="filterTableData" style="width: 100%" max-height="600">
            <el-table-column prop="" label="" width="400" />
            <el-table-column prop="cardNum" label="账号" width="180" />
            <el-table-column prop="username" label="管理员姓名" width="180" />
            <el-table-column prop="identity" label="管理员类型" width="180">
        <template v-slot="scope">
        <span v-if="scope.row.identity == 2">图书管理员</span>
        <span v-else>系统管理员</span>
      </template>
      </el-table-column>
            <el-table-column fixed="right" label="Operations"  >
              <template v-slot="scope">
                <el-button link type="primary" size="small" @click="chooseManager(scope.row)" v-if="scope.row.identity==2"
                  >修改密码</el-button
                >
                <el-button link type="danger" size="small" v-if="scope.row.identity==2" @click="DeletereaderApi(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script  setup>
import myaside from "../common/aside.vue";
import myheader from "../common/header.vue";
import { computed, reactive, toRaw } from "vue";
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "../store.js";
const pi = useUserStore();
//管理员数据
const reader = reactive({
  cardNum: "",
  password:"",
  nickname: "",
  username: "",
  gender: "1",
  phoneNum: "",
  email: "",
  college: "",
  identity: "2",
});
const dialogVisible = ref(false)
const dialogVisible1 = ref(false)
//一个计算属性，用来显示满足输入条件的数据
const filterTableData = ref(
  computed(() =>
    data.value.filter(
      (da1) =>
        !admininf.type ||
        // @ts-ignore
        da1.identity==admininf.type
    )
  )
);
const admininf = reactive({
  name: "",
  type: "",
});
const data = ref([]);
//显示管理员列表
const showAdminApi = () => {
  console.log(1)
  axios({
    method: "get",
    url: "/dev/user/selectManager",
  }).then(function (response) {
    console.log(response.data)
    data.value = response.data;
    console.log(data)
  });
};
showAdminApi();

//删除图书管理员
const DeletereaderApi= async(row)=>{
  console.log(row.cardNum)
  await axios({
    method: "post",
    url: "/dev/user/deleteById",
    params:{cardNum: row.cardNum},
  })
  alert("删除成功")
}

//添加管理员
const addReaderApi = ()=>{
  if(reader.cardNum==""||reader.password==""||reader.nickname==""||reader.username==""||reader.phoneNum==""||reader.email==""){
    alert("请完善管理员信息")
    return
  }
  let addreader = JSON.stringify(toRaw(reader))
  console.log(addreader)
  axios({
    method: "post",
    url: "/dev/user/addManager",
    data:addreader,
    headers: {
      "Content-Type": "application/json",
    },
  })
  dialogVisible.value=false
}
//选择管理员
const chooseManager = (row)=>{
  console.log(row)
  pi.currentManager=row
  reader.cardNum=pi.currentManager.cardNum
  dialogVisible1.value=true
}
//修改管理员信息
const updateManager = async()=>{
  let originDate = JSON.stringify(toRaw(pi.currentManager));
  let currentDate = JSON.stringify(toRaw(reader));
  await axios({
    method: "post",
    url: "/dev/user/update",
    data: currentDate,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res);
  });
  dialogVisible1.value=false
}
</script>
