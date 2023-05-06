class Menu extends Phaser.Scene {
    constructor() {
        super({ key: 'menuScene'});
    }

    preload() {
        this.load.image('menu', 'assets/menu_screen.png');
        this.load.image('options', 'assets/menu_options.png');
        this.load.audio('music', 'assets/628445__davo32__level-music-brackground.mp3');
    }

    create() {
        this.cameras.main.fadeIn(100);
        const music = this.sound.add('music', { loop: true });
        const menu = this.add.sprite(470, 270, 'menu');
        const options = this.add.sprite(1200, 380, 'options').setAlpha(0);

        // start music
        music.play();

        // adding shapes
        const shapes = this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xFFB0ED, 0.3);
        this.graphics.fillCircle(860, 210, 20);
        this.graphics.fillCircle(550, 500, 15);
        this.graphics.fillRect(350, 270, 30, 30);
        this.graphics.fillRect(890, 50, 40, 40);

        // animations
        this.tweens.add({
            targets: options, 
            alpha: 1,
            delay: 50,
            x: 190,
            duration: 250,
            ease: 'Ease-in',
        });

        // move to credits scene on click, after animations are done loading
        this.time.delayedCall(310, () => {
            this.input.once('pointerdown', () => {
                music.stop();
                this.scene.start('creditsScene');
            });
        });

        // if player still hasn't clicked after a few seconds
        this.time.delayedCall(3000, () => {
            this.textObject = this.add.text(480, 500,
                "(CLICK TO CONTINUE)", //text
                {
                    font: "24px",
                    color: "#DA70D6",
                }
            ).setOrigin(0.5, 0.5);
        });
    }
}