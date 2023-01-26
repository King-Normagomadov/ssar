var express = require("express")
var router = require("./routers/routs")


var app = express()
app.set('view engine', 'ejs');
app.use(router)
app.listen(8080)



/* 

// using promis await async function for handeling sql query
async function doIT(){
    try{
        let data = await fetchData('SELECT * FROM inventory')
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
doIT()


steps:

1- creating database connection
2- creating seperat functions for inserting and fetching data from database tables
3- creating express server
4- rendering ejs file
5- creating router folder
6- making changes in old files
7- making form for edit and delete files



*/