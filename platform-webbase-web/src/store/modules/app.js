import Cookies from 'js-cookie'

const state = {
  sidebarOpenState: Cookies.get('sidebarOpenState') ? !!+Cookies.get('sidebarOpenState') : true,
  appKey: '',
  appName: '',
  appRoutes: [],
}

const mutations = {
  TOGGLE_MENU: state => {
    state.sidebarOpenState = !state.sidebarOpenState
    if(state.sidebarOpenState){
      Cookies.set('sidebarOpenState', 1)
    }else{
      Cookies.set('sidebarOpenState', 0)
    }
  },
  CLOSE_MENU: state => {
    Cookies.set('sidebarOpenState', 0)
    state.sidebarOpenState = false
  },
  OPEN_MENU: state => {
    Cookies.set('sidebarOpenState', 1)
    state.sidebarOpenState = true
  },
  SET_APP_NAME: (state, appName) => {
    state.appName = appName
  },
  SET_APP_ROUTES: (state, appRoutes) => {
    state.appRoutes = appRoutes
  },
  SET_APP_KEY: (state, appKey) => {
    state.appKey = appKey
  }
}

const actions = {
  toggleMenu({ commit }) {
    commit('TOGGLE_MENU')
  },
  closeMenu({ commit }) {
    commit('CLOSE_MENU')
  },
  openMenu({ commit }) {
    commit('OPEN_MENU')
  },
  setAppInfo({ commit }, val) {
    if (val) {
      commit('SET_APP_KEY', val.appKey || '')
      commit('SET_APP_NAME', val.appName || '')
      commit('SET_APP_ROUTES', val.routes || [])
    } else {
      commit('SET_APP_KEY', '')
      commit('SET_APP_NAME', '')
      commit('SET_APP_ROUTES', [])
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
