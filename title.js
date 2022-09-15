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
    
    this.act='Happy Penguin';
    this.clickTextText='CLICK HERE TO START';
    this.actText= this.add.text(125,300, this.act, {fontSize:'72px'});
    this.clickText=this.add.text(125,375, this.clickTextText, {fontSize:'48px'});
    this.clickText.setInteractive();

 
        this.clickText.moveTween=this.tweens.add({
                           targets:this.clickText,
                           alpha:0,
                            duration:1000,
                            yoyo:true,
                            delay:500,
                            repeat:-1,
                                });

                                this.clickText.on('pointerdown',function(){
                                   // this.scale.startFullscreen();

                                    this.scene.start('Tutorial1')

                                },this);

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