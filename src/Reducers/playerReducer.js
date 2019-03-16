export default (state={
    1: null,
    2: null
}, action) => {
    if (action.type && action.payload) {
        const newState = {...state};
        newState[action.type] = action.payload;
        return newState;
    } else {
        return state;
    }
}