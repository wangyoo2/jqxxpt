import axios from 'axios';

export const getList = params => axios.post('/feedCompany/getFeedComPanyList.shtml', params)

export const addData = params => axios.post('/feedCompany/addFeedComPany.shtml', params)


