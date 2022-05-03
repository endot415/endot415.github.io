var Classroom = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Classroom" });
    },
    preload: preload,
    create: create,
    update: update,
});

var classroom;

function preload () {
    this.load.image("classroom", "images/classroom.png");
    this.load.image("Pixie", "images/Pixie.png");
    this.load.image("Dragon", "images/Dragon.png");
    this.load.image("platform", "images/platform.png");
}

function create () {

    //test platform
   // platforms.create(460, 500, 'platform').setScale(1).refreshBody();

    classroom = this.add.image(0, 0, 'classroom');
    classroom.displayWidth = 900;
    classroom.displayHeight = 600;
    classroom.setOrigin(0,0);
    console.log('loaded scene 1')

    Dragon = this.physics.add.sprite(550, 250, 'Dragon');
    Dragon.setScale(0.5); 

    Pixie = this.physics.add.sprite(460, 440, 'Pixie');
    Pixie.setScale(0.5);
    Pixie.setCollideWorldBounds(true);
    this.physics.add.collider(Pixie, platforms);

    cursors = this.input.keyboard.createCursorKeys();

    //platforms.create(460, 500, 'platform').setScale(1).refreshBody();
}

function update () {

    if(cursors.left.isDown == true)
    {
        Pixie.setVelocityX(-160);
    }

    else if(cursors.right.isDown == true)
    {
        Pixie.setVelocityX(160);
    }

    else if(cursors.up.isDown == true)
    {
        Pixie.setVelocityY(-160);
    }

    else if(cursors.down.isDown == true)
    {
        Pixie.setVelocityY(165);
    }
    else {
        Pixie.setVelocityX(0);
        Pixie.setVelocityY(0);
    }
}

//Make this look like the expressions.js file- put the preload, create, and function under the var area