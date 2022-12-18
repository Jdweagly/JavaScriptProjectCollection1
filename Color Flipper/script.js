function bgchange(color) //edited version of the color flipper project from geeksforgeeks. Credit goes to https://www.geeksforgeeks.org/design-background-color-changer-using-html-css-and-javascript/
{
document.body.style.background =colorarray[color];
}

function generateColor() 
{
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
 
var colorarray = ["","","","","","","","","","","","","",""];

for(var i=0; i < colorarray.length; i++) {
    colorarray[i] = generateColor();
}


var str="";
for(var i=0;i<colorarray.length;i++) { 
    
    str+='<span onclick="bgchange(' +i+')" style="background-color:'+colorarray[i]+'">'+colorarray[i]+'</span>';
    
    }
    document.getElementById("colorbox").innerHTML=str;