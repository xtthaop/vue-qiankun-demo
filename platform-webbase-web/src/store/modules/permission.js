import { getAllAppInfo } from '@/api/permission'

const constantPath = [
  "/platform/webbase/web",
  "/platform/webbase/web/404", 
  "/platform/webbase/web/403", 
]

const state = {
  hasAllAppInfo: false,  
  allAppInfo: {},
  allAppRoutePath: [],
}

function generateAllAppRoutePath(data) {
  let allAppRoutePath = []
  for (let key in data) {
    for (let j = 0; j < data[key].routes.length; j++) {
      allAppRoutePath.push(data[key].routes[j].path)
    }
  }
  return allAppRoutePath.concat(constantPath)
}

const mutations = {
  SET_ALL_APP_INFO: (state, allAppInfo) => {
    state.hasAllAppInfo = true
    state.allAppInfo = allAppInfo
  },
  SET_ALL_APP_ROUTE_PATH: (state, allAppRoutePath) => {
    state.allAppRoutePath = allAppRoutePath
  }
}

const actions = {
  getAllAppInfo({ commit }){
    return new Promise((resolve, reject) => {
      getAllAppInfo().then(res => {
        commit('SET_ALL_APP_INFO', res.data)
        const allAppRoutePath = generateAllAppRoutePath(res.data)
        commit('SET_ALL_APP_ROUTE_PATH', allAppRoutePath)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
