function emptyActions() {
  console.warn('current execute action is empty!')
  return false
}

class Actions {
  actions = {
    getRoutes: emptyActions
  }

  setActions(actions) {
    this.actions = actions
  }

  getRoutes(...args) {
    return this.actions.getRoutes ? this.actions.getRoutes(...args) : emptyActions()
  }
}

const actions = new Actions()

export default actions
