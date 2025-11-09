let level04Scene = new Phaser.Scene('Level04');

level04Scene.init = function(data){
this.sliding=false;
 this.penguinRotation=5;
 
    
    
    //reate closeDrapes function
    this.closeDrapes=function(){                   
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
                    
                        });};
    
    
    
    //create lose function
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
                                        this.actText.text = '';
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=125
                                        this.actText.text = '';
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=150
                                        this.actText.text = '';
                
                        

                                         
                                         }
                        });
                    
                                         
                                         }
                        });
                                         
                                         }
                        });
 this.closeDrapes();
  
 this.iGotHim=this.add.sprite(this.snowman.x-50,this.snowman.y,'iGotHim');
    this.iGotHim.setScale(.75)
}; 
  
    
    //create win
    this.win=function(){
        
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
    this.music.stop();
    this.snowSplatSound.play();
    
    this.flag=this.physics.add.sprite(this.penguin.x+10, this.penguin.y, 'flag');
                this.physics.add.collider(this.flag, this.groundLayer);

            this.flag.play('flagWave');
            this.flag.setScale(1.5);
            this.physics.add.collider(this.flag,this.platform4)
    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){                                         this.cursors.left.isDown=false;

                                          this.actText.x=300
                                        this.actText.text = '';
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=300
                                        this.actText.text = '';
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=300
                                        this.actText.text = '';
                        
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=200
                                        this.actText.text = '!';
                        
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:1,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=200
                                        this.actText.text = '';
                                          
                                          this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('Level20')}
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
                    onComplete:function(){this.scene.start('Level02')}
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
};
level04Scene.preload = function(data){

    
    
};
// create after preload
level04Scene.create = function(){
    
    //create penguin
    this.penguin=this.physics.add.sprite(200,200,'penguin')
    this.penguin.setScale(.05);
     //create control keys
    this.cursors=this.input.keyboard.createCursorKeys();
    
    this.cloud=this.add.sprite(300,150,'cloud2')
    this.santa=this.add.sprite(this.cloud.x+20, this.cloud.y-50, 'smallSanta');
    this.santa.setScale(2);
    this.santa.depth=0;
    this.cloud.depth=1;
   //animate flag
    this.anims.create({
    key: 'flagWave',
    frames: this.anims.generateFrameNumbers('flag', { start: 0, end: 9, }),
    frameRate: 6,
    repeat:-1,
    
});     
  
   //animate santa
    this.anims.create({
    key: 'walkDown',
    frames: this.anims.generateFrameNumbers('smallSanta', { start: 6, end: 8, }),
    frameRate: 3,
    repeat:-1,
    
});     
this.santa.play('walkDown');
     this.act='ACT 1.4';
    this.actText= this.add.bitmapText(300, 300, 'happyPenguinFont', this.act);
    this.actText.setScale(0.45);
    this.actText.depth=2
    this.actText.setTint(0x00ff00);
         //make curtains
     this.sideDrapes=this.add.sprite(400,-100, 'sideDrapes');
        this.sideDrapes.setScale(18);
        this.sideDrapes.depth=4;
        this.sideDrapes.setScrollFactor(0);
    
    this.leftDrapes=this.add.sprite(-40,150, 'midDrapes');
        this.leftDrapes.setScale(10);
        this.leftDrapes.depth=3;
        this.leftDrapes.setScrollFactor(0);
    
    this.rightDrapes=this.add.sprite(880,150, 'midDrapes');
        this.rightDrapes.setScale(10);
        this.rightDrapes.depth=3;
        this.rightDrapes.setScrollFactor(0);

   
    //move camera
    
    //this.cameras.main.startFollow(this.penguin);
    this.cameras.main.setBounds(0, 0, 896, 600);
    
    
     //create blood group
    this.bloods=this.add.group({
    
});
    //create squish sound
        this.squishSound = this.sound.add('squish');
        this.snowSplatSound = this.sound.add('snowSplat');
        this.gunshotSound = this.sound.add('gunshot');
        this.music = this.sound.add('snowMusic1');
    
   //move curtains 
    this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                   x:-680,
                    duration:3000,
                    delay:500,
                        });
                
    this.rightDrapes.moveTween=this.tweens.add({
                   targets:this.rightDrapes,
                   x:1480,
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
    
    
    
    //crete platform 1
        //create ground
    this.platform1 = this.add.tileSprite(0,600, 60*32, 1*32, 'snowTile') ; 
    this.platform1.depth=1; 
    //add physics to created platform
    this.physics.add.existing(this.platform1);
    //platform does not fall
    this.platform1.body.allowGravity=false;
    //platform does not react when hit
    this.platform1.body.immovable=true;
    
       
    
        this.music.play();
this.bg=this.add.sprite(400,600,'snowBG');
this.bg.depth=-1;
this.bg.setScale(2)
    
this.physics.add.collider(this.platform1,this.penguin,function(){this.sliding=true;},null,this)
    //end create
};
level04Scene.update = function(){
    
    
//check for loss
    if(this.penguin.y>900){this.lose()};
    
        //check keys for moving and jumping
    if(this.cursors.left.isDown&&this.sliding==false){
                this.cursors.right.isDown=false;

        this.penguin.body.setVelocityX(-100);
        this.penguin.angle=this.penguin.angle - this.penguinRotation * (this.game.loop.delta / 16.67);
        
    }


   else if(this.cursors.right.isDown&&this.sliding==false){
        this.cursors.left.isDown=false;
        this.penguin.body.setVelocityX(100);
        this.penguin.angle=this.penguin.angle + this.penguinRotation * (this.game.loop.delta / 16.67);}
   
    else if(this.cursors.right.isDown&&this.sliding==true&&this.penguin.body.velocity.x<100){
        this.cursors.left.isDown=false;
        this.penguin.body.velocity.x+=2;
        this.penguin.angle=this.penguin.angle + this.penguinRotation * (this.game.loop.delta / 16.67);}
    else if(this.cursors.left.isDown&&this.sliding==true&&this.penguin.body.velocity.x>-100){
        this.cursors.left.isDown=false;
        this.penguin.body.velocity.x-=2;
        this.penguin.angle=this.penguin.angle + this.penguinRotation * (this.game.loop.delta / 16.67);}
    
    
    
    else{if(this.sliding==false){
        this.penguin.body.setVelocityX(0);
        this.penguin.angle=0;};
    };
//make penguin wobble
   if(this.penguin.angle>=15 || this.penguin.angle<=-15){
            this.penguinRotation=this.penguinRotation*-1;
        };
           //check keys to make penguin jump
       
  if(this.cursors.space.isDown &&(this.penguin.body.blocked.down==true|| this.penguin.body.touching.down==true)|| this.cursors.up.isDown && (this.penguin.body.blocked.down==true || this.penguin.body.touching.down==true)){
        this.penguin.body.setVelocityY(-500);
   
      
};

    //make penguin not wobble during jump
      if( this.penguin.body.touching.down==false){
          this.penguin.angle=0;
      };
      iggleResize();

       
};