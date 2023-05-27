let config = {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 960,
    height: 540,
    scene: [ Studio, Loading, Menu, Credits ],
}

let game = new Phaser.Game(config);