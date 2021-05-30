//challenge 1: Your age in days
function ageInDays(){
var birthYear = prompt("what year were you born... My Dear friend");
var ageInDays=(2021-birthYear)*365;
var h1=document.createElement('hi');
var textAnswer=document.createTextNode('You are '+ageInDays+" days old");
h1.setAttribute('id','agInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();
}

