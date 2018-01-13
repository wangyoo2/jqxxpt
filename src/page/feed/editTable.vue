<template>
<el-form ref="form" :model="form"  label-width="80px">
  <el-form-item label="企业名称">
    <el-input v-model="form.name">{{form.name}}</el-input>
  </el-form-item>
 <!--  <el-form-item label="企业类型">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item> -->
  <el-form-item label="负责人">
    <el-input v-model="form.person"></el-input>
  </el-form-item>
    <el-form-item label="地址">
    <el-input v-model="form.address"></el-input>
  </el-form-item>
    <el-form-item label="电话">
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
    <el-form-item label="邮编">
    <el-input v-model="form.zipcode"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">添加</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  import {addData} from 'src/service/feed'

  export default {
    data() {
      return {
        form: {
          name: this.$route.query.index.name,
          region: '',
          person: '',
          address: '',
          phone: '',
          zipcode:'' 
            }
      }
    },
    created() {

      console.log(this.$route.query.index.name);
    },
    methods: {
      onSubmit() {
        let{name, region, person, address, phone, zipcode} = this.form;
        addData({name, region, person, address, phone, zipcode})
        this.$router.push({path:'/feed/table'});
      }
    }
  }
</script>