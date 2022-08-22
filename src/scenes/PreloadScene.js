
import Phaser from "phaser";



class PreloadScene extends Phaser.Scene {

    constructor(){
        super('PreloadScene');
    }

    preload() {
      this.load.image('sky', 'assets/sky.png');
      this.load.image('jet', 'assets/jet-48.png');
      this.load.image('pipe', 'assets/pipe.png');
      this.load.image('pause', 'assets/pause.png');
    }

    create() {
      this.scene.start('MenuScene')
    }

   
}

export default PreloadScene;