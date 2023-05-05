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
        this.sound.add('music', { loop: true }).play();
        const menu = this.add.sprite(-300, 270, 'menu').setAlpha(0);
        const options = this.add.sprite(1200, 380, 'options').setAlpha(0);

        // adding shapes
        /*this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xFAA0A0, 1);
        this.graphics.fillCircle(100,100,50);
        this.graphics.fillCircle(200,200,50);
        this.graphics.fillRect(600,50,150,100);
        this.graphics.fillRect(600,300,150,100);*/

        // menu and option animations
        this.tweens.add({
            targets: menu, 
            alpha: 1,
            delay:50,
            x:470,
            duration: 200,
            ease: 'Ease-in',
        });

        this.time.delayedCall(200, () => {
            this.tweens.add({
                targets: options, 
                alpha: 1,
                delay:50,
                x:190,
                duration: 250,
                ease: 'Ease-in',
            });
        });
    }
}