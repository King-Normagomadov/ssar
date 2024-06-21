


var x = document.getElementsByClassName("limit");

for (let i = 0; i < x.length; i++) {
    const element = x[i];
    var limit_text = element.innerHTML.length; 
    if(limit_text >= 220){
    var add = '...'
  var limited = element.innerHTML.substring(0,220);
  console.log(limited);
   element.innerHTML = limited.concat(add); 
  }
}


    


