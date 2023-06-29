<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加图书"
    width="80%"
    :before-close="handleClose"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="图书名称">
        <el-input v-model="form.bookName" placeholder="必填"/>
      </el-form-item>
      <el-form-item label="图书编号">
        <el-input v-model="form.id" placeholder="必填"/>
      </el-form-item>
      <el-form-item label="图书类型">
        <el-select v-model="form.bookType" placeholder="必选">
          <el-option label="文学类" value="文学类" />
          <el-option label="经济学类" value="经济学类" />
          <el-option label="法学类" value="法学类" />
          <el-option label="历史类" value="历史类" />
          <el-option label="工学类" value="工学类" />
          <el-option label="统计学类" value="统计学类" />
        </el-select>
      </el-form-item>
      <el-form-item label="图书作者">
        <el-input v-model="form.author" placeholder="必填"/>
      </el-form-item>
      <el-form-item label="图书出版社">
        <el-input v-model="form.press" placeholder="必填"/>
      </el-form-item>
      <el-form-item label="图书语言">
        <el-input v-model="form.language" placeholder="必填"/>
      </el-form-item>
      <el-form-item label="图书价格">
        <el-input v-model="form.price" placeholder="必填"/>
      </el-form-item>
      <el-form-item label="图书介绍">
        <el-input v-model="form.introduce" type="textarea" />
      </el-form-item>
      <el-form-item label="出版日期">
      <el-date-picker
        v-model="form.publicationDate"
        type="date"
        placeholder=""
        clearable
      />
    </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addBookApi">保存</el-button>
        <router-link to="/Badmin/librarian" style="margin-left: 30px">
          <el-button @click="dialogVisible=false"> 取消 </el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </el-dialog>
  <h1 class="font-bold text-3xl" style="margin-bottom: 10px">图书管理</h1>

  <el-table :data="data" height="740" style="width: 100%">
    <el-table-column fixed="right" label="" width="120">
      <template #default="scope">
        <el-button type="danger" size="small" @click="DeletebookApi(scope.row)"> 删除 </el-button>
      </template>
    </el-table-column>
    <el-table-column fixed label="" width="120">
      <template #default="scope">
        <router-link to="/Badmin/minfo">
          <el-button type="success" size="small" @click="chooseBook(scope.row)"> 修改 </el-button>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column prop="id" label="图书编号" width="180" />
    <el-table-column prop="bookName" label="图书名称" width="180" />
    <el-table-column prop="bookType" label="图书类型" width="180" />
    <el-table-column prop="author" label="图书作者" width="180" />
    <el-table-column prop="press" label="出版社" min-width="180" />
    <el-table-column prop="publicationDate" label="出版日期" width="180" />
    <el-table-column prop="price" label="价格" width="80" />
    <el-table-column prop="language" label="语言" />
  </el-table>
  <el-button
    type="primary"
    @click="dialogVisible = true"
    style="width: 30%; height: 40px"
    class="text-3xl"
  >
    添加图书
  </el-button>
</template>
<script setup>
import { ref, toRaw } from "vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import axios from "axios";
import { useUserStore } from "../store.js";
const pi = useUserStore();
const router = useRouter();
const dialogVisible = ref(false);
const form = reactive({
  bookName: "",
  id: "",
  bookType: "文学类",
  author: "",
  publicationDate: "",
  press: "",
  price: "",
  language: "",
  introduce: "",
});
//图书列表
const data = ref([]);

const getbook = () => {
  axios({
    method: "get",
    url: "/dev/book/select",
  }).then(function (response) {
    data.value = response.data;
    pi.my_books=response.data;
  });
};
getbook()

//删除图书
const DeletebookApi= async(row)=>{
  console.log(row.id)
  await axios({
    method: "post",
    url: "/dev/book/deleteById",
    params:{id: row.id},
  })
  alert("删除成功")
}

//点击修改图书后记录当前修改的图书
const chooseBook = (row) =>{
  pi.currentBook=row
  console.log(pi.currentBook)
}
//增加图书
const addBookApi = ()=>{
  if(form.bookName==""||form.id==""||form.bookType==""||form.author==""||form.publicationDate==""||form.press==""||form.price==""||form.language==""){
    alert("请完善图书信息")
    return
  }
  let addbook = JSON.stringify(toRaw(form))
  console.log(addbook)
  axios({
    method: "post",
    url: "/dev/book/addBook",
    data:addbook,
    headers: {
      "Content-Type": "application/json",
    },
  })
  dialogVisible.value=false
}
</script>