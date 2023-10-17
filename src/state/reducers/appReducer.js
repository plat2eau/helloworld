const initialState = {
    defaultText: ""
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APP_ACTION":
            Object.assign(state.defaultText, action.payload)
            return { ...state, defaultText: action.payload }
        default:
            return state
    }
}

export default appReducer;