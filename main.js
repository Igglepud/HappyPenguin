// set game configuration
let config = {
    type: Phaser.AUTO,
    parent: "game",
    width: 800,
    height: 600,
    scene: [preloadScene, titleScene, tutorial1Scene, tutorial2Scene,tutorial3Scene, tutorial4Scene, level01Scene, level02Scene, level03Scene, level04Scene, level20Scene, level21Scene, level22Scene, gameoverScene, ],
    pixelArt: false,
    mode:Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    physics: {
        default: 'arcade',
        arcade: {
            debug:true,
            gravity: {y: 1000},
            
        }
    }
};

var operatingSystem

//create new game and send configuration
let game = new Phaser.Game(config)

