class Loading extends Phaser.Scene {
    constructor() {
        super({ key: 'loadingScene'});
    }

    preload() {
        this.load.image('loading', 'assets/loading_text.png');
        this.load.image('carrot', 'assets/loading_image.png');
        this.load.audio('bounce', 'assets/383240__jofae__bounce.mp3');
    }

    create() {
        this.cameras.main.fadeIn(100);
        const text = this.add.sprite(480, 490, 'loading');
        const bounce = this.sound.add('bounce', {});
        const carrot = this.add.sprite(240, -100, 'carrot');
        const carrot2 = this.add.sprite(480, -100, 'carrot');
        const carrot3 = this.add.sprite(720, -100, 'carrot');

        // drop first carrot
        this.time.delayedCall(500, () => {
            bounce.play();
            this.tweens.add({
                targets: carrot,
                y: 270,
                duration: 200,
                ease: 'Linear',
            });
        });

        // second carrot
        this.time.delayedCall(1500, () => {
            bounce.play();
            this.tweens.add({
                targets: carrot2,
                y: 270,
                duration: 200,
                ease: 'Linear',
            });
        });

        // third carrot
        this.time.delayedCall(2500, () => {
            bounce.play();
            this.tweens.add({
                targets: carrot3,
                y: 270,
                duration: 200,
                ease: 'Linear',
            });
        });

        // fade out
        this.time.delayedCall(3300, () => {
            this.cameras.main.fadeOut(50);
        });

        // move to menu scene
        this.time.delayedCall(3350, () => {
            this.scene.start('menuScene');
        });
    }
}