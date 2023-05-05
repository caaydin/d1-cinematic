let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: '#000000',
    scene: [ Studio, Loading, Menu ],
}

let game = new Phaser.Game(config);