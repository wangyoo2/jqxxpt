import mock from './mock';
import {
  Random
} from 'mockjs';
import {
  LoginUsers,
  Users
} from './data/user';

let _Users = Users;

//登录
mock.onPost('/user/UserLogin.shtml').reply(config => {
  let {
    username,
    password
  } = JSON.parse(config.data);
  return new Promise((resolve, reject) => {
    let user = null;
    LoginUsers.some(u => {
      if (u.username === username && u.password == password) {
        user = JSON.parse(JSON.stringify(u));
        user.password = undefined;
      }
    });

    if (user) {
      resolve([200, 'success']);
    } else {
      resolve([200,'mmcw']);
    }
  });
});

