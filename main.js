
class Game {
    constructor() {

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

this.bodies = []
this.bodies.concat(new Player(this, gameSize))

const gameSize = {x: canvas.width, y: canvas.height}

addBody(body); {
    this.bodies.push(body)
}
    }
}
 
class Player {
    constructor(game, gameSize) {
        this.game = game
        this.size = {x:15, y:15}
        this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 }
    }
}

function drawRectangle (ctx, body) {
    ctx.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2,
        body.size.x, body.size.y)
    ctx.fillStyle = "blue"
}

new Game()