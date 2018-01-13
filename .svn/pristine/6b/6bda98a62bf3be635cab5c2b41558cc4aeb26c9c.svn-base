<template>
    <el-row>
        <el-col :span="24">
            <h3><p class="tc">疫情报告</p></h3>
            <el-table :data="tableData" v-loading="loading" stripe border ref="table">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="name" label="养殖场"></el-table-column>
                <el-table-column prop="time" label="发病时间">
                    <template scope="scope">{{scope.row.time | date('yyyy-MM-dd hh:mm:ss')}}</template>
                </el-table-column>
                <el-table-column prop="category" label="畜禽种类"></el-table-column>
                <el-table-column prop="num" label="存栏数"></el-table-column>
                <el-table-column prop="sickNum" label="发病数（头/天）"></el-table-column>
                <el-table-column prop="deadNum" label="死亡数（头/天）"></el-table-column>
                <el-table-column prop="verifyStatus" label="核实情况"></el-table-column>
                <el-table-column prop="note" label="备注"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
import { getListOfEpideReport } from 'src/service/table'

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
            this.tableData = await getListOfEpideReport();
            this.loading = false;
        }
    }
}
</script>
