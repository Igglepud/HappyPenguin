//Creates variable for our game scene.
let titleScene = new Phaser.Scene('Title');





// create after preload
titleScene.create = function(){
      this.sideDrapes=this.add.sprite(400,-100, 'sideDrapes');
        this.sideDrapes.setScale(18);
        this.sideDrapes.depth=3;
    
    this.leftDrapes=this.add.sprite(-80,150, 'midDrapes');
        this.leftDrapes.setScale(10);
        this.leftDrapes.depth=2;
    
    this.rightDrapes=this.add.sprite(880,150, 'midDrapes');
        this.rightDrapes.setScale(10);
        this.rightDrapes.depth=2;
    
    this.act='HAPPY PENGUIN';
    this.clickTextText='CLICK HERE TO START';
    this.actText= this.add.bitmapText(125, 300, 'happyPenguinFont', this.act);
    this.actText.setScale(0.5);
    this.clickText=this.add.bitmapText(125, 400, 'happyPenguinFont', this.clickTextText);
    this.clickText.setScale(0.3);
    
    // Make the entire area clickable with input
    this.input.on('pointerdown', function() {
        this.scene.start('Tutorial1');
    }, this);

 
        this.clickText.moveTween=this.tweens.add({
                           targets:this.clickText,
                           alpha:0,
                            duration:1000,
                            yoyo:true,
                            delay:500,
                            repeat:-1,
                                });

                                this.leftDrapes.moveTween=this.tweens.add({
                                    targets:this.leftDrapes,
                                    x:-480,
                                     duration:3000,
                                     yoyo:false,
                                     delay:500,
                                   
                                         },this);
                                 
                     this.rightDrapes.moveTween=this.tweens.add({
                                    targets:this.rightDrapes,
                                    x:1280,
                                     duration:3000,
                                     yoyo:false,
                                     delay:500,
                                     callbackScope:this,   
                                    
                                         });

};

titleScene.update = function(){

                                         
    iggleResize();
  
};