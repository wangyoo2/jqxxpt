<template>
    <el-row>
        <el-col :span="24">
            <h3><p class="tc">湖南省株洲市兽药经营企业门店统计</p></h3>
            <el-form :inline="true" :model="search" @submit.prevent="initData" ref="search">
                <el-form-item label="企业名称" prop="name">
                    <el-input v-model="search.name"></el-input>
                </el-form-item>
                <el-form-item label="下辖区县" prop="area">
                    <el-select v-model="search.area" placeholder="请选择">
                        <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="initData">查询</el-button>
                    <el-button type="primary" @click="resetSearch">清除查询</el-button>
                </el-form-item>
            </el-form>
            
            <el-table :data="tableData" v-loading="loading" stripe border ref="table">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="name" label="兽药经营企业名称" width="250" sortable></el-table-column>
                <el-table-column prop="category" label="经营许可证号" width="100"></el-table-column>
                <el-table-column prop="responsPerson" label="经营企业地址" width="80"></el-table-column>
                <el-table-column prop="address" label="通讯地址" sortable></el-table-column>
                <el-table-column prop="phone" label="联系人"></el-table-column>
                <el-table-column prop="phone" label="联系人电话"></el-table-column>
                <el-table-column prop="phone" label="区县"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
import { getList } from 'src/service/table'

export default {
    data() {
        return {
            pid:this.$route.params.id,
            loading: false, //列表load
            tableData: [], //表格数据
            options:['株洲市','株洲县','醴陵市','茶陵县','攸县','炎陵县'],
            search: {
                name: '',
            }
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            this.loading = true;
            let { page, pageSize } = this;
            this.tableData = await getList();
            this.loading = false;
        }
    }
}
</script>
