<template>
    <el-row>
        <el-col :span="24">
            <h3><p class="tc">疫情处置</p></h3>
            <el-table :data="tableData" v-loading="loading" stripe border ref="table">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="happentime" label="疫情发生时间" width="250">
                    <template scope="scope">{{scope.row.happentime | date('yyyy-MM-dd hh:mm:ss')}}</template>
                </el-table-column>
                <el-table-column prop="address" label="地点" width="100"></el-table-column>
                <el-table-column prop="num" label="疫点数（个）" width="80"></el-table-column>
                <el-table-column prop="dealtime" label="扑杀时间">
                     <template scope="scope">{{scope.row.dealtime | date('yyyy-MM-dd hh:mm:ss')}}</template>
                </el-table-column>
                <el-table-column prop="dealcategory" label="扑杀种类"></el-table-column>
                <el-table-column prop="dealNum" label="扑杀数量"></el-table-column>
                <el-table-column prop="dealMethod" label="无害化处理方式"></el-table-column>
                <el-table-column prop="note" label="备注"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
import { getListOfEpideDea } from 'src/service/table'

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
            this.tableData = await getListOfEpideDea();
            this.loading = false;
        }
    }
}
</script>
