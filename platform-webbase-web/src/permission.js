import router from './router'
import store from './store'

function switchAppRoutes(path){
  let appKey = path.split('/').splice(1, 3).join('-') || ''

  if(store.getters.appKey !== appKey){
    let appInfo = store.getters.allAppInfo[appKey]
    store.dispatch('app/setAppInfo', { appKey, ...appInfo })
  }
}

router.beforeEach(async (to, from, next) => {
  const hasAllAppInfo = store.getters.hasAllAppInfo
  try {
    if (hasAllAppInfo) {
      if (store.getters.allAppRoutePath.some(item => to.path.includes(item))) {
        next()
        switchAppRoutes(to.path)
      } else {
        next({ name: 'Page404' })
      }
    } else {
      await store.dispatch('permission/getAllAppInfo')
      next({ ...to, replace: true })
    }
  } catch(error) {
    console.log(error || 'Has Error')
    next({ name: 'Home' })
  }
})
