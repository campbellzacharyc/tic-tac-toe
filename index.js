const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" class="square-${index}">${square}</div`
        })
    }
    document.querySelector(".gameboard").innerHTML = boardHTML;

    return {
        render,
    }

})();

const Game = (() => {
    let players = [];
    
})();

const start = document.querySelector(".start");
start.addEventListener("click", () => {
    alert("hello WORLDDDD");
})