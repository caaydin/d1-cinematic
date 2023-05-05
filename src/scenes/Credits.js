class Credits extends Phaser.Scene {
    constructor() {
        super({ key: 'creditsScene'});
    }

    preload() {
    }

    create() {
        this.textObject = this.add.text(
            0, //x
            0,//y
            "hello world!", //text
            {
                font: "40px Arial",
                color: "#DA70D6",
            } //style
        );
    }
}