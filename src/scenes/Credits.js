class Credits extends Phaser.Scene {
    constructor() {
        super({ key: 'creditsScene'});
    }

    preload() {}

    create() {
        let box = this.add.text(230, 100,
        `CREDITS\nImages: Made by me using Clip Studio Paint & Aseprite\nSound:\n- Menu music by davo32 from Freesound\n- Loading screen sound effect by Jofae from Freesound\n- I edited them using Audacity`,
        {
            font: "24px",
            color: "#FF71FD",
        }
        );
        box.setWordWrapWidth(500);
    }
}