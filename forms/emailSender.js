let x = document.getElementById("sentmessage");

function sendEmail(){ 
    var params = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("subject").value,
        message:document.getElementById("message").value
    };

const serviceID = "service_d8gp0ff";
const templateID = "template_raf6hip";

emailjs.send(serviceID,templateID,params).then((res)=>{
    //let w = document.getElementById('loading');
    //w.style.display='block';
    
    x.style.display="block";
    setInterval(remove,5000);
    function remove(){
        x.style.display="none"; 
    }

    }).catch((err)=>console.log(err));
}
