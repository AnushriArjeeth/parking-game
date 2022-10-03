canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

pink_car_width=100;
pink_car_height=90;
background_image="bg_canvas"
pink_car_image="pink_car.png";
pink_car_x=10;
pink_car_y=10;


function images()
{

    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;


    pink_car_imgTag=new Image();
    pink_car_imgTag.onload=uploadPink_car;
    pink_car_imgTag.src=pink_car_image;


}


function uploadBackground()
{

    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

 
}

function uploadPink_car()
{

    ctx.drawImage(pink_car_imgTag,pink_car_x,pink_car_y,pink_car_width,pink_car_height);
    


}







window.addEventListener("keydown",my_keydown);



function my_keydown(e)
{

    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38')
    {

        up();
        console.log("up");

    }

    if(keyPressed=='40')
    {

        down();
        console.log("down");

    }

    if(keyPressed=='37')
    {

        left();
        console.log("left");

    }

    if(keyPressed=='39')
    {

        right();
        console.log("right");

    }
  
}













function up()
{

  if(pink_car_y>=0)
  {
    pink_car_y=pink_car_y-10;
    console.log("when up arrow is pressed,x="+pink_car_x+"| y="+pink_car_y);
    uploadBackground();
    uploadPink_car();
  }
}

function down()
{

  if(pink_car_y<=500)
  {
    pink_car_y=pink_car_y+10;
    console.log("when down arrow is pressed,x="+pink_car_x+"| y="+pink_car_y);
    uploadBackground();
    uploadPink_car();
  }

  
}

function left()
{

  if(pink_car_x>=0)
  {
    pink_car_x=pink_car_x-10;
    console.log("when left arrow is pressed,x="+pink_car_x+"| y="+pink_car_y);
    uploadBackground();
    uploadPink_car();
  }
}

function right()
{

  if(pink_car_x<=700)
  {
    pink_car_x=pink_car_x+10;
    console.log("when right arrow is pressed,x="+pink_car_x+"| y="+pink_car_y);
    uploadBackground();
    uploadPink_car();
  }
}