import {
  setStore,
  getStore,
  removeStore,
  setToken,
} from '../config/mUtils'
import {
  imageUrl
} from '../config/env'

export default {
  //记录用户本地信息
  RECORD_USERINFO(state, {
    token,
    user,
    menus
  }) {
    state.login = true;
    setStore('user', user)
    setStore('menus', menus)
    setToken(token);
  },
  //初始化用户信息
  INIT_USERINFO(state) {
    state.user = getStore('user', 'json');
    state.menus = getStore('menus', 'json');
  },
  USER_LOGOUT(state, info) {
    setToken('');
    removeStore('user')
    removeStore('menus')
  },
  GET_MENU_LIST(state, menus) {
    state.menus = menus
    setStore('menus', menus)
  },
  GET_CUR_MENU(state, path) {
    let menu = state.curMenu = state.menuMap[path];
    const breadcrumb = [];
    while (menu) {
      breadcrumb.push(menu);
      menu = menu.parent;
    }
    if(breadcrumb.length>0)
      state.breadcrumb = breadcrumb.reverse();
  },
  DOWNLOAD_FILE(state, filename) {
    window.open(`${imageUrl}/static/PDF/${filename}.pdf`)
  }
}
