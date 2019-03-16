export function incrementTurnCount() {
    return {
        type: "INC"
    }
}

export function decrementTurnCount() {
    return {
        type: "DEC"
    }
}

export function resetTurnCount() {
    return {
        type: "RESET"
    }
}