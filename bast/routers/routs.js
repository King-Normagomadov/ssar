
var express = require("express")
var {insertData,fetchData} = require("./../containerFunk/databaseFunk")
babarout = express.Router()

//#################################### [/] ##############################
babarout.get("/",(req,res)=>{
async function doIT(){
    try{
        let data = await fetchData('SELECT * FROM inventory ORDER BY id DESC')
        res.render("./../view/sampleData", {title:'Inventory Management System', action:'list', sampleData:data});
    }catch(err){
        console.log(err)
    }
}
doIT()
   
})

//################################### [/edit] ################################

babarout.get("/edit",(req,res)=>{
    res.render("./../view/edit",{title:"Edite"})
})

//################################### [/edit] ################################

babarout.get("/delete",(req,res)=>{
    res.render("./../view/delete",{title:"Delete"})
})
module.exports = babarout