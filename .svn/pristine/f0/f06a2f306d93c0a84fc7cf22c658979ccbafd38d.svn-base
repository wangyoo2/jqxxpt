import {
  Random
} from 'mockjs';
const LoginUsers = [{
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: '/static/user.png',
    name: '管理员',
  },
  {
    id: 2,
    username: 'admin',
    password: '000000',
    avatar: '/static/user.png',
    name: '袁聪聪',
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push({
    id: Random.guid(),
    name: Random.cname(),
    addr: Random.county(true),
    age: Random.integer(18, 60),
    birth: Random.date(),
    sex: Random.pick('male', 'female')
  });
}
export {
  LoginUsers,
  Users
};
