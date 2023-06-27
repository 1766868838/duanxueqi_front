<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="还书类型">
            <el-select v-model="form.region" placeholder="please select">
                <el-option label="正常还书" value="0" />
                <el-option label="延迟还书" value="1" />
                <el-option label="破损还书" value="2" />
                <el-option label="丢失" value="3" />
            </el-select>
        </el-form-item>
        <el-form-item label="备注">
            <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认借书</el-button>
            <router-link to="/Badmin/Bmanage" style="margin-left: 30px;">
            <el-button>
               取消
            </el-button>
            </router-link>
        </el-form-item>
    </el-form>
</template>
  
<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
// do not use same name with ref
const form = reactive({
    region: '',
    desc: ''
})

const onSubmit = () => {
    //存入数据库

    //返回页面
    router.push("/Badmin/Bmanage");
}
</script>
  