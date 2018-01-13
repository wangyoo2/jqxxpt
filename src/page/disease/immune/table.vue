<template>
    <el-row>
        <el-col :span="24">
            <h3><p class="tc">免疫情况（1-11月）</p></h3>
            <el-table :data="tableData" v-loading="loading" stripe border ref="table" :span-method="objectSpanMethod">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="sickType" label=""></el-table-column>
                <el-table-column prop="category" label="免疫种类"></el-table-column>
                <el-table-column prop="shouldAnimal" label="应免数量（万头、万只、万羽）"></el-table-column>
                <el-table-column prop="haveAnimal" label="已免数量（万头、万只、万羽）"></el-table-column>
                <el-table-column prop="immuneHave" label="已使用疫苗数（万毫升、万头份）"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
import { getListOfImmune } from 'src/service/table'

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
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
            if (rowIndex % 2 === 0) {
                return {
                rowspan: 2,
                colspan: 1
                };
            } else {
                return {
                rowspan: 0,
                colspan: 0
                };
            }
            }
        },
        async initData() {
            this.loading = true;
            this.tableData = await getListOfImmune();
            this.loading = false;
        }
    }
}
</script>
