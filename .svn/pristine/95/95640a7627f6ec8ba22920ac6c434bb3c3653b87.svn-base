<template>
    <el-row>
        <el-col :span="24">
            <h3><p class="tc">疫苗使用情况（第四季度）</p></h3>
            <el-table :data="tableData" v-loading="loading" stripe border ref="table">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="category" label="疫苗品种"></el-table-column>
                <el-table-column prop="modifyTime" label="调苗时间">
                    <template scope="scope">{{scope.row.modifyTime | date('yyyy-MM-dd')}}</template>
                </el-table-column>
                <el-table-column prop="company" label="供货企业" sortable></el-table-column>
                <el-table-column prop="stockNum" label="上季度末存厂家疫苗数量（万毫升、万头份" sortable></el-table-column>
                <el-table-column prop="planNum" label="省局下达计划数量（万毫升、万头份）" sortable></el-table-column>
                <el-table-column prop="modifyNum" label="本季度从厂家调拨数量（万毫升、万头份）" sortable></el-table-column>
                <el-table-column prop="stockNumNow" label="本季度末厂家库存数量（万毫升、万头份" sortable></el-table-column>
                <el-table-column prop="vaccineID" label="疫苗批号" sortable></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
import { getListOfVaccine } from 'src/service/table'

export default {
    data() {
        return {
            loading: false, //列表load
            tableData: [], //表格数据
        }
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            this.loading = true;
            this.tableData = await getListOfVaccine();
            this.loading = false;
        }
    }
}
</script>
