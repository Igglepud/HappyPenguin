let tutorial3Scene = new Phaser.Scene('Tutorial3');

tutorial3Scene.init = function(data){
this.music=data.music;
this.music.play();
this.penguinRotation=5;
this.numberOfBloods=0;
    game.input.addPointer();
    game.input.addPointer();

    
    
    
this.win=function(){
    
    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){                                         this.cursors.right.isDown=false;
                                          this.music.stop();
                                          this.actText.x=300
                                        this.actText.text = 'YAY!';
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.music.stop();
                                        this.actText.x=300
                                        this.actText.text = 'YOU MAKE';
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=300
                                        this.actText.text = 'PENGUIN';
                        
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=275
                                        this.actText.text = 'SO HAPPY!';
                        
                    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=200
                                        this.actText.text = 'NOW ONE \n' +'MORE LEVEL!';
                                          
                                          this.leftDrapes.moveTween=this.tweens.add({
                   targets:this.leftDrapes,
                    x:-80,
                    duration:1500,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.scene.start('Tutorial4', {music: this.music})}
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
    this.cursors.left.isDown=false;
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
                                        this.actText.text = 'WRONG!';
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=275
                                        this.actText.text = 'WHY YOU \n' + 'NO LISTEN?';
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=75
                                        this.actText.text = 'NOW DO IT RIGHT!\n '+'';
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
    
    
    this.lose2=function(){
this.music.stop(); 
    this.squishPenguin();
    this.cursors.up.isDown=false;
    this.cursors.left.isDown=false;
    this.cursors.down.isDown=false;
    this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){                                 
                                        this.cursors.left.isDown=false;
                                        this.actText.x=300
                                        this.actText.text = 'WHY?';
                        
                        
this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:300,
                    duration:1500,
                    yoyo:false,
                    delay:0,
                    callbackScope:this,
                    onComplete:function(){this.actText.x=275
                                        this.actText.text = 'WHY YOU \n' + 'DO THAT?';
                this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:750,
                    yoyo:false,
                    delay:750,
                    callbackScope:this,
                    onComplete:function(){
                                        this.actText.x=175
                                        this.actText.y=250
                                        this.actText.text = ' BIG BULLY!\n '+'GO BACK \n ' +'TO START!';
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
      this.penguin.visible=false;
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

    

        
    }; 
    
};


// create after preload
tutorial3Scene.create = function(){
    
    
    
    this.act='TUTORIAL 3';
    this.actText= this.add.bitmapText(300, 300, 'happyPenguinFont', this.act);
    this.actText.setScale(0.45);
    this.actText.depth=2
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
    this.penguin=this.physics.add.sprite(400,500, 'penguin')
    this.penguin.setScale(.05);
    this.penguin.body.setCollideWorldBounds(true);
    this.physics.add.collider(this.penguin, this.ground);
    this.penguin.setInteractive();


    
    
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

    //adjust depth
    this.penguin.depth=1;
    
    

      this.actText.moveTween=this.tweens.add({
                   targets:this.actText,
                    y:301,
                    duration:200,
                    yoyo:false,
                    delay:5000,
                    callbackScope:this,
                    onComplete:function(){this.actText.text = 'PRESS ';
                        this.silhouette=this.add.sprite(580,330,'penguinSilhouette').setInteractive();
                            this.silhouette.setScale(.06);
                                           //reveal control on silhouette click
    this.silhouette.on('pointerdown', function(){this.actText.text = 'PRESS UP';
                                                this.silhouette.destroy();}, this);
    
                                         }
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
            //squish penguin on click/press


         this.penguin.on('pointerdown', function(){
             this.silhouette.destroy();
             this.lose2()}, this) ;  
    
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

tutorial3Scene.update = function(){

 


    //make platforms bounce off each other and NOT the penguin
    
    
    //squish penguin
    
    
    if(this.penguin.body.touching.left==true && this.penguin.body.touching.right==true){
        this.squishPenguin()
    };
                        
    
        
        
        //this.scene.start('GameOver');
    
    //check keys for moving and jumping
    if(this.cursors.up.isDown){
        
        if(this.cursors.space.isDown &&this.penguin.body.touching.down==true|| this.cursors.up.isDown && this.penguin.body.touching.down==true){
        this.penguin.body.setVelocityY(-500);
   
      
};
        this.win();
                this.cursors.up.isDown=false;

        
 
        
    }


   else if(this.cursors.left.isDown ||this.cursors.right.isDown||        this.cursors.down.isDown){
        this.lose()}
    
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

                                                
    
    
 
    //fall damage
    if (this.penguin.body.touching.down==false){this.falling=this.penguin.body.velocity.y};
    if (this.falling >=900&&this.penguin.body.touching.down==true){this.squishPenguin(); 
                                                                
    };
    iggleResize();

};
    


       
       




