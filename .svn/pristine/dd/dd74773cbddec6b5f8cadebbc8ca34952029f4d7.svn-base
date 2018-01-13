<template>
    <el-form :model="model" :rules="rules" label-width="80px" ref="form" class="c-form">
        <el-form-item label="名称" prop="name">
            <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="上传文件" prop="order">
             <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
      
        <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="loading">保存</el-button>
            <el-button @click="$refs.form.resetFields()">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { save, nextOrder } from 'src/service/menu'
import selectMenu from 'src/components/select/menu'
import selectIcon from 'src/components/select/icon'

export default {
    components: { selectMenu, selectIcon },
    props: {
        model: {
            type: Object,
            default() {
                return {
                    name: '',
                    fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
                }
            }
        }
    },
    data() {
        return {
            loading: false,
            rules: {
                name: [
                    { required: true, message: '请填写名称', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async (valid) => {
                if (valid) {
                    try {
                        this.loading = true;
                        let data = await save(this.model);
                        if (data.code === 200) {
                            this.$message.success(data.msg);
                            this.visible = false;
                            this.$emit('success')
                        }
                    }finally {
                        this.loading = false;
                    }
                }
            });

        },
    }
}
</script>