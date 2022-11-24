import Phaser from "phaser";
let background;
let slime;
<<<<<<< Updated upstream
let keyW;
let keyA;
let keyS;
let keyD;
=======
let platforms;
let heart;
let powerup;
>>>>>>> Stashed changes
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
<<<<<<< Updated upstream
        this.load.image('bg', '/src/GameScene/4.png');
        this.load.spritesheet('slime', '/src/GameScene/spritesheet.png',
            { frameWidth: 317.4, frameHeight: 254 });
=======
        this.load.image('bg','/src/GameScene/scene1.png');
        this.load.image('platform','/src/GameScene/grassfloor.png');
        this.load.image('hp','/src/GameScene/')
>>>>>>> Stashed changes
    }
    create() {
        background = this.add.image(800, 500, 'bg');
        slime = this.physics.add.sprite(350, 860, 'slime').setScale(0.5)
        // this.anims.create({
        //     key: 'slimeAni',
        //     frames: this.anims.generateFrameNumbers('slime', {
        //         start: 0,
        //         end: 1
        //     }),
        //     duration: 500,
        //     repeat: -1
        // })

        // waiting for spritesheet
        this.anims.create({
            key: 'slimeLeft',
            frames: this.anims.generateFrameNumbers('slime', {
                start: 5,
                end: 8
            }),
            duration: 500,
            repeat: -1
        })

        this.anims.create({
            key: 'slimeRight',
            frames: this.anims.generateFrameNumbers('slime', {
                start: 0,
                end: 3
            }),
            duration: 500,
            repeat: -1
        })

<<<<<<< Updated upstream
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        // keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        slime.setCollideWorldBounds(true)
=======

>>>>>>> Stashed changes
    }

    update(delta, time) {
        // slime.setVelocityY(100) // gravity
        if (keyA.isDown) {
            slime.setVelocityX(-250)
            slime.anims.play('slimeLeft', true); // waiting for spritesheet
        } else if (keyD.isDown) {
            slime.setVelocityX(250)
            slime.anims.play('slimeRight', true); // waiting for spritesheet
        } else {
            slime.setVelocityX(0)
            // slime.anims.play('slimeAni', false);
            slime.anims.play('slimeLeft', false);
            slime.anims.play('slimeRight', false); // waiting for spritesheet
        }
    }
}
export default GameScene;
