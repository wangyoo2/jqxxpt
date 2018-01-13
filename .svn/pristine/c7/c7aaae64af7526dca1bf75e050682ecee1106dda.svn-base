import {
  getList as getListByMenu
} from 'src/service/menu'



export default {
  getCurMenu({state,commit},path) {
    const menuMap  = state.menuMap;
    const cur = menuMap[path];
    commit('GET_CUR_MENU', cur)
  },
}
