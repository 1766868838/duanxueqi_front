<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="图书名称">
      <el-input v-model="form.bookName" />
    </el-form-item>
    <el-form-item label="图书类型">
      <el-select v-model="form.bookType" placeholder="please select">
        <el-option label="文学类" value="文学类" />
        <el-option label="经济学类" value="经济学类" />
        <el-option label="法学类" value="法学类" />
        <el-option label="历史类" value="历史类" />
        <el-option label="工学类" value="工学类" />
        <el-option label="统计学类" value="统计学类" />
      </el-select>
    </el-form-item>
    <el-form-item label="图书作者">
      <el-input v-model="form.author" />
    </el-form-item>
    <el-form-item label="图书出版社">
      <el-input v-model="form.press" />
    </el-form-item>
    <el-form-item label="图书语言">
      <el-input v-model="form.language" />
    </el-form-item>
    <el-form-item label="图书价格">
      <el-input v-model="form.price" />
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
      <el-button type="primary" @click="updateBook">确认修改</el-button>
      <router-link to="/Badmin/librarian" style="margin-left: 30px">
        <el-button> 取消 </el-button>
      </router-link>
    </el-form-item>
  </el-form>
</template>
  
  <script lang="ts" setup>
import { useRouter } from "vue-router";
import axios from "axios";
import { reactive, computed, ref, toRaw } from "vue";
import { useUserStore } from "../store.js";
const pi = useUserStore();
const router = useRouter();
// do not use same name with ref
const form = reactive({
  bookName: "",
  bookType: "",
  author: "",
  publicationDate: "",
  press: "",
  price: "",
  language: "",
  introduce: "",
  id:"",
});

//初始化修改界面
const init = () => {
  form.bookName = pi.currentBook.bookName;
  form.bookType = pi.currentBook.bookType;
  form.author = pi.currentBook.author;
  form.publicationDate = pi.currentBook.publicationDate;
  form.price = pi.currentBook.price;
  form.press = pi.currentBook.press;
  form.language = pi.currentBook.language;
  form.introduce = pi.currentBook.introduce;
  form.id=pi.currentBook.id
};
init();

//修改图书信息
const updateBook = async () => {
  let originDate = JSON.stringify(toRaw(pi.currentBook));
  let currentDate = JSON.stringify(toRaw(form));
  console.log(currentDate)
  await axios({
    method: "post",
    url: "/dev/book/update",
    data: currentDate,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res);
  });
  router.push("/Badmin/librarian");
};
</script>
  