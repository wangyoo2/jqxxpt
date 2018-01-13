import axios from 'axios';

export const getList = params =>  axios.post('/pdf/list', params)

export const getListPage = params =>  axios.post('/menuFile/getMenuFileList.shtml', params)

export const batchRemove = params =>  axios.post('/pdf/batchremove', params)

export const save = params =>  axios.post('/pdf/save', params)

export const changePassword = params =>  axios.post('/pdf/changepassword', params)
