<template>
  <div class="common-layout">
    <el-dialog v-model="dialogFormVisible" title="个人信息修改">
              <el-form :model="form">
                <el-form-item
                  label="姓名"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="form.user_name" autocomplete="off" />
                </el-form-item>
                <el-form-item
                  label="电话"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="form.phone" autocomplete="off" />
                </el-form-item>
                <el-form-item
                  label="性别"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="form.gender" autocomplete="off" />
                </el-form-item>
              </el-form>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >Cancel</el-button
                  >
                  <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
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
                  姓名
                </div>
              </template>
              kooriookami
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <iphone />
                  </el-icon>
                  电话
                </div>
              </template>
              18100000000
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <location />
                  </el-icon>
                  卡号
                </div>
              </template>
              2020212205258
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
              <el-tag size="small">男</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <office-building />
                  </el-icon>
                  借阅数量
                </div>
              </template>
              0/10
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <office-building />
                  </el-icon>
                  身份
                </div>
              </template>
              学生
            </el-descriptions-item>
          </el-descriptions>
          <el-row style="margin-top: 50px; border-bottom: 1px solid #ddd">
            <el-col :span="4">
                <div></div>
              </el-col>
            <el-col :span="4">
              <div>图书名称</div>
            </el-col>
            <el-col :span="3">
              <div>借书卡</div>
            </el-col>
            <el-col :span="3">
              <div>借阅人</div>
            </el-col>
            <el-col :span="5">
              <div>借阅时间</div>
            </el-col>
            <el-col :span="4">
                <div></div>
              </el-col>
          </el-row>
          <!-- 动态生成的书籍列表 -->
          <div
            v-for="item in data"
            :key="item.Bname"
            style="margin-top: 10px; border-bottom: 1px solid #ddd"
          >
            <el-row>
              <el-col :span="4">
                <div></div>
              </el-col>
              <el-col :span="4">
                <div>{{ item.Bname }}</div>
              </el-col>
              <el-col :span="3">
                <div>{{ item.Bcard }}</div>
              </el-col>
              <el-col :span="3">
                <div>{{ item.Bman }}</div>
              </el-col>
              <el-col :span="5">
                <div>{{ item.time }}</div>
              </el-col>
              <el-col :span="4">
                <div></div>
              </el-col>
            </el-row>
          </div>
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
import { reactive,computed, ref } from "vue";
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from "@element-plus/icons-vue";
//静态测试数据
const data = [
  {
    Bname: "红楼梦",
    Bcard: "2020212205258",
    Bman: "黄祚晟",
    time: "2021-04-05 21:42:35",
    BackTime: "2021-05-05 10:00:00",
    BackType: "正常还书",
  },
  {
    Bname: "西游记",
    Bcard: "2020212205258",
    Bman: "黄祚晟",
    time: "2021-05-01 16:42:35",
    BackTime: "2021-05-05 10:00:00",
    BackType: "正常还书",
  },
  {
    Bname: "三国演义",
    Bcard: "2020212205258",
    Bman: "黄祚晟",
    time: "2021-05-05 15:05:35",
    BackTime: "2021-05-05 10:00:00",
    BackType: "正常还书",
  },
];
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

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
  user_name: '',
  phone: '',
  card_num: '',
  gender: '',
  borrow: '',
  identity_type: '',
})
const update_inf=()=>{
    console.log(dialogFormVisible)
    dialogFormVisible.value=true;
    console.log(dialogFormVisible)
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