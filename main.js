canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
background_image="mars.jpeg"
rover_image="rover.png"
roverx=100
rovery=100
roverwidth=100
roverheight=80
function add(){
    bg_image=new Image();
    bg_image.onload=uploadbg;
    bg_image.src=background_image;
    r_image=new Image()
    r_image.onload=uploadrover
    r_image.src=rover_image
}
function uploadbg(){
    ctx.drawImage(bg_image,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(r_image,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed)
    if(keypressed=='37'){
        left()
        console.log("leftkey is pressed")
    }
    if(keypressed=='39'){
        right()
        console.log("rightkey is pressed")
    }
    if(keypressed=='38'){
        up()
        console.log("upkey is pressed")
    }
    if(keypressed=='40'){
        down()
        console.log("downkey is pressed")
    }
}
