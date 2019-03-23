export function setPlayer(playerColor, player) {
    return {
        type: 'SET_PLAYER', 
        payload: {
            playerColor,
            player
        }
    }
}
