var Main_Map = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Main_Map" });
    },
    preload: preload,
    create: create,
    update: update,

});


var ness;
var sky;
var cursors;
var initialTime;
var platforms;
var DragonLogo_unlocked;
var objective1Collected = false;
var objective2Collected = false; 
var map
var LochNess_Monster;
var Dragon;
var Pixie;
var Bunny; 
var DragonLogo;
var BunnyLogo;
var LochLogo;
var text;
var windowOpened =false;

window.addEventListener("focus", function(event) 
{ 
    cursors = this.input.keyboard.createCursorKeys();
}, false);


function preload ()
{
    this.load.image('ness', 'images/ness.png');
    this.load.image('platform', 'images/platform.png');
    this.load.image('coin', 'images/star.png');
    this.load.image('Bunny', 'images/Bunny.png');
    this.load.image('LochNess_Monster', 'images/LochNess_Monster.png');
    this.load.image('Dragon', 'images/Dragon.png');
    this.load.image('Pixie', 'images/Pixie.png');
    this.load.image('map', 'images/final_map.jpg');
    this.load.image('DragonLogo', 'images/DragonLogo.png');
    this.load.image('BunnyLogo', 'images/BunnyLogo.png');
    this.load.image('LochLogo', 'images/LochLogo.png');
}

function create ()
{   
   // sky = this.add.image(300, 400, 'sky');
    //platform = this.physics.add.staticGroup();
    //platform = this.add.image(650, 400, 'platform') .setScale(0.5);
    //platform = this.physics.add.sprite(650, 450, 'platform') .setScale(0.5) .setVelocityx(100,-100);
    //platform.body.allowGravity = false;
    
    
//encounters/ Logos


  //if(localStorage.getItem('objective-2-unlocked') == 'true')
  //{
  //    console.log('already unlocked');
  //}
  // else
  //{
  //    objective = this.physics.add.sprite(292, 350, 'coin');
  //    objective.setScale(1.0);
  //    this.physics.add.overlap(ness, objective, objectiveCollected, null, this);
  //}

    platforms = this.physics.add.staticGroup();
    
   //Map testing boundaries
   //map = this.add.image(0, 0, 'map');
   //map.displayWidth = 900;
   //map.displayHeight = 600;
   //map.setOrigin(0,0);
   
    //right edge
    // add a y-value to stretch it vertically 
    platforms.create(890, 495, 'platform').setScale(0.05,40).refreshBody();

    //bottom edge
    platforms.create(100, 595, 'platform').setScale(0.5).refreshBody();
    platforms.create(300, 595, 'platform').setScale(0.5).refreshBody();
    platforms.create(500, 595, 'platform').setScale(0.5).refreshBody();
    platforms.create(700, 595, 'platform').setScale(0.5).refreshBody();
    platforms.create(800, 595, 'platform').setScale(0.5).refreshBody();

    //left edge 
    platforms.create(10, 495, 'platform').setScale(0.05,40).refreshBody();

   //top edge
   platforms.create(10, 8, 'platform').setScale(0.5).refreshBody();
   platforms.create(200, 8, 'platform').setScale(0.5).refreshBody();
   platforms.create(400, 8, 'platform').setScale(0.5).refreshBody();
   platforms.create(600, 8, 'platform').setScale(0.5).refreshBody();
   platforms.create(800, 8, 'platform').setScale(0.5).refreshBody();

   //Playground area (lefthand side)
     platforms.create(100, 170, 'platform').setScale(0.8).refreshBody();
   
     platforms.create(255, 315, 'platform').setScale(0.02,7).refreshBody();
     platforms.create(255, 580, 'platform').setScale(0.02,4).refreshBody();

   //Dining hall (righthand side)
   platforms.create(750, 200, 'platform').setScale(0.8).refreshBody();
  
   platforms.create(600, 300, 'platform').setScale(0.02,8).refreshBody();
   platforms.create(600, 590, 'platform').setScale(0.02,5).refreshBody();

   //Classroom (top side), may need to adjust height!
    platforms.create(440, 30, 'platform').setScale(0.7).refreshBody();
   
    platforms.create(350, 300, 'platform').setScale(0.2).refreshBody();
    platforms.create(504, 300, 'platform').setScale(0.2).refreshBody();

   platforms.create(300, 160, 'platform').setScale(0.02,8).refreshBody();
   platforms.create(550, 160, 'platform').setScale(0.02,8).refreshBody();

   //Center Fountain 
   platforms.create(480, 460, 'platform').setScale(0.01,1).refreshBody();
   platforms.create(380, 460, 'platform').setScale(0.01,1).refreshBody();
   platforms.create(440, 420, 'platform').setScale(0.1).refreshBody();
   platforms.create(440, 510, 'platform').setScale(0.1).refreshBody();

   //Center Fountain Walkway
   platforms.create(300, 525, 'platform').setScale(0.01,1).refreshBody();
   platforms.create(300, 375, 'platform').setScale(0.01,3).refreshBody();

   platforms.create(550, 525, 'platform').setScale(0.01,1).refreshBody();
   platforms.create(550, 375, 'platform').setScale(0.01,3).refreshBody();


    cursors = this.input.keyboard.createCursorKeys();
    
    //Map
    map = this.add.image(0, 0, 'map');
    map.displayWidth = 900;
    map.displayHeight = 600;
    map.setOrigin(0,0);

    //Characters
   Pixie = this.physics.add.sprite(350, 450, 'Pixie');
   Pixie.setScale(0.20); 
   Pixie.setCollideWorldBounds(true);
   this.physics.add.collider(Pixie, platforms);

    BunnyLogo = this.physics.add.sprite(810, 380, 'BunnyLogo');
    BunnyLogo.setScale(0.3); 

    LochLogo = this.physics.add.sprite(130, 290, 'LochLogo');
    LochLogo.setScale(0.3); 
    //LochLogo.setInteractive();
    //LochLogo.on('pointerdown',() => {
    //this.scene.start('Classroom');
    //console.log('clicked on LochNess')
    //});
    

    DragonLogo = this.physics.add.sprite(440, 230, 'DragonLogo');
    DragonLogo.setScale(0.3); 
    DragonLogo.setInteractive();
    this.physics.add.overlap(Pixie, DragonLogo, DragonLogo_collide, null, this);
    //DragonLogo.on('pointerdown',() => {
     //this.scene.start('Classroom');
     //console.log('clicked on DragonLogo')
   // window.open('https://scratch.mit.edu/projects/683966748', '_blank');
    //});



    //Time 

  // 2:30 in seconds
    //this.initialTime = 150;

    //text = this.add.text(32, 32, 'Countdown: ' + formatTime(this.initialTime));

    //Each 1000 ms call onEvent
     //timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    //clicking on classroom to change scene (clicking on mouse)
    //this.input.on('pointerdown', () => this.scene.start(scene_one)); 
}

function DragonLogo_collide (_Pixie, _DragonLogo)
{
    console.log('DragonLogo collide')
    if (windowOpened== false){
        window.open('https://scratch.mit.edu/projects/683966748', '_blank');
        windowOpened=true
        Pixie.setVelocityX(0);
        Pixie.setVelocityY(0);
        //show image here
        //pointer down- to hide image 
    }
}



function update ()
{
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

function objectiveCollected(_player, _objective)
{
    console.log("we got the thing");
    objective.disableBody(true, true);
    objective1Collected = true;
    objective2Collected = true;

    document.getElementById("objective-1-unlock").style.display = "block"; 
    localStorage.setItem('objective-1-unlocked', 'true');

    document.getElementById("objective-2-unlock").style.display = "block"; 
    localStorage.setItem('objective-2-unlocked', 'true');

}

//Countdown Timer

//function create ()
//{
   // console.log('create');
   // 2:30 in seconds
   //this.initialTime = 150;

   // text = this.add.text(32, 32, 'Countdown: ' + formatTime(this.initialTime));

    //Each 1000 ms call onEvent
   // timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
//}


//function formatTime(seconds){
    // Minutes
   // var minutes = Math.floor(seconds/60);
    // Seconds
    //var partInSeconds = seconds%60;
    // Adds left zeros to seconds
   // partInSeconds = partInSeconds.toString().padStart(2,'0');
    // Returns formated time
   // return `${minutes}:${partInSeconds}`;
//}

//function onEvent ()
//{
    //this.initialTime -= 1; // One second
    //text.setText('Countdown: ' + formatTime(this.initialTime));
//}


// Display the result in the element with id="demo"
//document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
//if (distance < 0) {
  //clearInterval(x);
  //document.getElementById("demo").innerHTML = "EXPIRED";
//}
//}, 1000);