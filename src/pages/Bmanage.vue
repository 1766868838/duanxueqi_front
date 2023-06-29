<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="借书"
      width="80%"
      :before-close="handleClose"
    >
      <el-form :model="form" label-width="120px">
        <el-form-item label="图书名称">
          <el-input v-model="form.bookname" />
        </el-form-item>
        <div style="margin-bottom: 20px">
          <el-table
            :data="filterTableData"
            height="250"
            style="width: 100%"
            @select="con"
            @select-all="con"
          >
            <el-table-column prop="id" label="图书编号" width="180" />
            <el-table-column prop="bookName" label="图书名称" width="180" />
            <el-table-column prop="bookType" label="图书类型" width="180" />
            <el-table-column prop="author" label="图书作者" width="180" />
            <el-table-column prop="price" label="价格" width="180" />
            <el-table-column prop="language" label="语言" width="180" />
            <el-table-column prop="press" label="出版社" />
            <el-table-column fixed="right" type="selection" width="55" />
          </el-table>
        </div>
        <el-form-item label="借书卡">
          <el-input v-model="form.Bcard" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="borrowApi">确认借书</el-button>
          <el-button @click="dialogVisible = false"> 取消 </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog
      v-model="dialogVisible1"
      title="还书"
      width="80%"
      :before-close="handleClose"
    >
      <el-form :model="form" label-width="120px">
        <el-form-item label="还书类型">
          <el-select v-model="form.region" placeholder="please select">
            <el-option label="正常还书" value="正常还书" />
            <el-option label="延迟还书" value="延迟还书" />
            <el-option label="破损还书" value="破损还书" />
            <el-option label="丢失" value="丢失" />
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="returnbookApi">确认还书</el-button>
          <el-button @click="dialogVisible1 = false"> 取消 </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-row>
      <el-col :span="24">
        <h1 class="font-bold text-3xl">借阅管理</h1>
      </el-col>
    </el-row>
    <!-- 动态生成的书籍列表 -->
    <el-table :data="data" style="width: 100%" height="750">
      <el-table-column prop="bookName" label="图书名称" span="3" />
      <el-table-column prop="cardNum" label="借阅卡号" span="3" />
      <el-table-column prop="borrowName" label="借阅人" span="3" />
      <el-table-column prop="borrowDate" label="借阅时间" span="3" />
      <el-table-column prop="returnDate" label="还书时间" span="4" />
      <el-table-column prop="returnType" label="还书类型" span="4" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="choose(scope.row)"
          >
            还书
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      type="primary"
      @click="showcanBorrow"
      style="width: 30%; height: 40px"
      class="text-3xl"
    >
      借书
    </el-button>
  </div>
</template>
<script setup>
import { reactive, toRaw } from "vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const dialogVisible = ref(false);
const dialogVisible1 = ref(false);
import { useUserStore } from "../store.js";
let currentlist = ref({});
const pi = useUserStore();
let books = ref([]);
//一个计算属性，用来显示满足输入条件的数据
const filterTableData = ref(
  computed(() =>
    borrowdata.value.filter(
      (da1) =>
        (!form.bookname && !form.bookid) ||
        // @ts-ignore
        (form.bookname &&
          da1.bookName.toLowerCase().includes(form.bookname.toLowerCase()))
    )
  )
);
//可借阅书籍记录
const borrowdata = ref([]);
//全部借阅记录
const showdata=ref([])
let data = computed(()=>showdata.value);
const form = reactive({
  bookname: "",
  Bcard: "",
  region: "",
});
//显示可借阅书籍
const showcanBorrow = () => {
  dialogVisible.value = true;
  axios({
    method: "get",
    url: "/dev/book/selectUn",
  }).then(function (response) {
    console.log(response.data);
    pi.canBorrow = response.data;
    getbook();
    console.log(pi.canBorrow);
  });
};
//选中书籍
const con = (row) => {
  books = toRaw(row);
  console.log(books);
};
//发送借阅请求
const borrowApi = async () => {
  let curbook = books
  if (form.Bcard == "") {
    alert("请输入卡号");
    return;
  }
  await axios({
    method: "post",
    url: "/dev/borrow",
    data: {
      book: curbook,
      cardNum: form.Bcard,
    },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res.data)
    if(res.data==1){
      alert("借阅成功")
    }else if(res.data==2){
      alert("借阅失败，超出用户借阅上限")
    }else if(res.data==3){
      alert("借阅失败，该用户存在借书未还行为")
    }
  });
  dialogVisible.value=false
};
//获取可借阅书籍
const getbook = () => {
  borrowdata.value = pi.canBorrow;
};

//显示借阅记录
const showBorrowApi = () => {
  axios({
    method: "get",
    url: "/dev/selectBorrow",
  }).then(function (response) {
    console.log(response.data);
    showdata.value= response.data;
    console.log(showdata);
  });
};
showBorrowApi();
//选中还书
const choose = async (row) => {
  console.log(toRaw(row));
  currentlist = toRaw(row);
  dialogVisible1.value = true;
};
//确认还书
const returnbookApi = async () => {
  currentlist.returnType = form.region;
  let cur = JSON.stringify(currentlist);
  console.log(currentlist);
  await axios({
    method: "post",
    url: "/dev/returnBook",
    data: cur,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res);
  });
  dialogVisible1.value = false;
  showBorrowApi()
};
</script>
