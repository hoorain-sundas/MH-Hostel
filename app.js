var Name = document.getElementById('name');
var email = document.getElementById('email');
var number = document.getElementById('number');
var message = document.getElementById('message');
var obj;
var arr = [];
function customerData(){
    obj = {
      Name: Name.value,
      email: email.value,
      number: number.value,
      message: message.value,
      time: new Date(),
    },
    arr.push(obj)
}
// Slider
var displayimg = document.getElementById('displayimg');
var parent = document.getElementById('parent')
var allimages = parent.getElementsByTagName('IMG');
var i = 0;
console.log(allimages)
function slider(){
    displayimg.src = allimages[i].src;
}
slider();
function autoSlide(){
    displayimg.setAttribute("src", allimages[i]);
    i++;
    if(i>=allimages.length)
    {
    i=0;
    }
    slider();
}
setInterval("autoSlide()", 2000);

function prev(){
 if (i == 0){
   i= allimages.length-1;
 } else {
    i--;
 }
 slider();
}

function next(){
    if (i == allimages.length-1){
        i = 0;
      } else {
         i++;
      }
      slider();
}