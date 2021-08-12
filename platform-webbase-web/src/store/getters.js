const getters = {
  hasAllAppInfo: state => state.permission.hasAllAppInfo,
  allAppInfo: state => state.permission.allAppInfo,
  appRoutes: state => state.app.appRoutes,
  appName: state => state.app.appName,
  appKey: state => state.app.appKey,
  sidebarOpenState: state => state.app.sidebarOpenState,
  allAppRoutePath: state => state.permission.allAppRoutePath,
}

export default getters
