export function move(startSpace, endSpace) {
    // validate here, only dispatch if valid
    return {
        type: "MOVE",
        payload: [startSpace, endSpace]
    }
}
