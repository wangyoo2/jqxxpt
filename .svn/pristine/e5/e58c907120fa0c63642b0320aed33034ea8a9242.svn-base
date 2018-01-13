<template>
    <el-row>
        <el-col :span="24" align="left" class="toolbar" v-if="$route.query.type" >
            <el-col :span="12" v-if="$route.query.type==1 ||$route.query.type==2">
                <el-button type="primary" icon="fa-download" @click="DOWNLOAD_FILE($route.params.id)">下载</el-button>
                <!-- <el-button type="primary" icon="fa-print" @click="print" disabled>打印</el-button> -->
            </el-col>
            <el-col :span="12" align="right" v-if="$route.query.type==2">
                <el-button  type="primary" icon="arrow-left" @click="$router.back()">返回</el-button>
            </el-col>
        </el-col>
        <el-col :span="24">
              <pdf-viewer :src="`${imageUrl}/static/PDF/${$route.params.id}.pdf`"></pdf-viewer>
        </el-col>
    </el-row>
</template>

<script>
import { mapMutations } from 'vuex'
import pdfViewer from 'components/pdf/viewer'
export default {
    components:{pdfViewer},
    methods:{
        ...mapMutations([
            'DOWNLOAD_FILE'
        ]),
    }
}
</script>
<style lang="scss">
.pdfViewer .page{
    border: 0!important;
}
</style>
