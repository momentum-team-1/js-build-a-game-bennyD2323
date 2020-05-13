
class Game {
        constructor() {

        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');

        let gameSize = {x: canvas.width, y: canvas.height}
        this.player = new Player(gameSize)
        this.bullet = new Bullet(gameSize)
        let animate = () => {
            this.update()
            this.drawPlayer(ctx, gameSize)
            this.drawBullet(ctx, gameSize)
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
        drawBullet (ctx, gameSize) {
            // ctx.clearRect(0,0, gameSize.x, gameSize.y)
            
            ctx.fillStyle = "#000000"
            let startXBullet = this.player.center.x -this.player.size.x / 2
            let startYBullet = this.player.center.y - 50
            let bulletWidth= this.player.size.x
            let bulletHeight = this.player.size.y

            ctx.fillRect(startXBullet, startYBullet, bulletWidth, bulletHeight)
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
          if (this.keyboarder.isDown(this.keyboarder.KEYS.S)) {
            console.log("pewpew bullit")
            let bullet = new Bullet({ x: this.center.x, y: this.center.y - this.size.y - 10 },
                { x: 0, y: -7 })
          }
        }
    }
    // 
    
    

class Bullet {
    constructor (center, velocity) {
    this.center = center
    this.size = { x: 10, y: 10}
    this.velocity = velocity

    }
    update() {
        this.center.x += this.velocity.x
        this.center.y += this.velocity.y
    }
}


// class Invader {
//     this.size = {x:20, y:30}
    
// }




// function drawRect (screen, body) {
//     screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2,
//       body.size.x, body.size.y)


new Game()
