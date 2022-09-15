let level02Scene = new Phaser.Scene('Level02');

level02Scene.init = function(){
this.penguinRotation=5;
this.numberOfBloods=0;
this.targetX
this.targetY
    
        game.input.addPointer();
        game.input.addPointer();


this.lose=function(){

    this.squishPenguin();
    this.cursors.up.isDown=false;
    this.cursors.right.isDown=false;
    this.cursors.down.isDown=false;
    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){                                         this.cursors.left.isDown=false;
                                        this.actText.x=300
                                       
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=125
                                      
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=150
                                       
                        this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('Level01')}
                        });
      
      this.rightDrapes.moveTween=this.tweens.add({
                   targets:this.rightDrapes,
                    x:880,
                    duration:1500,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    
                        });
                        

                                         
                                         }
                        });
                    
                                         
                                         }
                        });
                                         
                                         }
                        });
    
 this.iGotHim=this.add.sprite(this.snowman.x-50,this.snowman.y,'iGotHim');
    this.iGotHim.setScale(.75)
}; 
    
    
    
this.win=function(){
    this.music.stop();
    this.snowSplatSound.play();
    
    let bloodNumber=Math.random()*3;
        if (bloodNumber<=1 && bloodNumber>0){
         this.bloods.create()
            this.bloods[this.numberOfBloods]=this.add.sprite(this.snowman.x, this.snowman.y, 'snowBlood1')
        };
    
    
        
        if (bloodNumber<=2 && bloodNumber>1){
            this.bloods.create(); 
        this.bloods[this.numberOfBloods]=this.add.sprite(this.snowman.x, this.snowman.y, 'snowBlood2')
        };
        if (bloodNumber<=3 && bloodNumber>2){
            this.bloods.create();        
        this.bloods[this.numberOfBloods]=this.add.sprite(this.snowman.x, this.snowman.y, 'snowBlood3')
        };
            this.bloods[this.numberOfBloods].setScale(.05);
            this.bloods[this.numberOfBloods].depth=0;
            this.bloods[this.numberOfBloods].alpha=.5;
            this.numberOfBloods++;
            this.snowman.y=0;
            this.snowman.body.allowGravity=false;
            this.snowman.visible=false;
            this.flag=this.physics.add.sprite(this.penguin.x+10, this.penguin.y, 'flag');
                this.physics.add.collider(this.flag, this.platform3);

            this.flag.play('flagWave');
            this.flag.setScale(1.5);
    
    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){                                         this.cursors.left.isDown=false;

                                          this.actText.x=300
                                        
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=300
                                        
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=300
                                       
                        
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=200
                                       
                        
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=200
                                      
                                          
                                          this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('Level03')}
                        });
      
      this.rightDrapes.moveTween=this.tweens.add({
                   targets:this.rightDrapes,
                    x:880,
                    duration:1500,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    
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

this.squishPenguin=function(){
     this.penguin.visible=false;
    
    
    this.squishSound.play();
    this.falling=0;
        this.music.stop();

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
    
    this.penguin.x=9000;
    this.penguin.y=-9000;
        this.penguin.body.allowGravity=false;

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
                    onComplete:function(){this.scene.start('Level01')}
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
    
    
    
  this.squishsnowman=function(){
      this.snowSplatSound.play();
      this.music.stop();

        let bloodNumber=Math.random()*3;
        if (bloodNumber<=1 && bloodNumber>0){
         this.bloods.create()
            this.bloods[this.numberOfBloods]=this.add.sprite(this.snowman.x, this.snowman.y, 'snowBlood1')
        };
    
    
        
        if (bloodNumber<=2 && bloodNumber>1){
            this.bloods.create(); 
        this.bloods[this.numberOfBloods]=this.add.sprite(this.snowman.x, this.snowman.y, 'snowBlood2')
        };
        if (bloodNumber<=3 && bloodNumber>2){
            this.bloods.create();        
        this.bloods[this.numberOfBloods]=this.add.sprite(this.snowman.x, this.snowman.y, 'snowBlood3')
            
        };
      
      
            this.bloods[this.numberOfBloods].setScale(.05);
            this.bloods[this.numberOfBloods].depth=0;
            this.bloods[this.numberOfBloods].alpha=.5;
            this.numberOfBloods++;
            this.snowman.y=0;
            this.snowman.body.allowGravity=false;
            this.snowman.visible=false;
      this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    //delay:0,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('level03')}
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
    
};
// create after preload
level02Scene.create = function(){
    

    
    
    //animate flag
    this.anims.create({
    key: 'flagWave',
    frames: this.anims.generateFrameNumbers('flag', { start: 0, end: 9, }),
    frameRate: 6,
    repeat:-1,
    
});
    
        this.spikes = this.physics.add.group({
        key: 'spike',
        repeat: 40,
        setXY: {
            x: 0,
            y: 550,
            stepX: 30
            }
            
      });
    
        
        let spikes = this.spikes.getChildren();
        let numSpikes = spikes.length;
        for(let i = 0; i< numSpikes; i++){
        spikes[i].setScale(.3)
        spikes[i].depth=2;
        spikes[i].body.allowGravity=false;
        spikes[i].body.immovable=true;
        };
    
    this.act='Act 1-2';
    this.actText= this.add.text(300,300, this.act, {fontSize:'72px'});
    this.actText.depth=2
    this.actText.setColor('grey');
         //make curtains
     this.sideDrapes=this.add.sprite(400,-100, 'sideDrapes');
        this.sideDrapes.setScale(18);
        this.sideDrapes.depth=4;
    
    this.leftDrapes=this.add.sprite(-40,150, 'midDrapes');
        this.leftDrapes.setScale(10);
        this.leftDrapes.depth=3;
    
    this.rightDrapes=this.add.sprite(880,150, 'midDrapes');
        this.rightDrapes.setScale(10);
        this.rightDrapes.depth=3;
    //create control keys
    this.cursors=this.input.keyboard.createCursorKeys();
  //create snowman 
  this.snowman=this.physics.add.sprite(650,150, 'snowman');
    this.snowman.setScale(.5);
    //snowman cannot go off-screen
this.snowman.body.setCollideWorldBounds(false);
this.snowman.body.bounce.y=.2;   
    //create arms movement
  //  this.anims.create({
    //key: 'arms',
    //frames: this.anims.generateFrameNumbers('snowman', { start: 1, end: 2, }),
    //frameRate: 3,
    //repeat: -1,
//});
    //play created animation
  //  this.snowman.play('arms');

    
        this.gameW = this.sys.game.config.width;
        this.gameH = this.sys.game.config.height;

  


    
    //create blood group
    this.bloods=this.add.group({
    
});
    
    //place hill
 
    
    
    //create ground
    this.ground = this.add.tileSprite(0,600, 50*32, 1*28, 'snowTile') ; 
    this.ground.depth=1; 
    //add physics to created platform
    this.physics.add.existing(this.ground);
    //platform does not fall
    this.ground.body.allowGravity=false;
    //platform does not react when hit
    this.ground.body.immovable=true;

    
    //create platforms
    
    this.platform1 = this.add.tileSprite(180,224, 3*32, 1*28, 'snowTile2') ; 
    this.platform1.depth=1
    
    //add physics to created platform
    this.physics.add.existing(this.platform1);
    //platform does not fall
    this.platform1.body.allowGravity=false;
    //platform does not react when hit
    this.platform1.body.immovable=true;
           this.platform1.body.velocity.y=200;
 
    this.platform2 = this.add.tileSprite(380,174, 3*32, 1*28, 'snowTile2') ; 
    this.platform2.depth=1
    
    //add physics to created platform
    this.physics.add.existing(this.platform2);
    //platform does not fall
    this.platform2.body.allowGravity=false;
    //platform does not react when hit
    this.platform2.body.immovable=true;  
    
    this.platform2.body.velocity.y=-200;
    
    this.platform3 = this.add.tileSprite(650,274, 5*32, 1*28, 'snowTile2') ; 
    this.platform3.depth=1
    
    //add physics to created platform
    this.physics.add.existing(this.platform3);
    //platform does not fall
    this.platform3.body.allowGravity=false;
    //platform does not react when hit
    this.platform3.body.immovable=true;

    //group platforms
    this.platforms=this.add.group();
    this.platforms.add(this.platform1);
    this.platforms.add(this.platform2);
    this.platforms.add(this.platform3);

      //create penguin
      this.penguin=this.physics.add.sprite(this.platform1.x,this.platform1.y-20, 'penguin')
      this.penguin.setScale(.05);
      this.penguin.body.setCollideWorldBounds(false);
    
    //create squish sound
        this.squishSound = this.sound.add('squish');
        this.snowSplatSound = this.sound.add('snowSplat');
        this.gunshotSound = this.sound.add('gunshot');
        this.music = this.sound.add('snowMusic1');

    //adjust depth
    this.snowman.depth=1;
    this.penguin.depth=1;
    
    //add collision detection    

 this.physics.add.collider(this.snowman, this.penguin);
 this.physics.add.collider(this.snowman, this.spikes, function(){this.win()},null, this);
 this.physics.add.collider(this.spikes, this.ground);
 this.physics.add.collider(this.spikes, this.penguin, function(){
     this.penguin.y=this.penguin.y+50;
     this.lose();
 },null,this);

 this.physics.add.collider(this.ground, this.penguin);
 this.physics.add.collider(this.ground, this.snowman, this.win, null, this);
 this.physics.add.collider(this.platforms, this.snowman);
 //this.physics.add.collider(this.platforms, this.penguin);
 this.physics.add.collider(this.platforms, this.penguin, function(){if(this.snowman.flipX==false){this.snowman.body.velocity.x=-500};
  if(this.snowman.flipX==true){this.snowman.body.velocity.x=500};                
                                                    }, null, this);
 

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

this.bg=this.add.sprite(this.gameW/2,this.gameH/2,'snowBG');
this.bg.depth=0;
    
this.music.play();

};

level02Scene.update = function(){

 


    //make platforms bounce off each other and NOT the penguin
    
    
    //squish penguin
    
    
    if(this.penguin.body.touching.left==true && this.penguin.body.touching.right==true){
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
        
    //if (this.snowman.y>64&&this.snowman.body.touching.down==true){
   //     this.squishsnowman();
   // };

                                                         
                                      
    
    
    
 
    //fall damage
    if (this.penguin.body.touching.down==false){this.falling=this.penguin.body.velocity.y};
    if (this.falling >=900&&this.penguin.body.touching.down==true){this.squishPenguin();   
    };
    
    if(this.snowman.x<this.penguin.x){this.snowman.flipX=true};
    if(this.snowman.x>this.penguin.x){this.snowman.flipX=false};
 
    //snowman attacks
if( this.snowman.body.touching.left==true&&this.penguin.body.touching.down==true){
    this.snowman.body.velocity.x=-500   
    } 
    
else if (this.snowman.flipX && this.snowman.body.touching.right){
  this.snowman.body.velocity.x=500  
}
    else{
      this.snowman.body.velocity.x=0;  
    };
    

    
    if(this.penguin.body.touching.up==true&&this.snowman.body.touching.down==true){
                        this.lose();
                                    };
//reverse platform direction
if(this.platform2.y>=550||this.platform2.y<=50){this.platform2.body.velocity.y*=-1;
if(this.platform2.y>=550){this.platform2.y=542};if(this.platform2.y<=50){this.platform2.y=58};

};

    if(this.platform1.y>=550||this.platform1.y<=50){this.platform1.body.velocity.y*=-1;
        if(this.platform1.y>=550){this.platform1.y=542};if(this.platform1.y<=50){this.platform1.y=58};
    };
if(this.snowman.body.touching.up==true){this.win()};
iggleResize();
console.log(this.platform1.y,this.platform1.body.velocity.y);
};
 


       
       




