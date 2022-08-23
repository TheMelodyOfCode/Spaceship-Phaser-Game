

import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {

    constructor(config){
        super('MenuScene', config);
        this.menu = [
          {scene: 'PlayScene', text: 'Play'},
          {scene: 'ScoreScene', text: 'Score'},
          {scene: null, text: 'Exit'},
        ]
    }

    create() {
      super.create();
      this.createMenu(this.menu, (menuItem) => this.setupMenuEvents(menuItem));
      // this.scene.start('PlayScene'); 
    }

    setupMenuEvents(menuItem){
      const textgameObject = menuItem.textGameObject;
      textgameObject.setInteractive();

      textgameObject.on('pointerover', () => {
        textgameObject.setStyle({
          fill: '#FF0'
        });
      })
      textgameObject.on('pointerout', () => {
        textgameObject.setStyle({
          fill: '#FFF'
        });
      })
    }
    
    
}

export default MenuScene;