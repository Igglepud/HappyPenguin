let tutorial1Scene = new Phaser.Scene("Tutorial1");

tutorial1Scene.init = function () {
  this.penguinRotation = 5;
  this.numberOfBloods = 0;

  this.win = function () {
    this.actText.moveTween = this.tweens.add({
      targets: this.actText,
      y: 301,
      duration: 750,
      yoyo: false,
      delay: 0,
      callbackScope: this,
      onComplete: function () {
        this.cursors.left.isDown = false;
        this.music.stop();
        this.actText.x = 300;
        this.actText.setText("Hey");

        this.actText.moveTween = this.tweens.add({
          targets: this.actText,
          y: 300,
          duration: 1500,
          yoyo: false,
          delay: 0,
          callbackScope: this,
          onComplete: function () {
            this.actText.x = 300;
            this.actText.setText("wow!");
            this.actText.moveTween = this.tweens.add({
              targets: this.actText,
              y: 301,
              duration: 750,
              yoyo: false,
              delay: 0,
              callbackScope: this,
              onComplete: function () {
                this.actText.x = 300;
                this.actText.setText("You");

                this.actText.moveTween = this.tweens.add({
                  targets: this.actText,
                  y: 300,
                  duration: 1500,
                  yoyo: false,
                  delay: 0,
                  callbackScope: this,
                  onComplete: function () {
                    this.actText.x = 200;
                    this.actText.setText("so good!");

                    this.actText.moveTween = this.tweens.add({
                      targets: this.actText,
                      y: 301,
                      duration: 1500,
                      yoyo: false,
                      delay: 0,
                      callbackScope: this,
                      onComplete: function () {
                        this.actText.x = 200;
                        this.actText.setText("You try \n" + "next level!");

                        this.leftDrapes.moveTween = this.tweens.add({
                          targets: this.leftDrapes,
                          x: -80,
                          duration: 1500,
                          yoyo: false,
                          delay: 750,
                          callbackScope: this,
                          onComplete: function () {
                            this.music.stop();
                            this.scene.start("Tutorial2", {
                              music: this.music,
                            });
                          },
                        });

                        this.rightDrapes.moveTween = this.tweens.add({
                          targets: this.rightDrapes,
                          x: 880,
                          duration: 1500,
                          yoyo: false,
                          delay: 750,
                          callbackScope: this,
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });
  };
  this.lose = function () {
    this.squishPenguin();
    this.cursors.up.isDown = false;
    this.cursors.right.isDown = false;
    this.cursors.down.isDown = false;
    this.actText.moveTween = this.tweens.add({
      targets: this.actText,
      y: 301,
      duration: 750,
      yoyo: false,
      delay: 0,
      callbackScope: this,
      onComplete: function () {
        this.cursors.left.isDown = false;
        this.actText.x = 300;
        this.actText.setText("No!");

        this.actText.moveTween = this.tweens.add({
          targets: this.actText,
          y: 300,
          duration: 1500,
          yoyo: false,
          delay: 0,
          callbackScope: this,
          onComplete: function () {
            this.actText.x = 200;
            this.actText.setText("Wrong button!!");
            this.actText.moveTween = this.tweens.add({
              targets: this.actText,
              y: 301,
              duration: 750,
              yoyo: false,
              delay: 750,
              callbackScope: this,
              onComplete: function () {
                this.actText.x = 150;
                this.actText.setText("You try again!");
                this.leftDrapes.moveTween = this.tweens.add({
                  targets: this.leftDrapes,
                  x: -80,
                  duration: 1500,
                  yoyo: false,
                  delay: 750,
                  callbackScope: this,
                  onComplete: function () {
                    this.scene.start("Title");
                  },
                });

                this.rightDrapes.moveTween = this.tweens.add({
                  targets: this.rightDrapes,
                  x: 880,
                  duration: 1500,
                  yoyo: false,
                  delay: 750,
                  callbackScope: this,
                });
              },
            });
          },
        });
      },
    });
  };

  //create sniper dot

  this.closeCurtains = function () {
    this.music.stop();

    this.leftDrapes.moveTween = this.tweens.add({
      targets: this.leftDrapes,
      x: -80,
      duration: 1500,
      yoyo: false,
      //delay:0,
      callbackScope: this,
      onComplete: function () {},
    });

    this.rightDrapes.moveTween = this.tweens.add({
      targets: this.rightDrapes,
      x: 880,
      duration: 1500,
      yoyo: false,
      //delay:0,
      callbackScope: this,
    });
  };

  this.squishPenguin = function () {
    this.penguin.visible = false;
    this.squishSound.play();
    this.music.stop();

    let bloodNumber = Math.random() * 3;

    if (bloodNumber <= 1 && bloodNumber > 0) {
      this.bloods.create();
      this.bloods[this.numberOfBloods] = this.add.sprite(
        this.penguin.x,
        this.penguin.y,
        "blood1"
      );
    }

    if (bloodNumber <= 2 && bloodNumber > 1) {
      this.bloods.create();
      this.bloods[this.numberOfBloods] = this.add.sprite(
        this.penguin.x,
        this.penguin.y,
        "blood2"
      );
    }

    if (bloodNumber <= 3 && bloodNumber > 2) {
      this.bloods.create();
      this.bloods[this.numberOfBloods] = this.add.sprite(
        this.penguin.x,
        this.penguin.y,
        "blood3"
      );
    }
    this.bloods[this.numberOfBloods].setScale(0.05);
    this.bloods[this.numberOfBloods].depth = 0;
    this.bloods[this.numberOfBloods].alpha = 0.5;
  };
};

// create after preload
tutorial1Scene.create = function () {
  this.act = "Tutorial 1";
  this.actText = this.add.text(300, 300, this.act, { fontSize: "72px" });
  this.actText.depth = 2;
  //make curtains
  this.sideDrapes = this.add.sprite(400, -100, "sideDrapes");
  this.sideDrapes.setScale(18);
  this.sideDrapes.depth = 3;

  this.leftDrapes = this.add.sprite(-480, 150, "midDrapes");
  this.leftDrapes.setScale(10);
  this.leftDrapes.depth = 2;

  this.rightDrapes = this.add.sprite(1280, 150, "midDrapes");
  this.rightDrapes.setScale(10);
  this.rightDrapes.depth = 2;
  //create control keys
  this.cursors = this.input.keyboard.createCursorKeys();

  this.gameW = this.sys.game.config.width;
  this.gameH = this.sys.game.config.height;
  //generate platform using snow tile

  //make ground
  this.ground = this.add.tileSprite(0, 600, 50 * 32, 1 * 28, "snowTile");
  this.ground.depth = 1;
  //add physics to created platform
  this.physics.add.existing(this.ground);
  //platform does not fall
  this.ground.body.allowGravity = false;
  //platform does not react when hit
  this.ground.body.immovable = true;

  //create penguin
  this.penguin = this.physics.add.sprite(400, 500, "penguin").setInteractive();
  this.penguin.setScale(0.05);
  this.penguin.body.setCollideWorldBounds(true);
  this.physics.add.collider(this.penguin, this.ground);

 

  //create blood group
  this.bloods = this.add.group({});

  //create left wall, right wall, and ceiling
  this.leftwall = this.add.tileSprite(
    20,
    600,
    69 * 23,
    64 * 28,
    "redBrickTile"
  );
  this.leftwall.tintBottomLeft = 4;
  this.leftwall.tintBottomRight = 9;

  //create squish sound
  this.squishSound = this.sound.add("squish");
  this.gunshotSound = this.sound.add("gunshot");
  this.music = this.sound.add("tutorialMusic", { loop: true });
  this.music.play();

  //adjust depth
  this.penguin.depth = 1;

  this.actText.moveTween = this.tweens.add({
    targets: this.actText,
    x: 301,
    duration: 1500,
    yoyo: false,
    delay: 1500,
    callbackScope: this,
    onComplete: function () {
      this.actText.setText("Press ←");
    },
  });
  //create controls for mobile
  //operatingSystem='mobile'
  if (operatingSystem == "mobile") {
    this.input.addPointer(1);
    this.leftArrow = this.add.sprite(0, 0, "leftArrow");
    this.leftArrow.setPosition(50, 550);
    this.leftArrow.setScale(0.2);
    this.leftArrow.depth = 5;
    this.leftArrow.setInteractive();
    this.leftArrow.on(
      "pointerdown",
      function () {
        this.cursors.left.isDown = true;
      },
      this
    );

    this.leftArrow.on(
      "pointerup",
      function () {
        this.cursors.left.isDown = false;
      },
      this
    );
    this.rightArrow = this.add.sprite(0, 0, "rightArrow");

    this.rightArrow.setPosition(750, 550);
    this.rightArrow.setScale(0.2);
    this.rightArrow.depth = 5;
    this.rightArrow.setInteractive();
    this.rightArrow.on(
      "pointerdown",
      function () {
        this.cursors.right.isDown = true;
      },
      this
    );

    this.rightArrow.on(
      "pointerup",
      function () {
        this.cursors.right.isDown = false;
      },
      this
    );

    this.upArrow = this.add.sprite(0, 0, "rightArrow");
    this.upArrow.setPosition(750, 450);
    this.upArrow.angle = -90;
    this.upArrow.setScale(0.2);
    this.upArrow.depth = 5;
    this.upArrow.setInteractive();

    this.upArrow.on(
      "pointerdown",
      function () {
        this.cursors.up.isDown = true;
      },
      this
    );

    this.upArrow.on(
      "pointerup",
      function () {
        this.cursors.up.isDown = false;
      },
      this
    );

    this.upArrow2 = this.add.sprite(0, 0, "rightArrow");
    this.upArrow2.setPosition(50, 450);
    this.upArrow2.angle = -90;
    this.upArrow2.setScale(0.2);
    this.upArrow2.depth = 5;
    this.upArrow2.setInteractive();

    this.upArrow2.on(
      "pointerdown",
      function () {
        this.cursors.up.isDown = true;
      },
      this
    );

    this.upArrow2.on(
      "pointerup",
      function () {
        this.cursors.up.isDown = false;
      },
      this
    );
  }
};
tutorial1Scene.update = function () {
  //make platforms bounce off each other and NOT the penguin

  //squish penguin

  if (
    this.penguin.body.touching.left == true &&
    this.penguin.body.touching.right == true
  ) {
    this.squishPenguin();
  }

  //this.scene.start('GameOver');

  //check keys for moving and jumping
  if (this.cursors.left.isDown) {
    this.win();
    this.cursors.right.isDown = false;

    this.penguin.body.setVelocityX(-100);
    this.penguin.angle = this.penguin.angle - this.penguinRotation;
  } else if (
    this.cursors.right.isDown ||
    this.cursors.up.isDown ||
    this.cursors.down.isDown
  ) {
    this.lose();
  } else {
    this.penguin.body.setVelocityX(0);
    this.penguin.angle = 0;
  }
  //make penguin wobble
  if (this.penguin.angle >= 15 || this.penguin.angle <= -15) {
    this.penguinRotation = this.penguinRotation * -1;
  }
  //check keys to make penguin jump

  if (
    (this.cursors.space.isDown && this.penguin.body.touching.down == true) ||
    (this.cursors.up.isDown && this.penguin.body.touching.down == true)
  ) {
    this.penguin.body.setVelocityY(-500);
  }

  //make penguin not wobble during jump
  if (this.penguin.body.touching.down == false) {
    this.penguin.angle = 0;
  }

  //fall damage
  if (this.penguin.body.touching.down == false) {
    this.falling = this.penguin.body.velocity.y;
  }
  if (this.falling >= 900 && this.penguin.body.touching.down == true) {
    this.squishPenguin();
  }
  iggleResize();
};
