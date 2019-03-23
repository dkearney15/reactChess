export function move(startSpace, endSpace) {
    return {
        type: "MOVE",
        payload: {
            startSpace,
            endSpace
        }
    }
}
