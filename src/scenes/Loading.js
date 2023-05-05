class Loading extends Phaser.Scene {
    constructor() {
        super({ key: 'loadingScene'});
    }

    preload() {
        this.load.image('loading', 'assets/loading_text.png');
        this.load.image('carrot', 'assets/loading_image.png');
    }

    create() {
        this.cameras.main.fadeIn(100);
        const text = this.add.sprite(480, 490, 'loading');
        const carrot = this.add.sprite(240, 270, 'carrot');
        const carrot2 = this.add.sprite(480, 270, 'carrot');
        const carrot3 = this.add.sprite(720, 270, 'carrot');
    }
}