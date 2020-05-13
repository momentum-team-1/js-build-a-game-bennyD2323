
class Game {
        constructor() {

        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');

        let gameSize = {x: canvas.width, y: canvas.height}
        this.player = new Player(gameSize)

        let animate = () => {
            this.update()
            this.drawPlayer(ctx, gameSize)
            requestAnimationFrame(animate)
        }
        animate()
    }

        drawPlayer (ctx, gameSize) {
            ctx.clearRect(0,0, gameSize.x, gameSize.y)
            console.log("draw playe rmethod")
            ctx.fillStyle = "#07beb8"
            let startingXPosition = this.player.center.x - this.player.size.x / 2
            let startingYPosition = this.player.center.y - this.player.size.y / 2
            let playerWidth = this.player.size.x
            let playerHeight = this.player.size.y
            ctx.fillRect(startingXPosition, startingYPosition, playerWidth, playerHeight)
            }


    update() {
        this.player.update()
    }
}


class Player {
    constructor(gameSize) {
        
        this.size = {x:30, y:30}
        this.center = {x: gameSize.x / 2 , y: gameSize.y - this.size.y * 2 }
        this.keyboarder = Keyboarder
    }

    update () {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
          console.log("MOVE RIGHT")
          this.center.x += 4
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
          console.log("MOVE LEFT")
          this.center.x -= 4
        
        }
    
      }
    }


class Invader {
    this.size = {x:20, y:30}
    
}
]






new Game()
