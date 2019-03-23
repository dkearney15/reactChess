export default (state=0, action) => {
    switch (action.type) {
        case "MOVE": {
            return state + 1;
        }
        default: {
            return state;
        }
    }
}