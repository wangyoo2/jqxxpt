//webpack按需加载组件
const login = r => require(['../page/login'], r)
const index = r => require(['../page'], r)
const _404 = r => require(['../page/common/404'], r)
const empty = r => require(['../page/common/empty'], r)


//子路由
const children = [ {
    path:'', 
    redirect:'/review/株洲市畜禽养殖概况'
  }, 
  //pdf列表管理
  {
    path:'listview/:id', 
    component:r => require(['../page/pdf'], r)
  },
  //PDF預覽
  {
    path:'review/:id', 
    component:r => require(['../page/pdf/review'], r), 
  },
  //畜牧
  {
    path:'livestock', 
    component:empty,
    children:[
      //基本生产数据
      {
      path:'table',   
      component:r => require(['../page/livestock/table'], r)
    }]
  },
   //饲料监管
   {
    path:'feed', 
    component:empty,
    children: [
      {
        path:'table', 
        component:r => require(['../page/feed/table'], r)
      },{
        path:'addTable', 
        component:r => require(['../page/feed/addTable'], r)
      },{
        path:'editTable', 
        component:r => require(['../page/feed/editTable'], r)
      } 
    ]
  },
  //兽药监管
  {
    path:'meat', 
    component:empty,
    children:[{
        path:'table', 
        component:r => require(['../page/meat/table'], r)
    }]
  },
  //动物疫病防控
  {
    path:'disease', 
    component:empty,
    children:[
      //强制免疫
      {
        path:'immune', 
        component:empty,
        children:[{
          path:'table', 
          component:r => require(['../page/disease/immune/table'], r)
        }]
      },
      //疫苗管理
      {
        path:'vaccine', 
        component:empty,
        children:[{
          path:'table', 
          component:r => require(['../page/disease/vaccine/table'], r)
        }]
      },
      //疫情报告及处理
      {
        path:'report', 
        component:empty,
        children:[{
          path:'table', 
          component:r => require(['../page/disease/report/table'], r)
        },
        {
          path:'process', 
          component:r => require(['../page/disease/report/process'], r)
        }]
      },
  ]
  },
  {
    path:'*', 
    component:_404
  } 
]

// 配置路由
export default [ {
  path:'/login', 
  component:login
},  {
  path:'/',  
  component:index, 
  children:children, 
  meta: {
    requireAuth:true
  }
},  {
  path:'*', 
  component:_404
}, ]
