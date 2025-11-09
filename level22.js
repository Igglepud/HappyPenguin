let level22Scene = new Phaser.Scene('Level22');

level22Scene.init = function(){
this.penguinRotation=5;
this.numberOfBloods=0;

        game.input.addPointer();
        game.input.addPointer();

    
this.squishPenguin=function(){
      this.squishSound.play();
            this.riseOfTheSaviourSound.stop();

        let bloodNumber=Math.random()*3;
        
        if (bloodNumber <=1 && bloodNumber > 0){
         this.bloods.create()
            this.bloods[this.numberOfBloods]=this.add.sprite(this.penguin.x, this.penguin.y, 'blood1')
        };
    
    
        if (bloodNumber<=2 && bloodNumber>1){
            this.bloods.create(); 
        this.bloods[this.numberOfBloods]=this.add.sprite(this.penguin.x, this.penguin.y, 'blood2')
        };
        
        if (bloodNumber<=3 && bloodNumber>2){
            this.bloods.create();        
        this.bloods[this.numberOfBloods]=this.add.sprite(this.penguin.x, this.penguin.y, 'blood3')
        };
                this.bloods[this.numberOfBloods].setScale(.05);
                this.bloods[this.numberOfBloods].depth=3;
                this.bloods[this.numberOfBloods].alpha=.5;
                this.scene.start('Level20')
        
    };
    
  this.squishSanta=function(){
      this.squishSound.play();
            this.riseOfTheSaviourSound.stop();

        let bloodNumber=Math.random()*3;
        if (bloodNumber<=1 && bloodNumber>0){
         this.bloods.create()
            this.bloods[this.numberOfBloods]=this.add.sprite(this.santa.x, this.santa.y, 'blood1')
        };
    
    
        
        if (bloodNumber<=2 && bloodNumber>1){
            this.bloods.create(); 
        this.bloods[this.numberOfBloods]=this.add.sprite(this.santa.x, this.santa.y, 'blood2')
        };
        if (bloodNumber<=3 && bloodNumber>2){
            this.bloods.create();        
        this.bloods[this.numberOfBloods]=this.add.sprite(this.santa.x, this.santa.y, 'blood3')
        };
                this.bloods[this.numberOfBloods].setScale(.05);
                this.bloods[this.numberOfBloods].depth=3;
                this.bloods[this.numberOfBloods].alpha=.5;
            this.numberOfBloods++;
            this.santa.y=0;
            this.santa.body.allowGravity=false;
            this.santa.visible=false;
      this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    //delay:500,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('level20')}
                        });
      
      this.rightDrapes.moveTween=this.tweens.add({
                   targets:this.rightDrapes,
                    x:880,
                    duration:1500,
                    yoyo:false,
                    //delay:500,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('level20')}
                        });
                        
};

        
    };
    

      

    //this is JSON stuff to add later
   // this.levelData= {
   //     platforms:[{
            
   //         x:72,
   //         y:450,
    //        numTiles:6,
    //        key:'snowTile'
    //    },
        //{the next block would start here
            
        //}
    //    ]
   // }
    

// create after preload
level22Scene.create = function(){

    //announce level
    this.act='HAPPY PENGUIN';
    this.actText= this.add.bitmapText(200, 300, 'happyPenguinFont', this.act);
    this.actText.setScale(0.5);
    this.actText.depth=6
    
    //create border
    this.sideDrapes=this.add.sprite(400,-100, 'sideDrapes');
        this.sideDrapes.setScale(18);
        this.sideDrapes.depth=7;
        this.sideDrapes.setScrollFactor(0);
    
    this.leftDrapes=this.add.sprite(-80,150, 'midDrapes');
        this.leftDrapes.setScale(10);
        this.leftDrapes.depth=7;
        this.leftDrapes.setScrollFactor(0);
    
    this.rightDrapes=this.add.sprite(880,150, 'midDrapes');
        this.rightDrapes.setScale(10);
        this.rightDrapes.depth=7;
        this.rightDrapes.setScrollFactor(0);
    
    //create control keys
    this.cursors=this.input.keyboard.createCursorKeys();
  //create Santa 
  this.santa=this.physics.add.sprite(300,0, 'santa');
    //this.santa.setOrigin(0,0);
    //Santa cannot go off-screen
this.santa.body.setCollideWorldBounds(true);
this.santa.body.bounce.y=.2;   
    //create arms movement
    this.anims.create({
    key: 'arms',
    frames: this.anims.generateFrameNumbers('santa', { start: 1, end: 2, }),
    frameRate: 3,
    repeat: -1,
});
    //play created animation
    this.santa.play('arms');

    
        this.gameW = this.sys.game.config.width;
        this.gameH = this.sys.game.config.height;
//generate platform using rock tile 
this.platform1 = this.add.tileSprite(230,145, 1*96, 1*28, 'rockPlatform') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform1);
    //platform does not fall
    this.platform1.body.allowGravity=false;
    //platform does not react when hit
    this.platform1.body.immovable=true;
    
//make ground
this.ground = this.add.tileSprite(0,600, 25*64, 1*28, 'rockPlatform') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.ground);
    //platform does not fall
    this.ground.body.allowGravity=false;
    //platform does not react when hit
    this.ground.body.immovable=true;
    
    //make more platforms
    
    this.platform2 = this.add.tileSprite(340,525, 2*64, 1*28, 'rockPlatform') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform2);
    //platform does not fall
    this.platform2.body.allowGravity=false;
    //platform does not react when hit
    this.platform2.body.immovable=true;
    
    this.platform3 = this.add.tileSprite(490,450, 64*2, 1*28, 'rockPlatform') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform3);
    //platform does not fall
    this.platform3.body.allowGravity=false;
    //platform does not react when hit
    this.platform3.body.immovable=true;
    
    this.platform4 = this.add.tileSprite(230,325, 3*32, 1*28, 'rockPlatform') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform4);
    //platform does not fall
    this.platform4.body.allowGravity=false;
    //platform does not react when hit
    this.platform4.body.immovable=true;
    
    this.platform5 = this.add.tileSprite(230,260, 96*1, 1*28, 'rockPlatform') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform5);
    //platform does not fall
    this.platform5.body.allowGravity=false;
    //platform does not react when hit
    this.platform5.body.immovable=true;    
    
    this.platform6 = this.add.tileSprite(200,235, 4*32, 1*28, 'rockPlatform') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform6);
    //platform does not fall
    this.platform6.body.allowGravity=false;
    //platform does not react when hit
    this.platform6.body.immovable=true;
    
    this.platform7 = this.add.tileSprite(100,500, 2*32, 1*28, 'rockPlatform') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform7);
    //platform does not fall
    this.platform7.body.allowGravity=false;
    //platform does not react when hit
    this.platform7.body.immovable=true;
    
    //create penguin
    this.penguin=this.physics.add.sprite(490,390, 'penguin')
    this.penguin.setScale(.05);
    this.penguin.body.setCollideWorldBounds(true);

    //merge platforms into group
    this.platforms=this.add.group();
    this.platforms.add(this.ground)
    this.platforms.add(this.platform1)
    this.platforms.add(this.platform2)
    this.platforms.add(this.platform3)
    this.platforms.add(this.platform4)
    this.platforms.add(this.platform5)
    this.platforms.add(this.platform6)
    this.platforms.add(this.platform7)
    //make platform move
    this.platform1.body.velocity.x=400;
    this.platform5.body.velocity.x=250;
    this.platform2.body.velocity.x=-300;
    this.platform6.body.velocity.x=400
    //this.platform7.body.velocity.x=-400
    
    //create blood group
    this.bloods=this.add.group();
    
    //create moon and clouds
    this.moon = this.add.sprite(325,50, 'moon');
    this.moon.depth=2;
    this.moon.setScale(1.5);
    this.cloud1 = this.physics.add.sprite(650,100, 'cloud1');
    this.cloud1.body.allowGravity=false;
    this.cloud1.depth=2;
    this.cloud2 = this.physics.add.sprite(750,100, 'cloud2');
    this.cloud2.body.allowGravity=false;
    this.cloud2.depth=2;
    this.cloud3 = this.physics.add.sprite(550,175, 'cloud2');
    this.cloud3.body.allowGravity=false;
    this.cloud3.depth=2;
    this.cloud1.body.velocity.x=-60;
    this.cloud2.body.velocity.x=-100;
    this.cloud3.body.velocity.x=-30;
    this.level22castle = this.add.sprite(200,700, 'level22castle');
    this.level22castle.setScale(2);
    this.level22castle.depth=2;

    
    
    //create castle tiles
    //this.leftwall = this.add.tileSprite(20,600, 69*23, 64*28, 'vaniaTiles') ; 
   // this.leftwall.tintBottomLeft=4
    //this.leftwall.tintBottomRight=9
    
    
    //create squish sound
        this.squishSound = this.sound.add('squish');
        this.riseOfTheSaviourSound = this.sound.add('riseOfTheSaviour');

    //adjust depth
    this.santa.depth=3;
    this.penguin.depth=3;
    this.santa.setScale(1.4);
    //add collision detection    
this.physics.add.collider(this.santa, this.platforms);
 this.physics.add.collider(this.penguin, this.platforms);
 this.physics.add.collider(this.platforms, this.platforms);
 this.physics.add.collider(this.santa, this.penguin);

this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                   x:-480,
                    duration:3000,
                    delay:500,
                        });
                
    this.rightDrapes.moveTween=this.tweens.add({
                   targets:this.rightDrapes,
                   x:1280,
                    duration:3000,
                    delay:500,
                    callbackScope:this,   
                    //onComplete:function(){this.actText.destroy()}
                        });

  //create controls for mobile 
    if(operatingSystem=='mobile'){
        this.input.addPointer(1);
        this.leftArrow=this.add.sprite(0,0,'leftArrow');
                        this.leftArrow.setPosition(50,550);
                        this.leftArrow.setScale(.2);
                        this.leftArrow.depth=9;
                        this.leftArrow.setInteractive();
                       this.leftArrow.on('pointerdown', function(){this.cursors.left.isDown=true},this);

                            this.leftArrow.on('pointerup', function(){this.cursors.left.isDown=false},this); this.rightArrow=this.add.sprite(0,0,'rightArrow');
  
                        this.rightArrow.setPosition(750,550);
                        this.rightArrow.setScale(.2);
                        this.rightArrow.depth=9;
                        this.rightArrow.setInteractive();
     this.rightArrow.on('pointerdown', function(){this.cursors.right.isDown=true}, this) ;

                                this.rightArrow.on('pointerup', function(){this.cursors.right.isDown=false}, this) ; 
        
        
        this.upArrow=this.add.sprite(0,0,'rightArrow');
                        this.upArrow.setPosition(750,450);
                        this.upArrow.angle=-90;
                        this.upArrow.setScale(.2);
                        this.upArrow.depth=9;
                        this.upArrow.setInteractive();         
    
                                this.upArrow.on('pointerdown', 
                                function(){this.cursors.up.isDown=true}, this) ;
    
                            this.upArrow.on('pointerup', function(){this.cursors.up.isDown=false}, this)
    
            
        this.upArrow2=this.add.sprite(0,0,'rightArrow');
                        this.upArrow2.setPosition(50,450);
                        this.upArrow2.angle=-90;
                        this.upArrow2.setScale(.2);
                        this.upArrow2.depth=9;
                        this.upArrow2.setInteractive();         
    
                                this.upArrow2.on('pointerdown', 
                                function(){this.cursors.up.isDown=true}, this) ;
    
                            this.upArrow2.on('pointerup', function(){this.cursors.up.isDown=false}, this)
    
    
    };
//load background and necessary variables
    this.starScale=2;
    this.gasScale=1.3;
    this.stars = this.add.sprite(0,0, 'starBackground');
    this.gasses = this.add.sprite(0,0, 'gasses');
    this.gasses.alpha=.7;
    this.gasses.depth = 1;
    this.gasses.setScale(1.3);
    this.stars.depth = 0;
    this.stars.setScale(2);
    this.riseOfTheSaviourSound.play();
    this.checkStars=false;
    this.checkGas=false;
    
      //tweens to scale background

this.stars.moveTween=this.tweens.add({
                   targets:this.stars,
                    scaleX:17,
                    scaleY:17,
                    duration:10000,
                    yoyo:true,
                    repeat:-1,
                        });
    
this.gasses.moveTween=this.tweens.add({
                   targets:this.gasses,
                    scaleX:18,
                    scaleY:18,
                    duration:19000,
                    yoyo:true, 
                    repeat:-1,
                        });
    
    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                   x:this.actText.x,
                    duration:3000,
                    delay:500,
                    callbackScope:this,   
                    onComplete:function(){
                        this.actText.x=200;
                        this.actText.depth=10
                        this.actText.text = '  IS NOT \N  COMPLETE';
                                         
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                   x:this.actText.x,
                    duration:3000,
                    delay:500,
                    callbackScope:this,   
                    onComplete:function(){this.actText.text = 'HELP PENGUIN \N  DEFEAT \N   SANTA';
                                         
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                   x:this.actText.x,
                    duration:2000,
                    delay:500,
                    callbackScope:this,   
                    onComplete:function(){this.actText.text = 'MORE LEVELS';
                                                                                  
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                   x:this.actText.x,
                    duration:2000,
                    delay:500,
                    callbackScope:this,   
                    onComplete:function(){this.actText.text = 'MORE ENEMIES';
                                                                                  
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                   x:this.actText.x,
                    duration:2000,
                    delay:500,
                    callbackScope:this,   
                    onComplete:function(){this.actText.text = 'MORE HAPPY!';
                                         
                                                            this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                   x:this.actText.x,
                    duration:2000,
                    delay:500,
                    callbackScope:this,   
                    onComplete:function(){this.actText.text = 'YOU CLICK NOW!';
                                          this.actText.x=this.actText.x-45;
                                          this.donate=this.add.sprite(this.gameW/2, this.actText.y+100, 'donate');
                                         this.donate.depth=99;
                                          this.donate.setInteractive();
                                          
                                         
                                         }
                        }); 
                                         }
                        });
                                         
                                         }
                        });
                                         
                                         }
                        });
                                         
                                         
                                         }
                        
                    
                    
                    });               
                                         
                                         
                                         
                                         }
                        });
};

level22Scene.update = function(){
    //create animated background
    this.stars.angle++;
    this.gasses.angle--;
    
    
    //move clouds
    if(this.cloud1.x<-100){
        this.cloud1.x=1050
    };

    if(this.cloud2.x<-8000){
        this.cloud2.x=10000
    };
    
    if(this.cloud3.x<-100){
        this.cloud3.x=850
    };

 if(this.platform4.body.touching.up==true){
     this.platform4.body.allowGravity=true
 };
    
    if(this.platform7.body.touching.up==true){
        this.platform4.body.allowGravity=true
    };
    
    if(this.penguin.body.touching.up==true && this.penguin.body.touching.down==true){
        this.squishPenguin()
    };
                     
if(this.platform4.y>this.platform7.y&&this.penguin.body.touching.up==true){this.squishPenguin()}

    //make platforms bounce off each other and NOT the penguin
    let platforms=this.platforms.getChildren();
    let numPlatforms=platforms.length;
    
    for(let i = 0; i< numPlatforms; i++){
        platforms[i].depth=3
        if (platforms[i].x>=this.gameW-45 || platforms[i].x<=45){
            if(platforms[i].x>=this.gameW-45){platforms[i].x=this.gameW-53}else{platforms[i].x=53}
            platforms[i].body.velocity.x=platforms[i].body.velocity.x*-1};
        if ((platforms[i].body.touching.left==true && this.penguin.body.touching.right == false)  || (platforms[i].body.touching.right==true && this.penguin.body.touching.left==false)){
            platforms[i].body.velocity.x=platforms[i].body.velocity.x*-1;
        }
        }
    
    //squish penguin
    
    
    if(this.penguin.body.touching.left==true && this.penguin.body.touching.right==true){
        this.squishPenguin()
    };
                        
    
        
        
        //this.scene.start('GameOver');
    
    //check keys for moving and jumping
    if(this.cursors.left.isDown){
                this.cursors.right.isDown=false;

        this.penguin.body.setVelocityX(-100);
        this.penguin.angle=this.penguin.angle - this.penguinRotation;
        
    }


   else if(this.cursors.right.isDown){
        this.cursors.left.isDown=false;
        this.penguin.body.setVelocityX(100);
        this.penguin.angle=this.penguin.angle - this.penguinRotation}
    
    else{
        this.penguin.body.setVelocityX(0);
        this.penguin.angle=0;
    };
//make penguin wobble
   if(this.penguin.angle>=15 || this.penguin.angle<=-15){
            this.penguinRotation=this.penguinRotation*-1;
        };
           //check keys to make penguin jump
       
  if(this.cursors.space.isDown &&this.penguin.body.touching.down==true|| this.cursors.up.isDown && this.penguin.body.touching.down==true){
        this.penguin.body.setVelocityY(-500);
   
      
};

    //make penguin not wobble during jump
      if(this.penguin.body.touching.down==false){
          this.penguin.angle=0;
      };
        
   // if (this.santa.y>64&&this.santa.body.touching.down==true){
       // this.squishSanta();
   // };
if (this.penguin.body.touching.down==false){this.falling=this.penguin.body.velocity.y};
if (this.falling >=900&&this.penguin.body.touching.down==true){this.squishPenguin();
                                                     }
          
    
    if(this.donate)
        
    {this.donate.on('pointerdown', function(){window.open("https://www.paypal.com/donate/?token=eOrw4DQv9fF0Vz_ojdB26xaQHqeOsHLk7F3DYJ-U0RvyUqWTFY4c4cnXwDTNyGCttO9gJ0","_self")})};
    
    
    iggleResize();

    };    
    
  

       
       




