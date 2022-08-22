
import Phaser from "phaser";

const PIPES_TO_RENDER = 4;

class PlayScene extends Phaser.Scene {

    constructor(config){
        super('PlayScene');
        this.config = config;
        this.jet = null
        this.pipes = null;

         this.pipeHorizontalDistance = 0;
         this.pipeVerticalDistanceRange = [150, 250];
         this.pipeHorizontalDistanceRange = [500, 600];
         this.jetVelocity = 250;
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('jet', 'assets/jet-48.png');
        this.load.image('pipe', 'assets/pipe.png');
    }

    create() {

      this.createBG();
      this.createJet();
      this.createPipes();
      this.createColliders();
      this.handleInputs();

    }

    update() {
        this.checkGameStatus();
        this.recyclePipes();
    }

    createBG() {
      this.add.image(0, 0, 'sky').setOrigin(0);
    }

    createJet() {
      this.jet = this.physics.add.sprite(this.config.startPosition.x, this.config.startPosition.y, 'jet').setOrigin(0);
      this.jet.body.gravity.y = 200;
    }

    createPipes() {
      this.pipes = this.physics.add.group()

      for (let i = 0; i < PIPES_TO_RENDER; i++){
        const upperPipe = this.pipes.create(0, 0, 'pipe').setOrigin(0, 1);
        const lowerPipe = this.pipes.create(0, 0, 'pipe').setOrigin(0, 0);

        this.placePipe(upperPipe, lowerPipe)
    
      }
      this.pipes.setVelocityX(-200);
    }

    createColliders(){
      this.physics.add.collider(this.jet, this.pipes, this.gameOver, null, this);
    }

    handleInputs() {
      this.input.on('pointerdown', this.jetControl, this);
      this.input.keyboard.on('keydown_SPACE', this.jetControl, this);
    }

    checkGameStatus(){
      if (this.jet.y > this.config.height   ||  this.jet.y <  - this.jet.height) {
        this.gameOver(); 
    }
    }

    placePipe(uPipe, lPipe) {

        const rightMostX = this.getRightMostPipe();
        const pipeVerticalDistance = Phaser.Math.Between(...this.pipeVerticalDistanceRange);
        const pipeVerticalPosition = Phaser.Math.Between(0 + 20, this.config.height - 20 - pipeVerticalDistance);
        const pipeHorizontalDistance = Phaser.Math.Between(...this.pipeHorizontalDistanceRange);
      
        uPipe.x = rightMostX + pipeHorizontalDistance;
        uPipe.y = pipeVerticalPosition;
      
        lPipe.x = uPipe.x;
        lPipe.y = uPipe.y + pipeVerticalDistance;
      
      }
      
    recyclePipes (){
        const tempPipes = [];
        this.pipes.getChildren().forEach(pipe =>{
          if (pipe.getBounds().right <= 0) {
            tempPipes.push(pipe);
              if(tempPipes.length === 2) {
                this.placePipe(...tempPipes);
              }
          }
        })
      }
      getRightMostPipe(){
        let rightMostX = 0;
      
        this.pipes.getChildren().forEach(function(pipe) {
          rightMostX = Math.max(pipe.x, rightMostX);
        })
      
        return rightMostX;
      }
      
      gameOver (){
      
        this.jet.x = this.config.startPosition.x;
        this.jet.y = this.config.startPosition.y;
        this.jet.body.velocity.y = 0;
      }
      
      jetControl(){
      
       this.jet.body.velocity.y = -this.jetVelocity;
      }
}

export default PlayScene;