import axios from 'axios';

export const getList = params => axios.post('/feedCompany/getFeedComPanyList.shtml', params)

export const getListOfFeed = params => axios.post('/feedCompany/getFeedComPanyList.shtml', params)

//基本生产数据
export const getListOfBaseData = params => axios.post('/baseData/getBaseDataList.shtml', params)

//疫情报告
export const getListOfEpideReport = params => axios.post('/epideReport/getEpideReportList.shtml', params)

//应急处理
export const getListOfEpideDea = params => axios.post('/epideDeal/getEpideDealList.shtml', params)

//免疫数据
export const getListOfImmune = params => axios.post('/Immune/getImmuneList.shtml', params)

//疫苗使用情况
export const getListOfVaccine = params => axios.post('/vaccine/getVaccineList.shtml', params)

//疫苗使用情况
export const getListOfImmune2 = params => axios.post('/Immune/getImmuneList.shtml', params)

