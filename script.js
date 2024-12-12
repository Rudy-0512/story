let left = document.querySelector ('.left');
let right = document.querySelector ('.right');
let leftRight = document.querySelector ('.leftRight');
let text = document.querySelector('p')
let eatcheese = document.querySelector('.eatcheese')
eatcheese.style.display="none"
let smile = document.querySelector('.smile')
smile.style.display="none"

//Choice A
let x = document.querySelector('.x');
x.style.display ="none";
let hug =document.querySelector('.hug');
hug.style.display ="none";
let simon =document.querySelector('.simon');
simon.style.display ="none";
let run = document.querySelector('.run');
run.style.display ="none";
let woods = document.querySelector('.woods');
woods.style.display ="none"
let s = document.querySelector('.s');
s.style.display ="none"
let swim = document.querySelector('.swim');
swim.style.display ="none"
//LEFT LEFT LEFT LEFT 
left.addEventListener('click', function(){

leftRight.style.display ="none";
left.style.display ="none";
right.style.display ="none";
eatcheese.style.display="block";
x.style.display ="block";
woods.style.display ="none"
s.style.display="none"
swim.style.display="none"
text.innerHTML="you see a figure in the distance to aproche it dblclick, to run away click the cheese"
});

//x left choice one

x.addEventListener('dblclick', function(){

text.innerHTML="BOOO";
x.style.display="none";
hug.style.display="block";
eatcheese.style.display="none";

});

//SECOND CHOICE LEFT 
eatcheese.addEventListener('mouseenter',function(){
    text.innerHTML="You were able to run away but who knows if you will get far;)";
    hug.style.display="none";
    eatcheese.style.display="none";
    run.style.display="block";
    x.style.display="none"
});

//RIGHT SIDE
right.addEventListener('click', function(){
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    eatcheese.style.display="none";
    x.style.display ="none";
    woods.style.display ="block"
    smile.style.display="block"
    text.innerHTML="wow so relaxing. if you want to make smores double click so go for a swim in the lake click the smiley face "


});

woods.addEventListener ('dblclick', function(){
   text.innerHTML="YUMMY"
    s.style.display ="block";
woods.style.display ="none";
smile.style.display ="none";

});

smile.addEventListener('mouseenter',function(){
    swim.style.display="block"
    woods.style.display="none"
    text.innerHTML="yay this is so fun "
});9344 