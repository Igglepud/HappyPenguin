// create a new scene
let preloadScene = new Phaser.Scene("Preload");

//init
preloadScene.init = function () {
  if (this.sys.game.device.os.desktop == true) {
    operatingSystem = "desktop";
  }
  if (this.sys.game.device.os.android == true) {
    operatingSystem = "mobile";
  }
  if (this.sys.game.device.os.iOS == true) {
    operatingSystem = "mobile";
  }
};

// load assets
preloadScene.preload = function () {
  iggleResize();

  //loading box
  var progressBar = this.add.graphics();
  var progressBox = this.add.graphics();
  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(240, 270, 320, 50);
  progressBox.y = this.sys.game.config.width / 2;
  progressBox.x = this.sys.game.config.height / 2;

  //create loading screen
  this.load.on("progress", function (value) {
    console.log(value);
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(250, 280, 300 * value, 30);
  });

  this.load.on("fileprogress", function (file) {
    iggleResize();
    console.log(file.src);
  });

  this.load.on("complete", function () {
    console.log("complete");
    progressBar.destroy();
    progressBox.destroy();
    loadingText.destroy();
  });

  var width = this.cameras.main.width;
  var height = this.cameras.main.height;
  var loadingText = this.make.text({
    x: width / 2,
    y: height / 2 - 50,
    text: "Making penguin happy...",
    style: {
      font: "20px monospace",
      fill: "#ffffff",
    },
  });
  loadingText.setOrigin(0.5, 0.5);

  this.load.spritesheet("santa", "images/santasheet.png", {
    frameWidth: 79,
    frameHeight: 92,
    margin: 0,
    spacing: 0,
  });

  this.load.spritesheet("explosion", "images/explosion.png", {
    frameWidth: 388,
    frameHeight: 340,
    margin: 0,
    spacing: 0,
  });

  this.load.spritesheet("flag", "images/flagSheet.png", {
    frameWidth: 30,
    frameHeight: 30,
    margin: 0,
    spacing: 0,
  });
  this.load.spritesheet("smallSanta", "images/santasheetsmall.png", {
    frameWidth: 48,
    frameHeight: 64,
    margin: 0,
    spacing: 0,
  });

  this.load.image("spike", "images/spike.png");
  this.load.image("iGotHim", "images/igothim.png");
  this.load.image("snowTile", "images/snowtile.png");
  this.load.image("snowTile2", "images/snowtile2.png");
  this.load.image("rockPlatform", "images/rockplatform.png");
  this.load.image("redBrickTile", "images/redbricks.png");
  this.load.image("leftArrow", "images/leftarrow.png");
  this.load.image("rightArrow", "images/rightarrow.png");
  this.load.image("vaniaTiles", "images/vaniatiles.png");
  this.load.image("penguin", "images/penguin.png");
  this.load.image("penguinSilhouette", "images/penguinSilhouette.png");
  this.load.image("blood1", "images/blood1.png");
  this.load.image("blood2", "images/blood2.png");
  this.load.image("blood3", "images/blood3.png");
  this.load.image("snowBlood1", "images/snowBlood1.png");
  this.load.image("snowBlood2", "images/snowBlood2.png");
  this.load.image("snowBlood3", "images/snowBlood3.png");
  this.load.image("cloud1", "images/cloud1.png");
  this.load.image("cloud2", "images/cloud2.png");
  this.load.image("moon", "images/moon.png");
  this.load.image("midDrapes", "images/middrapes.png");
  this.load.image("sideDrapes", "images/sidedrapes.png");
  this.load.image("present1", "images/present1.png");
  this.load.image("elf", "images/elf.png");
  this.load.image("snowman", "images/snowman.png");
  this.load.image("donate", "images/donate.png");
  this.load.image("level22castle", "images/level3castle.png");
  this.load.image("redDot", "images/reddot.png");
  this.load.image("snowBG", "images/snowBG.png");
  this.load.image("snowyHill1", "images/snowyHill1.png");
  this.load.image("starBackground", "images/starBackground.png");
  this.load.image("gasses", "images/gasses.png");
  this.load.audio("squish", "sounds/squish.wav");
  this.load.audio("gunshot", "sounds/gunshot.mp3");
  this.load.audio("candy", "sounds/candy.mp3");
  this.load.audio("snowSplat", "sounds/snowSplat.wav");
  this.load.audio("tutorialMusic", "sounds/tutorialMusic.wav");
  this.load.audio("whipTheGhosts", "sounds/whiptheghosts.mp3");
  this.load.audio("riseOfTheSaviour", "sounds/riseofthesaviour.mp3");
  this.load.audio("snowMusic1", "sounds/snowMusic1.mp3");
  this.load.audio("explosionSound", "sounds/explosion.wav");
};

preloadScene.create = function () {
  this.scene.start("Tutorial4");
};
