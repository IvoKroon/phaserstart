/// <reference path="../tsDefinitions/phaser.d.ts" />
////// <reference path="Boot.ts" />

class SimpleGame
{
	game:Phaser.Game;

	constructor()
	{
		//setup the game
		this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
		//set the state
		this.game.state.add('playing', Playing, false);
		this.game.state.start('playing');
	}
}

window.onload = () => {
	var game = new SimpleGame();
};
