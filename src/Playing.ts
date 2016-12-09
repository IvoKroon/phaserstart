class Playing extends Phaser.State{
    //Preload is for loading some stuff like sprites.
    preload(){
        this.game.load.image('apple', 'assets/apple.png');
    }
    //create the stuff
    create(){
        this.game.add.sprite(0, 0, 'apple');
    }

    //render the stuff on different places.
    //if there is a screen without moving objects you don't need this.
    render(){
        
    }

}
