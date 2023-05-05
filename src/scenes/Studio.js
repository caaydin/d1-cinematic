class Studio extends Phaser.Scene {
    constructor() {
        super({ key: 'studioScene'});
    }

    preload() {
        this.load.image('logo', 'assets/studio_logo.png');
    }

    create() {
        const logo = this.add.sprite(-500, 270, 'logo').setAlpha(0);

        // logo animation
        this.tweens.add({
            targets: logo, 
            alpha: 1,
            delay:750,
            x:480,
            duration: 600,
            ease: 'Sine.easeInOut',
        });

        // fade out
        this.time.delayedCall(3100, () => {
            this.cameras.main.fadeOut(500);
        });

        // move to loading scene
        this.time.delayedCall(3750, () => {
            this.scene.start('loadingScene');
        })
    }
}