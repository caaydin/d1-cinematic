class Studio extends Phaser.Scene {
    constructor() {
        super({ key: 'studioScene'});
    }

    preload() {
        this.load.image('logo', 'assets/studio_logo.png');
    }

    create() {
        const logo = this.add.sprite(-500, 270, 'logo');

        this.tweens.add({
            targets: logo, 
            delay:750,
            x:480,
            y:270,
            duration: 500,
            ease: 'Sine.easeInOut',
        });

        this.time.delayedCall(3000, () => {
            this.cameras.main.fadeOut(500);
            this.time.delayedCall(650, () => {
                this.scene.start('loadingScene');
            })
        })
    }
}