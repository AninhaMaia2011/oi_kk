var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
    fabric.image.fromURL('https://cliparting.com/wp-content/uploads/2018/03/happy-birthday-gif-2018-6.gif', function(img) {
    blockImageObject = img;
    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
    top:0,
    left:0
    });
    canvas.add(blockImageObject);
    });
}
function playSound(){
    x.play();
}