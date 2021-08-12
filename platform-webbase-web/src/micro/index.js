import { Message } from 'element-ui'
import { 
  registerMicroApps, 
  start, 
  addGlobalUncaughtErrorHandler 
} from 'qiankun'
import { getMicroappConfig } from '@/api/permission'
import store from '@/store'

function getRoutes(){
  const { routes } = store.getters
  return routes
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
      return Promise.resolve()
    },
    afterMount: () => {
      return Promise.resolve()
    }
  })

  addGlobalUncaughtErrorHandler((event) => {
    const { message: msg } = event
    if(msg && msg.includes("died in status LOADING_SOURCE_CODE")){
      Message.error("请检查应用是否正常运行")
    }
  })
})()

export default start
