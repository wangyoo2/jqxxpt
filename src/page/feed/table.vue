<template>
    <el-row>
        <el-col :span="24">
            <h3><p class="tc">株洲市饲料和饲料添加剂生产企业花名册</p></h3>
            <el-form :inline="true" :model="search" @submit.prevent="initData" ref="search">
                <el-form-item label="单位名称" prop="name">
                    <el-input v-model="search.name"></el-input>
                </el-form-item>
                <el-form-item label="企业类型" prop="category">
                    <el-input v-model="search.category"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="initData">查询</el-button>
                    <el-button type="primary" @click="resetSearch">清除查询</el-button>
                    <el-button type="primary" @click="addData">添加</el-button>
                </el-form-item>
            </el-form> 
            <el-table :data="tableData" v-loading="loading" stripe border ref="table">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="name" label="单位名称" width="250" sortable></el-table-column>
                <el-table-column prop="category" label="企业类型" width="100" sortable></el-table-column>
                <el-table-column prop="responsPerson" label="负责人" width="80"></el-table-column>
                <el-table-column prop="address" label="通讯地址" sortable></el-table-column>
                <el-table-column prop="phone" label="联系人及电话"></el-table-column>
                <el-table-column prop="zipCode" label="邮编" width="80" sortable></el-table-column>
                <el-table-column prop="zipCode" label="邮编" width="80" sortable>
                    <template slot-scope="scope">
                        <el-button @click="editFeedCompany(scope.row)" type="text" size="small">编辑</el-button>
                     </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
import { getListOfFeed } from 'src/service/table'

export default {
    data() {
        return {
            pid:this.$route.params.id,
            loading: false, //列表load
            tableData: [], //表格数据
            search: {
                name:'',
                category:''
            }
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            this.loading = true;
            this.tableData = await getListOfFeed();
            this.filterData();
            this.loading = false;
        },
        async addData() {
            this.$router.push({path:'/feed/addTable'})
        },
        resetSearch() {
            this.$refs.search.resetFields();
            this.initData();
        },
        editFeedCompany(rowData) {
            this.$router.push({path:'/feed/editTable',   query: {index: rowData}})
        },
        filterData(){
            let{name,category}= this.search;
            if(name) this.tableData=this.tableData.filter(v=> v.name&&v.name.indexOf(name)!=-1)
            if(category) this.tableData=this.tableData.filter(v=> v.category===category)
        }

    }
}
</script>
