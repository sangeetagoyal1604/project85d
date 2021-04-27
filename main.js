canvas=document.getElementById("carcanvas");
ctx=canvas.getContext("2d");


car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
 car1_y=10;

 car2_width=120;
 car2_height=70;
 car2_image="ca2.jpg";
  car2_x=10;
  car2_y=100; 
background_image ="racing.jpg";

function add() {
    console.log("add");
 background_imgTag=new Image();
 background_imgTag.onload=uploadbackground;
 background_imgTag.src=background_image;
 car1_imgTag=new Image();
car1_imgTag.onload=uploadcar1;
car1_imgTag.src=car1_image;
car2_imgTag=new Image();
car2_imgTag.onload=uploadcar2;
car2_imgTag.src=car2_image;
}
function uploadbackground() {
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);   
   }
   
   function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);   
   }
   
window.addEventListener("keydown",mykeydown);

function mykeydown(e) {
keypressed=e.keyCode;
if (keypressed=='37') {
car1left();
console.log('left');   
} 
if (keypressed=='38') {
    car1up();
    console.log('up');   
    } 

    if (keypressed=='39') {
        car1right();
        console.log('right');   
        } 
        if (keypressed=='40') {
            car1down();
            console.log('down');   
            } 
            if (keypressed=='68') {
                car2right();
                console.log("key d");   
                } 
                if (keypressed=='65') {
                    car2left();
                    console.log("key a");   
                    } 
                    if (keypressed=='83') {
                        car2down();
                        console.log("key s");   
                        } 
                        if (keypressed=='87') {
                            car2up();
                            console.log("key w");   
                            } 
 if(car1_x >= 700){
 console.log("car1 won");
   document.getElementById("game_status").innerHTML ="car1 won !!";   }

   if(car2_x >= 700){
    console.log("car2 won");
    document.getElementById("game_status").innerHTML ="car2 won !!";   }
}
function car1up() {
if(car1_y>=0){
car1_y=car1_y-10;
console.log("when up arrow is pressed, x="+car1_x+"| y = " +car1_y); 
uploadbackground();
uploadcar1();
uploadcar2(); 
}
}
function car1down() {
    if(car1_y<=500){
    car1_y=car1_y+10;
    console.log("when down arrow is pressed, x="+car1_x+"| y = " +car1_y); 
    uploadbackground();
    uploadcar1();
    uploadcar2(); 
    }
    }
    function car1left() {
        if(car1_x>0){
        car1_x=car1_x-10;
        console.log("when left arrow is pressed, x="+car1_x+"| y = " +car1_y); 
        uploadbackground();
        uploadcar1();
        uploadcar2(); 
        }
        }
        function car1right() {
            if(car1_x<=720){
            car1_x=car1_x+10;
            console.log("when right arrow is pressed, x="+car1_x+"| y = " +car1_y); 
            uploadbackground();
            uploadcar1();
            uploadcar2(); 
            }
            }

            function car2up() {
                if(car2_y>=0){
                car2_y=car2_y-10;
                console.log("when w arrow is pressed, x="+car2_x+"| y = " +car2_y); 
                uploadbackground();
                uploadcar1();
                uploadcar2(); 
                }
                }

                function car2down() {
                    if(car2_y<=500){
                    car2_y=car2_y+10;
                    console.log("when s arrow key is pressed, x="+car2_x+"| y = " +car2_y); 
                    uploadbackground();
                    uploadcar1();
                    uploadcar2(); 
                    }
                    }   
                    
                    function car2left() {
                        if(car2_x>0){
                        car2_x=car2_x-10;
                        console.log("when a arrow key is pressed, x="+car2_x+"| y = " +car2_y); 
                        uploadbackground();
                        uploadcar1();
                        uploadcar2(); 
                        }
                        }   
                                         
                        function car2right() {
                            if(car2_x<=720){
                            car2_x=car2_x+10;
                            console.log("when d arrow is pressed, x="+car2_x+"| y = " +car2_y); 
                            uploadbackground();
                            uploadcar1();
                            uploadcar2(); 
                            }
                            }  
           my_keydownfunction()
            {                
                         
                        }