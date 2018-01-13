<template>
    <el-menu :default-active="$route.fullPath" router :collapse="collapse" unique-opened>
        <template v-for="menu in menus">
            <submenu :menu="menu" v-if="menu.subMenu && menu.subMenu.length>0" :key="menu.id"></submenu>
            <el-menu-item :index="menu.menuUrl || ''+menu.id" :route="{path:menu.menuUrl}" v-else :key="menu.id">
                <template slot="title">
                    <i :class="'el-icon-'+ (menu.icon || 'menu')" v-if="menu.menuLevel==1"></i>
                    {{menu.menuName}}
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    import submenu from './submenu'
    export default {
        components: {
            submenu
        },
        props: ['menus', 'collapse']
    }
</script>
<style lang="scss">
$color:rgba(75,167,0,.8);
.el-menu-item.is-active{
    color:#fff;
    background: #4BA700;
}

</style>

