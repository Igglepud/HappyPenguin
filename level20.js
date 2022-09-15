let level20Scene = new Phaser.Scene('Level20');

level20Scene.init = function(){
this.penguinRotation=5;
this.numberOfBloods=0;
this.targetX
this.targetY
this.throwStartX
    
        game.input.addPointer();
        game.input.addPointer();

     //create sniper dot
    this.spawnDot=function(){
        this.dot=this.physics.add.sprite(Math.random()*this.gameW, Math.random()*this.gameH, 'redDot');
        this.dot.setScale(.005);
        this.dot.body.allowGravity=false;
         this.physics.add.collider(this.dot, this.penguin);
  
    };
    
    this.throwPresent=function(){
        this.present1=this.physics.add.sprite(this.santa.x, this.santa.y, 'present1');
        this.present1.body.bounce.y=.3;
        this.present1.setOrigin(0,0);
        this.targetX=this.penguin.x;
        this.targetY=this.penguin.y;
        this.present1.body.velocity.x=300;
        this.present1.body.velocity.y=-300;
        this.throwStartX=this.present1.x;
        this.physics.add.collider(this.present1, this.penguin, this.squishPenguin, null, this);
        this.physics.add.collider(this.present1, this.platforms);
        this.physics.add.collider(this.present1, this.ground);

        if(this.targetX<this.present1.x){
            this.present1.body.velocity.x=-300;
        };
        
    };
    
    this.shootPenguin=function(){
      this.gunshotSound.play();
        this.squishPenguin();
        
    };

this.squishPenguin=function(){
     this.penguin.visible=false;
    this.squishSound.play();
    this.falling=0;
        this.whipTheGhostsSound.stop();

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
    
    this.penguin.x=0;
    this.penguin.y=800;
                this.bloods[this.numberOfBloods].setScale(.05);
                this.bloods[this.numberOfBloods].depth=0;
                this.bloods[this.numberOfBloods].alpha=.5;
this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    //delay:0,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('Level20')}
                        });
      
      this.rightDrapes.moveTween=this.tweens.add({
                   targets:this.rightDrapes,
                    x:880,
                    duration:1500,
                    yoyo:false,
                    //delay:0,
                    callbackScope:this,
                    
                        });
        
    };
    
    
    
  this.squishSanta=function(){
      this.squishSound.play();
      this.whipTheGhostsSound.stop()
      ;

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
            this.bloods[this.numberOfBloods].depth=0;
            this.bloods[this.numberOfBloods].alpha=.5;
            this.numberOfBloods++;
            this.santa.y=0;
            this.santa.body.allowGravity=false;
            this.santa.visible=false;
       this.flag=this.physics.add.sprite(this.penguin.x+10, this.penguin.y, 'flag');
                this.physics.add.collider(this.flag, this.platforms);

            this.flag.play('flagWave');
            this.flag.setScale(1.5);
      
      
      this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    //delay:0,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('Level21')}
                        });
      
      this.rightDrapes.moveTween=this.tweens.add({
                   targets:this.rightDrapes,
                    x:880,
                    duration:1500,
                    yoyo:false,
                    //delay:0,
                    callbackScope:this,
                    
                        });
};

        
    
    
  

    
    

// create after preload
level20Scene.create = function(){
    
    
    this.explosions=this.add.group();
    
    this.act='Act 5-1';
    this.actText= this.add.text(300,300, this.act, {fontSize:'72px'});
    this.actText.depth=2
         //make curtains
     this.sideDrapes=this.add.sprite(400,-100, 'sideDrapes');
        this.sideDrapes.setScale(18);
        this.sideDrapes.depth=3;
    
    this.leftDrapes=this.add.sprite(-40,150, 'midDrapes');
        this.leftDrapes.setScale(10);
        this.leftDrapes.depth=2;
    
    this.rightDrapes=this.add.sprite(880,150, 'midDrapes');
        this.rightDrapes.setScale(10);
        this.rightDrapes.depth=2;
    //create control keys
    this.cursors=this.input.keyboard.createCursorKeys();
  //create Santa 
  this.santa=this.physics.add.sprite(80,0, 'elf');
    this.santa.setScale(3);
    this.santa.setOrigin(0,0);
    //Santa cannot go off-screen
this.santa.body.setCollideWorldBounds(true);
this.santa.body.bounce.y=.2;   
    //create arms movement
  //  this.anims.create({
    //key: 'arms',
    //frames: this.anims.generateFrameNumbers('santa', { start: 1, end: 2, }),
    //frameRate: 3,
    //repeat: -1,
//});
    //play created animation
  //  this.santa.play('arms');

    
        this.gameW = this.sys.game.config.width;
        this.gameH = this.sys.game.config.height;
//generate platform using snow tile 
this.platform1 = this.add.tileSprite(100,124, 6*32, 1*28, 'snowTile') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform1);
    //platform does not fall
    this.platform1.body.allowGravity=false;
    //platform does not react when hit
    this.platform1.body.immovable=true;
    
//make ground
this.ground = this.add.tileSprite(0,600, 50*32, 1*28, 'snowTile') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.ground);
    //platform does not fall
    this.ground.body.allowGravity=false;
    //platform does not react when hit
    this.ground.body.immovable=true;
    
    //make more platforms
    
    this.platform2 = this.add.tileSprite(100,500, 32*3, 1*28, 'snowTile') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform2);
    //platform does not fall
    this.platform2.body.allowGravity=false;
    //platform does not react when hit
    this.platform2.body.immovable=true;
    
    this.platform3 = this.add.tileSprite(600,500, 32*3, 1*28, 'snowTile') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform3);
    //platform does not fall
    this.platform3.body.allowGravity=false;
    //platform does not react when hit
    this.platform3.body.immovable=true;
    
    this.platform4 = this.add.tileSprite(200,400, 2*32, 1*28, 'snowTile') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform4);
    //platform does not fall
    this.platform4.body.allowGravity=false;
    //platform does not react when hit
    this.platform4.body.immovable=true;
    
    this.platform5 = this.add.tileSprite(500,400, 2*32, 1*28, 'snowTile') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform5);
    //platform does not fall
    this.platform5.body.allowGravity=false;
    //platform does not react when hit
    this.platform5.body.immovable=true;    
    
    this.platform6 = this.add.tileSprite(500,285, 1*32, 1*28, 'snowTile') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform6);
    //platform does not fall
    this.platform6.body.allowGravity=false;
    //platform does not react when hit
    this.platform6.body.immovable=true;
    
    this.platform7 = this.add.tileSprite(500,200, 1*32, 1*28, 'snowTile') ; 
    
    //add physics to created platform
    this.physics.add.existing(this.platform7);
    //platform does not fall
    this.platform7.body.allowGravity=false;
    //platform does not react when hit
    this.platform7.body.immovable=true;
    
    //create penguin
    this.penguin=this.physics.add.sprite(400,555, 'penguin')
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
    this.platform1.body.velocity.x=100;
    this.platform3.body.velocity.x=250;
    this.platform2.body.velocity.x=-300;
    this.platform6.body.velocity.x=400
    this.platform7.body.velocity.x=-400
    
    //create blood group
    this.bloods=this.add.group({
    
});
    
    //create left wall, right wall, and ceiling
    this.leftwall = this.add.tileSprite(20,600, 69*23, 64*28, 'redBrickTile') ; 
    this.leftwall.tintBottomLeft=4
    this.leftwall.tintBottomRight=9
    
    
    //create squish sound
        this.squishSound = this.sound.add('squish');
        this.gunshotSound = this.sound.add('gunshot');
        this.whipTheGhostsSound = this.sound.add('whipTheGhosts');
        this.explosionSound = this.sound.add('explosionSound');

    //adjust depth
    this.santa.depth=1;
    this.penguin.depth=1;
    
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
                    onComplete:function(){this.actText.destroy()}
                        });
   
    
    
    //create sniper dot timer
    this.spawnDotTimer = this.time.addEvent({
        delay: 30000,
        repeat: 0,
        callback: function(){this.spawnDot()},
        callbackScope: this,
    });
    
      //create throw present timer
    this.spawnDotTimer = this.time.addEvent({
        delay: 5000,
        repeat: -1,
        callback: function(){this.throwPresent()},
        callbackScope: this,
    });
    
    //create controls for mobile 
    if(operatingSystem=='mobile'){
        this.input.addPointer(1);
        this.leftArrow=this.add.sprite(0,0,'leftArrow');
                        this.leftArrow.setPosition(50,550);
                        this.leftArrow.setScale(.2);
                        this.leftArrow.depth=5;
                        this.leftArrow.setInteractive();
                       this.leftArrow.on('pointerdown', function(){this.cursors.left.isDown=true},this);

                            this.leftArrow.on('pointerup', function(){this.cursors.left.isDown=false},this); this.rightArrow=this.add.sprite(0,0,'rightArrow');
  
                        this.rightArrow.setPosition(750,550);
                        this.rightArrow.setScale(.2);
                        this.rightArrow.depth=5;
                        this.rightArrow.setInteractive();
     this.rightArrow.on('pointerdown', function(){this.cursors.right.isDown=true}, this) ;

                                this.rightArrow.on('pointerup', function(){this.cursors.right.isDown=false}, this) ; 
        
        
        this.upArrow=this.add.sprite(0,0,'rightArrow');
                        this.upArrow.setPosition(750,450);
                        this.upArrow.angle=-90;
                        this.upArrow.setScale(.2);
                        this.upArrow.depth=5;
                        this.upArrow.setInteractive();         
    
                                this.upArrow.on('pointerdown', 
                                function(){this.cursors.up.isDown=true}, this) ;
    
                            this.upArrow.on('pointerup', function(){this.cursors.up.isDown=false}, this)
    
            
        this.upArrow2=this.add.sprite(0,0,'rightArrow');
                        this.upArrow2.setPosition(50,450);
                        this.upArrow2.angle=-90;
                        this.upArrow2.setScale(.2);
                        this.upArrow2.depth=5;
                        this.upArrow2.setInteractive();         
    
                                this.upArrow2.on('pointerdown', 
                                function(){this.cursors.up.isDown=true}, this) ;
    
                            this.upArrow2.on('pointerup', function(){this.cursors.up.isDown=false}, this)
    
    
    };
//create explosion animation
this.anims.create({
    key: 'explode',
    frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 6, }),
    frameRate: 6,
    
});
    
    this.anims.create({
    key: 'flagWave',
    frames: this.anims.generateFrameNumbers('flag', { start: 0, end: 9, }),
    frameRate: 6,
    repeat:-1,
    
});
    
this.whipTheGhostsSound.play();
};

level20Scene.update = function(){

 


    //make platforms bounce off each other and NOT the penguin
    let platforms=this.platforms.getChildren();
    let numPlatforms=platforms.length;
    
    for(let i = 0; i< numPlatforms; i++){
        platforms[i].depth=1
        if (platforms[i].x>=this.gameW-45 || platforms[i].x<=45){
            if(platforms[i].x>=this.gameW-45){platforms[i].x=this.gameW-53}else{platforms[i].x=53}
            platforms[i].body.velocity.x=platforms[i].body.velocity.x*-1};
        if ((platforms[i].body.touching.left==true && this.penguin.body.touching.right == false)  || (platforms[i].body.touching.right==true && this.penguin.body.touching.left==false)){
            platforms[i].body.velocity.x=platforms[i].body.velocity.x*-1;
        }
        }
    
    //squish penguin
    
    
    if(this.penguin.body.touching.left && this.penguin.body.touching.right){
        this.squishPenguin()
    };
                        
    
        
        
        //this.scene.start('GameOver');
    
    //check keys for moving and jumping
    if(this.cursors.left.isDown){
                this.cursors.right.isDown=false;

        this.penguin.body.setVelocityX(-100);
        this.penguin.angle=this.penguin.angle-this.penguinRotation
        
    }


   else if(this.cursors.right.isDown){
        this.cursors.left.isDown=false;
        this.penguin.body.setVelocityX(100);
        this.penguin.angle=this.penguin.angle+this.penguinRotation}
    
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
        
    if (this.santa.y>64&&this.santa.body.touching.down==true){
        this.squishSanta();
    };

                                                         
                                      
    
    
    //check for dot's existence, move dot and shoot penguin
    if(this.dot!=null){
        
        if(this.dot.body.touching.none==false){
            this.dot.destroy();
        this.shootPenguin();
            this.dot=null;
            return;
    };
        if(this.dot.y>this.penguin.y){
        this.dot.body.velocity.y=-40
        };
        
        if(this.dot.y<this.penguin.y){
            this.dot.body.velocity.y=40
        };
       
        if(this.dot.x<this.penguin.x){
        this.dot.body.velocity.x=40
        };
        
        if(this.dot.x>this.penguin.x){
            this.dot.body.velocity.x=-40
        };
    };
    
    //move and destroy present
        if(this.present1!=null){
        
        if(this.present1.x==this.ThrowStartX-this.targetX){
            this.present1.body.velocity.y=0;
        };
            if(this.present1.x==this.ThrowStartX-(this.targetX*-1)){
            this.present1.body.velocity.y=0;
        };
        };
 
    //fall damage
    if (this.penguin.body.touching.down==false){this.falling=this.penguin.body.velocity.y};
    if (this.falling >=900&&this.penguin.body.touching.down==true){this.squishPenguin();   
    };
    
    
 

 
    if(this.present1!=null){

        if(this.present1.body.touching.none==false){
            this.explosion=this.add.sprite(this.present1.x, this.present1.y-52, 'explosion');
            this.explosion.setScale(.5);
            this.explosions.add(this.explosion);
            this.explosion.play('explode');
            
            this.present1.x=8000;
            this.present1.y=8000;
            
                        this.explosionSound.play();
            this.explosion.on('animationcomplete', this.explosion.destroy)
                                              };
                     };
    
    
};
iggleResize();

    
};

       
       




