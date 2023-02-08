function sendEmail(){ 
    var params = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value
    };

const serviceID= "service_vdd2nl8";
const templateID= "template_xd4ubmg";

emailjs.send(serviceID,templateID,params)
.then((res)=>{
         //document.getElementById("name").value="";
        //document.getElementById("email").value="";
        //document.getElementById("phone").value="";
        //document.getElementById("message").value="";
        //console.log(res);
        alert("Message Sent");
    })
    .catch((err)=>console.log(err));
}

