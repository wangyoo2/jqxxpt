import {
  Random
} from 'mockjs';

const Menus = [
  {
      "id": 1,
      "menuName": "畜牧",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "/review/6",
      "status": 1,
      "sort": 1,
      "subMenu": [
          {
              "id": 10,
              "menuName": "畜牧概况",
              "menuLevel": 2,
              "pMenuId": 1,
              "menuUrl": "/husbandry/livesGuide",
              "status": 1,
              "sort": 1,
              "subMenu": ""
          },
          {
              "id": 11,
              "menuName": "基本生产数据",
              "menuLevel": 2,
              "pMenuId": 1,
              "menuUrl": "/review/test",
              "status": 1,
              "sort": 2,
              "subMenu": ""
          },
          {
              "id": 12,
              "menuName": "种畜禽生产与管理",
              "menuLevel": 2,
              "pMenuId": 1,
              "menuUrl": "/husbandry/breAndManOfLivesAndPou",
              "status": 1,
              "sort": 3,
              "subMenu": ""
          },
          {
              "id": 13,
              "menuName": "禽畜标准化示范创建",
              "menuLevel": 2,
              "pMenuId": 1,
              "menuUrl": "/review/中华人民共和国食品安全法",
              "status": 1,
              "sort": 4,
              "subMenu": ""
          },
          {
              "id": 14,
              "menuName": "养殖业污染治理",
              "menuLevel": 2,
              "pMenuId": 1,
              "menuUrl": "/review/7",
              "status": 1,
              "sort": 5,
              "subMenu": [
                  {
                      "id": 15,
                      "menuName": "禽畜无害化处理中心",
                      "menuLevel": 3,
                      "pMenuId": 14,
                      "menuUrl": "/husbandry/aquaPollCtrl/livesHarmProcCenter",
                      "status": 1,
                      "sort": 1,
                      "subMenu": ""
                  },
                  {
                      "id": 16,
                      "menuName": "废弃综合物利用",
                      "menuLevel": 3,
                      "pMenuId": 14,
                      "menuUrl": "/husbandry/aquaPollCtrl/wasteSynthesis",
                      "status": 1,
                      "sort": 2,
                      "subMenu": ""
                  }
              ]
          }
      ]
  },
  {
      "id": 2,
      "menuName": "渔业",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "/review/8",
      "status": 1,
      "sort": 2,
      "subMenu": [
          {
              "id": 17,
              "menuName": "渔业概况",
              "menuLevel": 2,
              "pMenuId": 2,
              "menuUrl": "/fisheries/fisheriesGuide",
              "status": 1,
              "sort": 1,
              "subMenu": ""
          },
          {
              "id": 18,
              "menuName": "农业部水产健康养殖示范场",
              "menuLevel": 2,
              "pMenuId": 2,
              "menuUrl": "/fisheries/agriAquaDemonFileOfAgri",
              "status": 1,
              "sort": 2,
              "subMenu": ""
          }
      ]
  },
  {
      "id": 3,
      "menuName": "饲料",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "/review/9",
      "status": 1,
      "sort": 3,
      "subMenu": [
          {
              "id": 19,
              "menuName": "饲料概况",
              "menuLevel": 2,
              "pMenuId": 3,
              "menuUrl": "/feed/feedGuide",
              "status": 1,
              "sort": 1,
              "subMenu": ""
          },
          {
              "id": 20,
              "menuName": "饲料企业监管",
              "menuLevel": 2,
              "pMenuId": 3,
              "menuUrl": "/feed/supervisionOfFeedEnterprises",
              "status": 1,
              "sort": 2,
              "subMenu": ""
          },
          {
              "id": 21,
              "menuName": "行政许可办证初审",
              "menuLevel": 2,
              "pMenuId": 3,
              "menuUrl": "/feed/preExamOfAdminLicense",
              "status": 1,
              "sort": 3,
              "subMenu": ""
          },
          {
              "id": 22,
              "menuName": "饲料企业免税抽样",
              "menuLevel": 2,
              "pMenuId": 3,
              "menuUrl": "/feed/sampOfTaxExem",
              "status": 1,
              "sort": 4,
              "subMenu": ""
          },
          {
              "id": 23,
              "menuName": "饲料质量安全抽样",
              "menuLevel": 2,
              "pMenuId": 3,
              "menuUrl": "/feed/safeSampOfFeedQuality",
              "status": 1,
              "sort": 5,
              "subMenu": ""
          },
          {
              "id": 24,
              "menuName": "饲料质量安全规范",
              "menuLevel": 2,
              "pMenuId": 3,
              "menuUrl": "/feed/feedQualitySafetySpecification",
              "status": 1,
              "sort": 6,
              "subMenu": ""
          }
      ]
  },
  {
      "id": 4,
      "menuName": "动物疫病防控",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "/review/10",
      "status": 1,
      "sort": 4,
      "subMenu": [
          {
              "id": 25,
              "menuName": "动物防疫概况",
              "menuLevel": 2,
              "pMenuId": 4,
              "menuUrl": "/animalEpidePre/animalEpidePreGuide",
              "status": 1,
              "sort": 1,
              "subMenu": ""
          },
          {
              "id": 26,
              "menuName": "强制免疫",
              "menuLevel": 2,
              "pMenuId": 4,
              "menuUrl": "/review/11",
              "status": 1,
              "sort": 2,
              "subMenu": [
                  {
                      "id": 27,
                      "menuName": "免疫数据",
                      "menuLevel": 3,
                      "pMenuId": 26,
                      "menuUrl": "/animalEpidePre/epidePreSupervision/immuData",
                      "status": 1,
                      "sort": 1,
                      "subMenu": ""
                  }
              ]
          },
          {
              "id": 32,
              "menuName": "疫苗管理",
              "menuLevel": 2,
              "pMenuId": 4,
              "menuUrl": "/review/12",
              "status": 1,
              "sort": 3,
              "subMenu": [
                  {
                      "id": 33,
                      "menuName": "疫苗使用数据",
                      "menuLevel": 3,
                      "pMenuId": 32,
                      "menuUrl": "/animalEpidePre/reportAndDeal/vaccUseData",
                      "status": 1,
                      "sort": 1,
                      "subMenu": ""
                  }
              ]
          },
          {
              "id": 34,
              "menuName": "疫情报告及处置",
              "menuLevel": 2,
              "pMenuId": 4,
              "menuUrl": "/review/13",
              "status": 1,
              "sort": 4,
              "subMenu": [
                  {
                      "id": 35,
                      "menuName": "疫情报告",
                      "menuLevel": 3,
                      "pMenuId": 34,
                      "menuUrl": "/animalEpidePre/repoDeal/report",
                      "status": 1,
                      "sort": 1,
                      "subMenu": ""
                  },
                  {
                      "id": 36,
                      "menuName": "应急处置",
                      "menuLevel": 3,
                      "pMenuId": 34,
                      "menuUrl": "/animalEpidePre/repoDeal/deal",
                      "status": 1,
                      "sort": 2,
                      "subMenu": ""
                  }
              ]
          },
          {
              "id": 37,
              "menuName": "信息交流",
              "menuLevel": 2,
              "pMenuId": 4,
              "menuUrl": "14",
              "status": 1,
              "sort": 5,
              "subMenu": [
                  {
                      "id": 38,
                      "menuName": "通知公告",
                      "menuLevel": 3,
                      "pMenuId": 37,
                      "menuUrl": "/animalEpidePre/inforCommit/info",
                      "status": 1,
                      "sort": 1,
                      "subMenu": ""
                  }
              ]
          },
          {
              "id": 42,
              "menuName": "短信平台",
              "menuLevel": 2,
              "pMenuId": 4,
              "menuUrl": "/animalEpidePre/SMSPlatform",
              "status": 1,
              "sort": 6,
              "subMenu": ""
          }
      ]
  },
  {
      "id": 5,
      "menuName": "肉品质量安全",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "15",
      "status": 1,
      "sort": 5,
      "subMenu": [
          {
              "id": 43,
              "menuName": "肉品质量安全概况",
              "menuLevel": 2,
              "pMenuId": 5,
              "menuUrl": "/meatQualityAndSafety/meatQualityAndSafetyGuide",
              "status": 1,
              "sort": 1,
              "subMenu": ""
          },
          {
              "id": 44,
              "menuName": "兽药监管",
              "menuLevel": 2,
              "pMenuId": 5,
              "menuUrl": "/meatQualityAndSafety/veterinaryDrugRegulatory",
              "status": 1,
              "sort": 2,
              "subMenu": ""
          },
          {
              "id": 45,
              "menuName": "三品一标认证",
              "menuLevel": 2,
              "pMenuId": 5,
              "menuUrl": "/meatQualityAndSafety/SBYPAuthentication",
              "status": 1,
              "sort": 3,
              "subMenu": ""
          },
          {
              "id": 46,
              "menuName": "质量安全监督抽样",
              "menuLevel": 2,
              "pMenuId": 5,
              "menuUrl": "/meatQualityAndSafety/qualitySafetySuperSamp",
              "status": 1,
              "sort": 4,
              "subMenu": ""
          },
          {
              "id": 47,
              "menuName": "养殖业技术操作规程",
              "menuLevel": 2,
              "pMenuId": 5,
              "menuUrl": "/meatQualityAndSafety/techOperProceOfBreedIndus",
              "status": 1,
              "sort": 5,
              "subMenu": ""
          }
      ]
  },
  {
      "id": 6,
      "menuName": "渔政",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "/review/2",
      "status": 1,
      "sort": 6,
      "subMenu": ""
  },
  {
      "id": 7,
      "menuName": "医政管理",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "/review/3",
      "status": 1,
      "sort": 7,
      "subMenu": [
          {
              "id": 61,
              "menuName": "医政管理概况",
              "menuLevel": 2,
              "pMenuId": 7,
              "menuUrl": "/mediAdminiManage/mediAdminiManageGuide",
              "status": 1,
              "sort": 1,
              "subMenu": ""
          },
          {
              "id": 48,
              "menuName": "动物防疫条件合格证",
              "menuLevel": 2,
              "pMenuId": 7,
              "menuUrl": "16",
              "status": 1,
              "sort": 2,
              "subMenu": [
                  {
                      "id": 49,
                      "menuName": "申办",
                      "menuLevel": 3,
                      "pMenuId": 48,
                      "menuUrl": "/mediAdminiManage/proofOfEpidePre/bid",
                      "status": 1,
                      "sort": 1,
                      "subMenu": ""
                  },
                  {
                      "id": 50,
                      "menuName": "核发",
                      "menuLevel": 3,
                      "pMenuId": 48,
                      "menuUrl": "/mediAdminiManage/proofOfEpidePre/issued",
                      "status": 1,
                      "sort": 2,
                      "subMenu": ""
                  }
              ]
          },
          {
              "id": 51,
              "menuName": "动物诊疗许可证",
              "menuLevel": 2,
              "pMenuId": 7,
              "menuUrl": "17",
              "status": 1,
              "sort": 3,
              "subMenu": [
                  {
                      "id": 52,
                      "menuName": "申办",
                      "menuLevel": 3,
                      "pMenuId": 51,
                      "menuUrl": "/mediAdminiManage/medicalLicence/bid",
                      "status": 1,
                      "sort": 1,
                      "subMenu": ""
                  },
                  {
                      "id": 53,
                      "menuName": "核发",
                      "menuLevel": 3,
                      "pMenuId": 51,
                      "menuUrl": "/mediAdminiManage/medicalLicence/issued",
                      "status": 1,
                      "sort": 2,
                      "subMenu": ""
                  }
              ]
          },
          {
              "id": 54,
              "menuName": "官方兽医信息统计、上报、培训",
              "menuLevel": 2,
              "pMenuId": 7,
              "menuUrl": "/mediAdminiManage/officeVeteInforStatisReportAndTrain",
              "status": 1,
              "sort": 4,
              "subMenu": ""
          },
          {
              "id": 55,
              "menuName": "执业兽医师考试报名、缴费",
              "menuLevel": 2,
              "pMenuId": 7,
              "menuUrl": "/mediAdminiManage/registrationAndPaymentOfVeterMedical",
              "status": 1,
              "sort": 5,
              "subMenu": ""
          }
      ]
  },
  {
      "id": 8,
      "menuName": "项目管理",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "18",
      "status": 1,
      "sort": 8,
      "subMenu": [
          {
              "id": 56,
              "menuName": "养殖业项目管理",
              "menuLevel": 2,
              "pMenuId": 8,
              "menuUrl": "/review/21",
              "status": 1,
              "sort": 1,
              "subMenu": [
                  {
                      "id": 57,
                      "menuName": "中央项目",
                      "menuLevel": 3,
                      "pMenuId": 56,
                      "menuUrl": "/projectManage/aquacultureProjectManage/centralPro",
                      "status": 1,
                      "sort": 1,
                      "subMenu": ""
                  },
                  {
                      "id": 58,
                      "menuName": "省级项目",
                      "menuLevel": 3,
                      "pMenuId": 56,
                      "menuUrl": "/projectManage/aquacultureProjectManage/provincialPro",
                      "status": 1,
                      "sort": 2,
                      "subMenu": ""
                  },
                  {
                      "id": 59,
                      "menuName": "市级项目",
                      "menuLevel": 3,
                      "pMenuId": 56,
                      "menuUrl": "/projectManage/aquacultureProjectManage/municipalPro",
                      "status": 1,
                      "sort": 3,
                      "subMenu": ""
                  }
              ]
          }
      ]
  },
  {
      "id": 9,
      "menuName": "政策法规",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "/review/5",
      "status": 1,
      "sort": 9,
      "subMenu": ""
  },
  {
      "id": 60,
      "menuName": "科技扶贫",
      "menuLevel": 1,
      "pMenuId": 0,
      "menuUrl": "/review/98",
      "status": 1,
      "sort": 10,
      "subMenu": ""
  }
]


function toMap(menuMap, menus, parent) {
  menus.forEach(v => {
    menuMap[v.id] = v;
    v.level = parent ? parent.level + 1 : 1;
    if (parent && parent.pids) {
      v.pids = [...parent.pids, parent.id];
    } else {
      v.pids = [];
    }
    if (v.children) {
      toMap(menuMap, v.children, v);
    }
  })
  return menuMap;
}
const mapMenu = toMap({}, Menus)
export {
  Menus,
  mapMenu
}
