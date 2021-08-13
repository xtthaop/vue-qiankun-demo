function emptyAction() {
  console.warn('current execute action is empty!')
  return false
}

class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
    getRoutes: emptyAction
  }

  setActions(actions) {
    this.actions = actions
  }

  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args)
  }

  setGlobalState(...args) {
    return this.actions.setGlobalState(...args)
  }

  getRoutes(...args) {
    return this.actions.getRoutes ? this.actions.getRoutes(...args) : emptyAction()
  }
}

const actions = new Actions()

export default actions
