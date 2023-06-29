<template>
  <div class="common-layout">
    <el-dialog v-model="dialogFormVisible" title="个人信息修改">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.nick_name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" value="1" />
            <el-option label="女" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="update_inf_confirm">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-container>
      <el-header style="background: #333; padding: 0; height: 7vh">
        <myheader></myheader>
      </el-header>
      <el-container>
        <el-aside width="200px" style="height: 93vh; background: #545c64">
          <myaside></myaside>
        </el-aside>
        <el-main>
          <el-descriptions
            class="margin-top"
            title="个人信息"
            :column="3"
            :size="size"
            border
          >
            <template #extra>
              <el-button type="primary" @click="update_inf">修改</el-button>
            </template>

            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <user />
                  </el-icon>
                  用户名
                </div>
              </template>
              {{ pi.user_inf.nickname }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <Tickets />
                  </el-icon>
                  姓名
                </div>
              </template>
              {{ pi.user_inf.username }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <Tickets />
                  </el-icon>
                  卡号
                </div>
              </template>
              {{ pi.user_inf.cardNum }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <tickets />
                  </el-icon>
                  性别
                </div>
              </template>
              <el-tag size="small" v-if="pi.user_inf.gender == 1">男</el-tag>
              <el-tag size="small" type="danger" v-if="pi.user_inf.gender == 0"
                >女</el-tag
              >
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle"><Iphone /></el-icon>
                  电话
                </div>
              </template>
              {{ pi.user_inf.phoneNum }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle"><Message /></el-icon>
                  邮箱
                </div>
              </template>
              {{ pi.user_inf.email }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle"><UserFilled /></el-icon>
                  身份
                </div>
              </template>
              <el-tag size="small" v-if="pi.user_inf.identity == 0"
                >学生</el-tag
              >
              <el-tag size="small" v-if="pi.user_inf.identity == 1"
                >教师</el-tag
              >
              <el-tag size="small" v-if="pi.user_inf.identity == 2"
                >图书管理员</el-tag
              >
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <office-building />
                  </el-icon>
                  学院
                </div>
              </template>
              {{ pi.user_inf.college }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle"><Notebook /></el-icon>
                  借阅数量
                </div>
              </template>
              {{ pi.user_inf.borrowing }}/{{ 10 + pi.user_inf.identity * 5 }}
            </el-descriptions-item>
          </el-descriptions>
          <el-table :data="data" style="width: 100%;margin-top: 20px;" max-height="550">
            <el-table-column prop="bookName" label="图书名称" span="3" />
            <el-table-column prop="bookType" label="图书类型" span="3" />
            <el-table-column prop="author" label="作者" span="3" />
            <el-table-column prop="press" label="出版社" span="3" />
            <el-table-column prop="borrowDate" label="借阅时间" span="4" />
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
</script>

<script lang="ts" setup>
import myaside from "../common/aside.vue";
import myheader from "../common/header.vue";
import axios from "axios";
import { reactive, computed, ref, toRaw } from "vue";
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from "@element-plus/icons-vue";
import { useUserStore } from "../store.js";
const pi = useUserStore();
//静态测试数据
const data=computed(()=> pi.borrow_data)
const size = ref("");
const iconStyle = computed(() => {
  const marginMap = {
    large: "8px",
    default: "6px",
    small: "4px",
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  };
});
const blockMargin = computed(() => {
  const marginMap = {
    large: "32px",
    default: "28px",
    small: "24px",
  };
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  };
});

const dialogFormVisible = ref(false);
const formLabelWidth = "140px";
const form = reactive({
  nick_name: "",
  phone: "",
  card_num: "",
  gender: "",
  borrow: "",
  identity_type: "",
  college: "",
  email: "",
});
const update_inf = () => {
  dialogFormVisible.value = true;
};
const update_inf_confirm = async() =>{
  console.log(form)
  if(form.nick_name!=""){
    // @ts-ignore
    pi.user_inf.nickname=form.nick_name
  }
  if(form.phone!=""){
    // @ts-ignore
    pi.user_inf.phoneNum=form.phone
  }
  if(form.gender!=""){
    // @ts-ignore
    pi.user_inf.gender=form.gender
  }
  if(form.email!=""){
    // @ts-ignore
    pi.user_inf.email=form.email
  }
  console.log(toRaw(pi.user_inf))
  let currentuserinf = toRaw(pi.user_inf)
  await axios({
    method: "post",
    url: "/dev/user/update",
    data: currentuserinf,
    headers: {
      "Content-Type": "application/json",
    },
  })

 
  dialogFormVisible.value = false;
}
</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>