import Phaser from "phaser";

let playButton;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: "MainMenu",
        });
    }

    preload() {
        this.load.image('startButton','src/GameScene/playButton.png')
        this.load.image('slimelogo','src/GameScene/Slimeking_logo.png')
    }

    create() {
        playButton = this.add.image(950,720,'startButton').setScale(0.5)
        this.add.image(950,360,'slimelogo').setScale(2)
        playButton.setInteractive()
        playButton.on("pointerdown",()=>{
            this.scene.start("GameScene")
        })
    }

    update(delta, time) {
    }
}
export default MainMenu;