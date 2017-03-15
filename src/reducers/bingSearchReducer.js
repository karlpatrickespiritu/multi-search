let initialState = {
  test: false
}

const bingSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: true }
    default: return state
  }
}

export default bingSearchReducer