let level03Scene = new Phaser.Scene('Level03');

level03Scene.init = function(data){

 this.penguinRotation=5;
  this.winPoint= {x:1, y:1}
 
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
  
    
    //create win
    this.win=function(){
    this.music.stop();
    this.snowSplatSound.play();
    
    this.flag=this.physics.add.sprite(this.penguin.x+10, this.penguin.y, 'flag');
                this.physics.add.collider(this.flag, this.groundLayer);

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
level03Scene.preload = function(data){

    
    
};
// create after preload
level03Scene.create = function(){
  
   //animate flag
    this.anims.create({
    key: 'flagWave',
    frames: this.anims.generateFrameNumbers('flag', { start: 0, end: 9, }),
    frameRate: 6,
    repeat:-1,
    
});     

     this.act='ACT 1.3';
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
    
//create tilemap
 this.map= this.make.tilemap({key:'level03'});  
    
//add tileset image
this.tiles=this.map.addTilesetImage('snowytiles');
    
//create layers from Tiled file
this.skyLayer= this.map.createStaticLayer('sky', this.tiles, 0, 0);  
//create ground layer and add physics
this.groundLayer= this.map.createDynamicLayer('ground', this.tiles, 0, 0);
this.groundLayer.setCollisionByExclusion(-1, true);


    

    //spikes layer also with physics   
this.spikesLayer= this.map.createStaticLayer('spikes', this.tiles, 0, 0);  

//create clouds
this.cloudsLayer= this.map.createDynamicLayer('clouds', this.tiles, 0, 0);  

//create bridges with physics
this.candyCanesLayer= this.map.createDynamicLayer('candyCaneBridges', this.tiles, 0, 0); 
this.candyCanesLayer.setCollisionByExclusion(-1, true);

    
    

    //create penguin
this.map.findObject('Player', (obj)=>{
    
this.penguin= this.physics.add.sprite(obj.x, obj.y, 'penguin');
this.penguin.setScale(.05); 
} );

this.physics.add.collider(this.penguin, this.groundLayer);    
this.physics.add.collider(this.penguin, this.candyCanesLayer);    
   
     //create control keys
    this.cursors=this.input.keyboard.createCursorKeys();

    //create snowmen
  
    this.map.findObject('snowman3', (obj)=>{
    
this.snowman3= this.physics.add.sprite(obj.x, obj.y, 'snowman');
                                    
     this.snowman3.setScale(.5);
    this.physics.add.collider(this.snowman3, this.groundLayer);
    this.physics.add.collider(this.snowman3, this.penguin);
})  
    
    
    //create win condition
    
    this.map.findObject('playerWin', (obj)=>{
    
 this.winPoint.x=obj.x;
    this.winPoint.y=obj.y} );
   
    //move camera
    
    this.cameras.main.startFollow(this.penguin);
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
    
    
    this.music.play();
    //end create
};
level03Scene.update = function(){
    
    //check for win
    if((this.penguin.x>= this.winPoint.x) && (this.penguin.y >= this.winPoint.y)){this.win()};
//check for loss
    if(this.penguin.y>900){this.lose();}
    
    //create controls for penguin
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
       
  if(this.cursors.space.isDown &&(this.penguin.body.blocked.down==true|| this.penguin.body.touching.down==true)|| this.cursors.up.isDown && (this.penguin.body.blocked.down==true || this.penguin.body.touching.down==true)){
        this.penguin.body.setVelocityY(-500);
   
      
};

    //make penguin not wobble during jump
      if(this.penguin.body.blocked.down==false|| this.penguin.body.touching.down==false){
          this.penguin.angle=0;
      };
    
       
       //snowman3 attacks
if( this.snowman3.body.touching.left==true&&this.penguin.body.blocked.down==true){
    this.snowman3.body.velocity.x=-500   
    } 
    
else if (this.snowman3.flipX && this.snowman3.body.touching.right){
  this.snowman3.body.velocity.x=500  
}
    else{
      this.snowman3.body.velocity.x=0;  
    };
    

    
    if(this.penguin.body.touching.up==true&&this.snowman3.body.touching.down==true){
                        this.lose();
                                    };
       
       


if(this.snowman3.body.touching.up==true){this.win()};

iggleResize();

};