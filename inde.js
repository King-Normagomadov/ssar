function getStringCss(){
        var p = {
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            phone:document.getElementById("phone").value,
            message:document.getElementById("message").value
        }
        let cssString = ("Name:"+p.name+", \n Email: "+p.email+", \n Phone: "+p.phone+", \n Message: "+p.message)
        fetch(("https://api.telegram.org/bot5990910868:AAEhVwOVJBJaDLkjFe2zlRVk4cWwgPrXu0c/sendMessage?chat_id=-1002057317346&text="+cssString),{
            method:"Get"
        }).then(suc=>{console.log(p.name+"\n Email: "+p.email+"\n Phone: "+p.phone+"\n Message: "+p.message)}).catch(err=>{console.log(0)})
}
(document.getElementById("getStyle")).addEventListener("click",getStringCss)


