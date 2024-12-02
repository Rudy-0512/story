let left = document.querySelector ('.left');
let right = document.querySelector ('.right');
let leftRight = document.querySelector ('.leftRight');
let text = document.querySelector('p')

//Choice A
let x = document.querySelector('.x');
x.style.display ="none";
let hug =document.querySelector('.hug');
hug.style.display ="none";
let simon =document.querySelector('.simon');
simon.style.display ="none";

//LEFT LEFT LEFT LEFT 
left.addEventListener('click', function(){

leftRight.style.display ="none";
left.style.display ="none";
right.style.display ="none";
x.style.display ="block";
text.innerHTML="to hug double click"
});

//x left choice one

x.addEventListener('dblclick', function(){

text.innerHTML="SO SOFT";
x.style.display="none";
hug.style.display="block";

});

//SECOND CHOICE LEFT 
