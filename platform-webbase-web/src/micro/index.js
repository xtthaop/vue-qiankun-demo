import { Message } from 'element-ui'
import { 
  registerMicroApps, 
  start, 
  addGlobalUncaughtErrorHandler 
} from 'qiankun'
import { getMicroappConfig } from '@/api/permission'
import store from '@/store'
import NProgress from 'nprogress'

function getRoutes(appKey){
  if (!appKey) return []
  const { allAppInfo } = store.getters
  return allAppInfo[appKey] && allAppInfo[appKey].routes
}

(async function(){
  let microapps = []

  await getMicroappConfig().then(res => {
    microapps = res.data

    microapps.map(item => {
      item.props = { getRoutes }
    })
  })

  registerMicroApps(microapps, {
    beforeLoad: () => {
      NProgress.start()
      return Promise.resolve()
    },
    afterMount: () => {
      NProgress.done()
      return Promise.resolve()
    }
  })

  addGlobalUncaughtErrorHandler((event) => {
    const { message: msg } = event
    if(msg && msg.includes("died in status LOADING_SOURCE_CODE")){
      Message.error("请检查应用是否正常运行")
    }
    NProgress.done()
  })
})()

export default start
