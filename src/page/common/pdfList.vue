<template>
    <el-row>
        <el-col :span="24" class="toolbar">
            <el-button type="primary" icon="plus" @click="handleAdd()">新增</el-button>
        </el-col>
        <el-col :span="24">
            <el-table :data="tableData" @selection-change="selsChange" v-loading="loading" stripe border ref="table">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="name" label="名称">
                      <template scope="scope">
                        <router-link :to="{ path: '/review/渔业概况', query: { type: 2 }}" class="a-title">{{scope.row.name}}</router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="createDate" label="上传时间" width="150"></el-table-column>
                <el-table-column label="操作" width="300">
                    <template scope="scope">
                        <el-button size="small" icon="download" disabled>下载</el-button>
                        <el-button size="small" icon="edit" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button type="danger" icon="delete" size="small" @click="handleDel(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <el-dialog title="新增菜单" v-model="addVisible">
            <edit @success="handleSaveSuccess" :model="editModel" v-if="addVisible"></edit>
        </el-dialog>
        <el-dialog title="修改菜单" v-model="editVisible">
            <edit @success="handleSaveSuccess" :model="editModel" v-if="editVisible"></edit>
        </el-dialog>
    </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getListPage, batchRemove } from 'src/service/pdf'
import selectMenu from 'src/components/select/menu'
import edit from './edit'

export default {
    components: { edit, selectMenu },
    data() {
        return {
            loading: false, //列表load
            page: 1,
            pageSize: 10,
            pageSizes: [10, 20, 30, 50, 100],
            total: 88,
            tableData: [], //表格数据
            sels: [],
            addVisible: false,
            editVisible: false,
            editModel: null, //编辑数据
            search: {
                name: '',
            }
        }
    },
    created() {
        this.initData();
    },
    methods: {
        selsChange: function(sels) {
            this.sels = sels;
        },
        async initData() {
            this.loading = true;
            let { page, pageSize } = this;
            let { name, addr } = this.search;
            let { total, resultList } = await getListPage({ name, page, pageSize });
            this.total = total;
            this.tableData = resultList;
            this.loading = false;
        },
        resetSearch() {
            this.$refs.search.resetFields();
            this.initData();
        },
        handleAdd(row) {
            this.editModel = {
                id: '',
                pids: row ? [...row.pids, row.id] : [],
                name: '',
                url: '',
                icon: '',
                disable: 'no',
                order: '',
                remark: '',
            }
            this.addVisible = true;
        },
        handleEdit(row) {
            this.editModel = { ...row, disable: row.disable || 'no' };
            this.editVisible = true;
        },
        handleSaveSuccess() {
            this.addVisible = false;
            this.editVisible = false;
            this.initData();
        },
        async handleDel(row) {
            await this.$confirm('确认删除吗？', '提示');
            await batchRemove({ ids: [row.id] });
            this.$message.success('删除成功');
            this.initData();
        },
        //删除多个
        async batchRemove() {
            const ids = this.sels.map(v => v.id);
            if (ids.length > 0) {
                await this.$confirm('确认删除吗？', '提示');
                await batchRemove({ ids });
                this.$message.success('删除成功');
                this.initData();
            } else {
                this.$message.warning('请选择需要删除的数据');
            }
        }
    }
}
</script>
