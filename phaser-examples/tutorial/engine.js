var game = new Phaser.Game(800, 600, Phaser.AUTO, "",
  { preload: preload, create: create, update: update }
);

var platforms

function preload() {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
  game.add.sprite(0, 0, 'star');

  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.add.sprite(0, 0, 'sky');

  platforms = game.add.group();

  platforms.enableBody = true;

  var ground = platforms.create(0, game.world.height - 64, 'ground');
  ground.scale.setTo(2, 2);
  ground.body.immovable = true;

  var ledge = platforms.create(400, 400, 'ground');
  ledge.body.immovable = true;

  ledge = platforms.create(-100, 200, 'ground');
  ledge.body.immovable = true;

  player = game.add.sprite(32, game.world.height - 150, 'dude');

  game.physics.arcade.enable(player);

  player.body.bounce.y  = 0.2;
  player.body.gravity.y = 600;
  player.body.colliderWithBounds = true;

  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('left', [5, 6, 7, 8], 10, true);
}

function update() {
  game.physics.arcade.collide(player, platforms);
}