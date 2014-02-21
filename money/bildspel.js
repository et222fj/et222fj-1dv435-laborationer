var slideshow = document.getElementById ("bilderna");
var pic = 
[

"../css/pics/MeAndMyself.jpg",
"../css/pics/kaninen.png",
"../css/pics/skog.jpg",
];

var counter = 0;
var show; 
        
function delay () {
    setInterval(function() {
    display();
                    
if(counter < pic.length -1){
     counter++;
     }
     else{
    counter = 0;
    }
                    
    },4000);
    }
function display(show){
    display.pic = slideshow.src = pic[counter];
     }
 window.onload = delay();