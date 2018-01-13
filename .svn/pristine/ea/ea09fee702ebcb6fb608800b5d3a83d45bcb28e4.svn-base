<template>
    <el-submenu :index="''+menu.id">
        <template slot="title">
            <i :class="'el-icon-'+ (menu.icon || 'menu')" v-if="menu.menuLevel==1"></i>
            <span slot="title">{{menu.menuName}}</span>
        </template>
        <template v-for="menu2 in menu.subMenu">
            <submenu :menu="menu2" v-if="menu2.subMenu && menu2.subMenu.length>0" :key="menu2.id"></submenu>
            <el-menu-item :index="menu2.menuUrl || ''+menu2.id" :route="{path:menu2.menuUrl}" v-else :key="menu2.id">
                <template slot="title">
                    <i :class="'el-icon-'+menu2.icon" v-if="menu2.menuLevel==1" ></i>
                    <span :title="menu2.menuName">{{menu2.menuName}}</span>
                </template>
            </el-menu-item>
        </template>
    </el-submenu>
</template>

<script>
// import submenu from './submenu'
export default {
    name:'submenu',
    props: ['menu'],
}
</script>

