import mock from './mock';
import {
  Random
} from 'mockjs';
import {
  Data
} from './data/pdf';

let _Data = Data;

//获取用户列表（分页）
mock.onPost('/pdf/listpage').reply(config => {
  let {
    page,
    pageSize,
    name
  } = JSON.parse(config.data);
  let mock = _Data
    .filter(user => !(name && user.name.indexOf(name) == -1))
  let total = mock.length;
  mock = mock.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
  return new Promise((resolve, reject) => {
    resolve([200, {
      total: total,
      resultList: mock
    }]);
  });
});
