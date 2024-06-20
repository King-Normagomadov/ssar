


var x = document.getElementsByClassName("limit");

for (let i = 0; i < x.length; index++) {
    const element = array[index];
    console.log(element);
    var limit_text = x.element.innerHTML.length; 
    if(limit_text >= 220){
    var add = '...'
  var limited = x.innerHTML.substring(0,220);
   x.innerText = limited.concat(add); 
  }
}


    


