<template>
  <h1 class="font-bold text-3xl" style="margin-bottom: 10px">图书查询</h1>
  <el-row>
    <el-col span="" style="margin-right: 10px">
      <el-form-item label="图书名称" label-width="120px">
        <el-input v-model="bookinf.bookname" />
      </el-form-item>
    </el-col>
  </el-row>

  <el-table :data="filterTableData" height="700" style="width: 100%">
    <el-table-column prop="" label="" width="80" />
    <el-table-column prop="id" label="图书编号" width="180" />
    <el-table-column prop="bookName" label="图书名称" min-width="180" />
    <el-table-column prop="bookType" label="图书类型" width="180" />
    <el-table-column prop="author" label="图书作者" width="180" />
    <el-table-column prop="press" label="出版社" min-width="180" />
    <el-table-column prop="price" label="价格" width="180" />
    <el-table-column prop="language" label="语言" width="180" />
    <el-table-column prop="isBorrow" label="是否被借阅">
      <template v-slot="scope">
        <span v-if="scope.row.isBorrow == 0">否</span>
        <span v-else>是</span>
      </template>
    </el-table-column>
  </el-table>
</template>
  
  <script lang="ts" setup>
import { reactive } from "vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useUserStore } from "../store.js";
const pi = useUserStore();
//一个计算属性，用来显示满足输入条件的数据
const filterTableData = ref(
  computed(() =>
    data.value.filter(
      (da1) =>
        (!bookinf.bookname && !bookinf.bookid) ||
        // @ts-ignore
        (bookinf.bookname &&
          da1.bookName.toLowerCase().includes(bookinf.bookname.toLowerCase()))
    )
  )
);
const router = useRouter();
const formInline = reactive({
  user: "",
  region: "",
  date: "",
  regin: "",
  is_borrow: "",
});
const bookinf = reactive({
  bookname: "",
  bookid: "",
});
//静态测试数据
let data = ref([]);

const getbook = () => {
  axios({
    method: "get",
    url: "/dev/book/select",
  }).then(function (response) {
    console.log(response)
    data.value = response.data;
    pi.my_books = response.data;
  });
};
getbook();
</script>
  