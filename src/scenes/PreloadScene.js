
import Phaser from "phaser";



class PreloadScene extends Phaser.Scene {

    constructor(){
        super('PreloadScene');
    }

    preload() {
      this.load.image('sky', 'assets/sky.png');
      this.load.spritesheet('jet', 'assets/birdSprite.png', {
        frameWidth: 16, frameHeight: 16
      });
      // this.load.spritesheet('jet', 'assets/spaceship/Ship1.png', {
      //   frameWidth: 64, frameHeight: 64
      // });
      // this.load.image('exhaust1', 'assets/spaceship/exhaust1.png', {
      //   frameWidth: 64, frameHeight: 64
      // });
      // this.load.image('exhaust2', 'assets/spaceship/exhaust2.png', {
      //   frameWidth: 64, frameHeight: 64
      // });
      // this.load.image('exhaust3', 'assets/spaceship/exhaust3.png', {
      //   frameWidth: 64, frameHeight: 64
      // });
      // this.load.image('exhaust4', 'assets/spaceship/exhaust4.png', {
      //   frameWidth: 64, frameHeight: 64
      // });
      // this.load.image('jet', 'assets/jet-48.png');
      this.load.image('pipe', 'assets/pipe.png');
      this.load.image('pause', 'assets/pause.png');
      this.load.image('back', 'assets/back.png');
    }

    create() {
      this.scene.start('MenuScene')
    }

   
}

export default PreloadScene;