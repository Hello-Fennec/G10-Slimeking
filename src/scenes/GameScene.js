import Phaser from "phaser";
let background;
let slime;
let platforms;
let heart;
let powerup;
let smallPlatform;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','src/GameScene/scene1.png');
        this.load.image('platform','src/GameScene/GrassFloor1.png');
        this.load.image('smallPlatform','src/GameScene/grassfloor.png');
        this.load.image('hp','src/GameScene/PikPng.com_cute-heart-png_653468.png');
    }
    create() {
        background = this.add.image(800,500,'bg');
        platforms = this.physics.add.staticGroup();
        platforms.create(800, 980, 'platform').refreshBody();
        platforms.create(1100,900,'smallPlatform');
    }

    update(delta, time) {


    }
}
export default GameScene;
