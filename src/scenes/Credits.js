class Credits extends Phaser.Scene {
    constructor() {
        super({ key: 'creditsScene'});
    }

    preload() {}

    create() {
        this.add.text(480, 100,
            `CREDITS`,
            {
                font: "35px"
            }
        ).setOrigin(0.5, 0.5);
        const text = this.add.text(480, 270,
            `Images: Made by me using Clip Studio Paint & Aseprite\nSound:\n- Menu music by davo32 from Freesound\n- Loading screen sound effect by Jofae from Freesound\n- Edited by me using Audacity`,
            {
            font: "24px",
        }
        ).setOrigin(0.5, 0.5);
        text.setWordWrapWidth(600);

        // restart from initial scene on click
        this.time.delayedCall(1000, () => {
            this.add.text(480, 500,
                `(CLICK TO REPLAY)`,
                {
                font: "24px",
            }
            ).setOrigin(0.5, 0.5);
            this.input.once('pointerdown', () => {
                this.scene.start('studioScene');
            });
        });
    }
}