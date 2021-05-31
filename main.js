var canvas = new fabric.Canvas("myCanvas");

block_width=30;
block_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_image="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
    block_image=Img;
    block_image.scaleToWidth(block_width);
    block_image.scaleToHeight(block_height);
    block_image.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image);
    });
}