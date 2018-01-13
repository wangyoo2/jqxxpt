<template>
    <el-row>
        <el-col :span="24">
            <!-- <h3><p class="tc">湖南省株洲市畜牧基本生产数据</p></h3> -->
            <el-form :inline="true" :model="search" @submit.prevent="initData" ref="search">
                <el-form-item label="企业名称" prop="name">
                    <el-input v-model="search.name"></el-input>
                </el-form-item>
                <el-form-item label="区域" prop="area" @change="initData">
                    <el-select v-model="search.area" clearable placeholder="请选择">
                        <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="畜禽类型" prop="category">
                    <el-select v-model="search.category" clearable placeholder="请选择">
                        <el-option v-for="item in options2" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="initData">查询</el-button>
                    <el-button type="primary" @click="resetSearch">清除查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" v-loading="loading" stripe border ref="table" height="800">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="framName" label="养殖场名称" width="250"></el-table-column>
                <el-table-column prop="area" label="区域" width="100"></el-table-column>
                <el-table-column prop="category" label="畜禽类型" width="80"></el-table-column>
                <el-table-column prop="address" label="地址" width="150"></el-table-column>
                <el-table-column prop="responsName" label="户主姓名"></el-table-column>
                <el-table-column prop="phone" label="联系电话" width="120"></el-table-column>
                <el-table-column label="存栏数" align="center">
                    <el-table-column prop="inNum" label="存栏母畜" align="center"></el-table-column>
                    <el-table-column prop="inNumYear" label="年存栏数" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="outNumYear" label="年出栏数" align="center"></el-table-column>
                <el-table-column prop="remouldStatus" label="是否已完成污染治理设施改造" align="center"></el-table-column>
                <el-table-column label="其    中" align="center">
                    <el-table-column prop="abandonStatus" label="废弃物贮存处理设施" align="center"></el-table-column>
                    <el-table-column prop="ywgsStatus" label="雨污分流、干湿分离设施" align="center"></el-table-column>
                    <el-table-column prop="shitStatus" label="粪污处理处置模式" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="hscArea" label="化尸池容积（m³）" align="center"></el-table-column>
                <el-table-column prop="zqcArea" label="沼气池容积（m³）" align="center"></el-table-column>
                <el-table-column prop="cdcArea" label="沉淀池容积（m³）" align="center"></el-table-column>
                <el-table-column prop="shtArea" label="生化塘容积（m³）" align="center"></el-table-column>
                <el-table-column prop="ptzhArea" label="配套种植面积（亩）" align="center"></el-table-column>
                <el-table-column prop="shStatus" label="是否环保备案或通过环评" align="center"></el-table-column>
                <el-table-column prop="jyStatus" label="禁、限养情况" align="center"></el-table-column>
            </el-table>
        </el-col>
        <!-- <el-col :span="24" class="toolbar">
            <el-pagination @size-change="pageSize=$event;initData()" @current-change="initData" layout="sizes,prev, pager, next" :current-page.sync="page" :page-size="pageSize" :total="total" class="fr"></el-pagination>
        </el-col> -->
    </el-row>
</template>

<script>
import { getListOfBaseData } from 'src/service/table'

export default {
    data() {
        return {
            loading: false, //列表load
            page: 1,
            pageSize: 10,
            pageSizes: [5,20, 30, 50, 100],
            total: 88,
            tableData: [], //表格数据
            options:['天元区','荷塘区','芦淞区','云龙区','株洲县','醴陵市','茶陵县','攸县','炎陵县'],
            options2:['肉牛','肉羊','肉鸡','蛋鸡','鸭','鹅','鹌鹑'],
            search: {
                name: '',
                area:'',
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
            let { page, pageSize } = this;
            let {name,area,type} = this.search;
            this.tableData = await getListOfBaseData({name,area,type});
            this.filterData();
            this.loading = false;
        },
        resetSearch() {
            this.$refs.search.resetFields();
            this.initData();
        },
        filterData(){
            let {name,area , category} = this.search;
            if(name) this.tableData = this.tableData.filter(v => v.framName && v.framName.indexOf(name) !== -1)
            if(area) this.tableData = this.tableData.filter(v => v.area === area)
            if(category) this.tableData = this.tableData.filter(v => v.category === category)
        }
    }
}
</script>
