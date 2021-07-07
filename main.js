
class Game {
        constructor() {

        const canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');

        let gameSize = {x: canvas.width, y: canvas.height}
        this.player = new Player (this, gameSize)
        this.bodies = []

        this.bodies = this.bodies.concat(this.player)
        this.bodies = this.bodies.concat(createInvader(this))
 
        const animate = () => {
            this.update ()
            this.drawBodies(ctx, gameSize)

            requestAnimationFrame(animate)
        }

        animate()
    }   

        drawBodies (ctx, gameSize) {
        ctx.clearRect (0,0, gameSize.x, gameSize.y)
        for (let body of this.bodies) {
            ctx.fillStyle = "#07beb8"
            const xPosition = body.center.x - body.size.x / 2
            const yPosition = body.center.y - body.size.y / 2
            const width = body.size.x
            const height = body.size.y
            ctx.fillRect(xPosition, yPosition, width, height)
        }
    }
    update() {
        let notCollidingWithAnything = (b1) => {
            return this.bodies.filter (function (b2) {return colliding (b1, b2) }).length === 0
        }
        this.bodies = this.bodies.filter (notCollidingWithAnything)
        
        for (let body of this.bodies) {
            body.update()
        }
    }
}
class Player {
    constructor(game, gameSize) {
    this.size = {x:30, y:30}
    this.center = {x: gameSize.x / 2 , y: gameSize.y - this.size.y * 2 }
    this.keyboarder = Keyboarder
    this.game = game
    }

    update () {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
          console.log("MOVE RIGHT")
          this.center.x += 4
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
          console.log("MOVE LEFT")
          this.center.x -= 4
        }
        // else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
        //     console.log("MOVE UP")
        //     this.center.y -= 4
        // }
        // else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
        //     console.log("MOVE DOWN")
        //     this.center.y += 4
        // }
          if (this.keyboarder.isDown(this.keyboarder.KEYS.S)) {
            console.log("pewpew ")
            const bullet = new Bullet(
                { x: this.center.x, y: this.center.y - this.size.y - 10 },
                { x: 0, y: -7 }
            )
            this.game.bodies.push (bullet)
        }
        }
}

class Bullet {
    constructor (center, velocity) {
    this.center = center
    this.size = { x: 7, y: 7}
    this.velocity = velocity
       
    }
    update() {
        this.center.x += this.velocity.x
        this.center.y += this.velocity.y
        
    }   
}
class Enemy {
    constructor (game, center) {
        this.game = game
        this.center = center
        this.size = {x: 20, y: 20}
        this.patrolY = -0
        this.speedY = 0.6

    }
    update () {
        if (this.patrolY < -10 || this.patrolY > 530) {
            this.speedY += this.speedY
        }
        this.center.y += this.speedY
        this.patrolY += this.speedY
    }
}
function createInvader (game) {
    let enemy = []
    for (let i = 0; i < 20; i++) {
        let x = Math.random() * 300
        let y = Math.random() * 0
        enemy.push(new Enemy(game, {x: x, y: y}))
    }
    return enemy
}
function colliding (b1, b2) {
    return !(
      b1 === b2 ||
          b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
          b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
          b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
          b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2
    )
  }

new Game()
