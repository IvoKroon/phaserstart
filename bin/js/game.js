var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Playing = (function (_super) {
    __extends(Playing, _super);
    function Playing() {
        _super.apply(this, arguments);
    }
    Playing.prototype.preload = function () {
        this.game.load.image('apple', 'assets/apple.png');
    };
    Playing.prototype.create = function () {
        this.game.add.sprite(0, 0, 'apple');
    };
    Playing.prototype.render = function () {
    };
    return Playing;
}(Phaser.State));
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
        this.game.state.add('playing', Playing, false);
        this.game.state.start('playing');
    }
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=game.js.map