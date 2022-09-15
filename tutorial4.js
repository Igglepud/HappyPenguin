let tutorial4Scene = new Phaser.Scene('Tutorial4');

tutorial4Scene.init = function(data){
this.music=data.music;
this.music.play();
this.penguinRotation=5;
this.numberOfBloods=0;

        game.input.addPointer();
        game.input.addPointer();

    
    
this.win=function(){
    
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
                    duration:750,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){ this.music.stop();                                       
                        this.cursors.left.isDown=false;

                                          this.actText.x=300
                                        this.actText.setText('Good')
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=300
                                        this.actText.setText('job!')
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=300
                                        this.actText.setText('Penguin')
                        
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=200
                                        this.actText.setText('so happy!')
                        
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=200
                                        this.actText.setText('Now game \n' +'start!')
                                          
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
                    
                                         
                                         }
                        });
                                         
                                         }
                        });
    
    
};     
this.lose=function(){
    this.music.stop();
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
                                        this.actText.setText('No!')
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=125
                                        this.actText.setText('That not right!')
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=150
                                        this.actText.setText('You try again!')
                        this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('Title')}
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
    
    
};    
    
     //create sniper dot
    
    
   this.closeCurtains=function(){
      this.whipTheGhostsSound.stop();

        
      this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    //delay:0,
                    callbackScope:this,
                    onComplete:function(){}
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

this.squishPenguin=function(){
      
    this.squishSound.play();
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
                this.bloods[this.numberOfBloods].setScale(.05);
                this.bloods[this.numberOfBloods].depth=0;
                this.bloods[this.numberOfBloods].alpha=.5;
this.penguin.visible=false;
    this.penguin.x=9000;
    this.penguin.y=-9000;
    this.penguin.body.allowGravity=false;
    }; 
    
};


// create after preload
tutorial4Scene.create = function(){
  //create flag animation
this.anims.create({
    key: 'flagWave',
    frames: this.anims.generateFrameNumbers('flag', { start: 0, end: 9, }),
    frameRate: 6,
    repeat:-1,
    
});
      
    
    
    this.act='Tutorial 4';
    this.actText= this.add.text(300,300, this.act, {fontSize:'72px'});
    this.actText.depth=1
         //make curtains
     this.sideDrapes=this.add.sprite(400,-100, 'sideDrapes');
        this.sideDrapes.setScale(18);
        this.sideDrapes.depth=3;
    
    this.leftDrapes=this.add.sprite(-80,150, 'midDrapes');
        this.leftDrapes.setScale(10);
        this.leftDrapes.depth=2;
    
    this.rightDrapes=this.add.sprite(880,150, 'midDrapes');
        this.rightDrapes.setScale(10);
        this.rightDrapes.depth=2;
    //create control keys
    this.cursors=this.input.keyboard.createCursorKeys();
  

    
        this.gameW = this.sys.game.config.width;
        this.gameH = this.sys.game.config.height;
//generate platform using snow tile 

//make ground
this.ground = this.add.tileSprite(0,600, 50*32, 1*28, 'snowTile') ; 
this.ground.depth=1;   
    //add physics to created platform
    this.physics.add.existing(this.ground);
    //platform does not fall
    this.ground.body.allowGravity=false;
    //platform does not react when hit
    this.ground.body.immovable=true;
    
    
    //create penguin
    this.penguin=this.physics.add.sprite(350,500, 'penguin')
    this.penguin.setScale(.05);
    this.penguin.body.setCollideWorldBounds(true);
    this.physics.add.collider(this.penguin, this.ground);
    this.physics.add.collider(this.penguin, this.platform3, function(){this.snowman.body.velocity.x=-500}, null, this);
    
    //create snowman
    this.snowman=this.physics.add.sprite(680, 400, 'snowman');
    this.snowman.depth=1;
    this.snowman.setScale(.5);
    

    
    
    //create blood group
    this.bloods=this.add.group({
    
});
    
    
    //create left wall, right wall, and ceiling
    this.leftwall = this.add.tileSprite(20,600, 69*23, 64*28, 'redBrickTile') ; 
    this.leftwall.tintBottomLeft=4
    this.leftwall.tintBottomRight=9
    
    
    //create squish sound
        this.squishSound = this.sound.add('squish');
        this.snowSplatSound = this.sound.add('snowSplat');
        this.whipTheGhostsSound = this.sound.add('whipTheGhosts');

    //adjust depth
    this.penguin.depth=1;
    
    

      this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    x:301,
                    duration:1500,
                    yoyo:false,
                    delay:1500,
                    callbackScope:this,
                    onComplete:function(){
                        this.actText.y=200
                        this.actText.x=150
                        this.actText.setText('Defeat snowman \n'+ 'and be \n'+'king of \n'+ 'mountain!')}
                        });
    
    
   
    

this.platform1 = this.add.tileSprite(575,575, 6*32, 1*28, 'snowTile') ; 
    //add physics to created platform
    this.physics.add.existing(this.platform1);
    //platform does not fall
    this.platform1.body.allowGravity=false;
    //platform does not react when hit
    this.platform1.body.immovable=true;
    
    this.platform2 = this.add.tileSprite(590,547, 5*32, 1*28, 'snowTile') ; 
    //add physics to created platform
    this.physics.add.existing(this.platform2);
    //platform does not fall
    this.platform2.body.allowGravity=false;
    //platform does not react when hit
    this.platform2.body.immovable=true;    
   
    this.platform3 = this.add.tileSprite(605,519, 4*32, 1*28, 'snowTile') ; 
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
    //add collision detection    
    this.physics.add.collider(this.penguin, this.platforms);
    this.physics.add.collider(this.snowman, this.platforms);
    this.physics.add.collider(this.snowman, this.penguin);
                           
                
    this.physics.add.collider(this.snowman, this.ground, this.win, null, this);

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
                        });

};

tutorial4Scene.update = function(){

 


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
        this.penguin.angle=this.penguin.angle-this.penguinRotation
           
    }



    
    else{
        this.penguin.body.setVelocityX(0);
        this.penguin.angle=0;
    };
    
    //make penguin jump
    if(this.cursors.space.isDown &&this.penguin.body.touching.down==true|| this.cursors.up.isDown && this.penguin.body.touching.down==true){
        this.penguin.body.setVelocityY(-500);
   
      
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

                                                
    
    
 
    //fall damage
    // if (this.penguin.body.touching.down==false){this.falling=this.penguin.body.velocity.y};
    // if (this.falling >=900&&this.penguin.body.touching.down==true){this.squishPenguin(); 
                                                                
    // };
    
 
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
    if(this.penguin.body.touching.up==true){this.lose()};
if(this.snowman.body.touching.up==true){this.win()}
iggleResize();

};
  

    


       
       




