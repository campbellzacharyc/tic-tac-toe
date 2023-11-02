const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" class="square-${index}">${square}</div`
        })
        document.querySelector(".gameboard").innerHTML = boardHTML;
    }

    return {
        render,
    }

})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }
    return {
        start,
    }
})();

const start = document.querySelector(".start");
start.addEventListener("click", () => {
    Game.start(); 
}) 