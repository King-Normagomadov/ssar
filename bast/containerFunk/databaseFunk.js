
const { rejects } = require("assert");
const { resolve } = require("path");
var sqldbc = require("./../database")

// ########################## fetchs and returns data from db tables ############################

function fetchData(myquery){
   return new Promise((resolve,rejects)=>{
    sqldbc.query(myquery, function(error, data){

        if(error){ return rejects(error) }
        else{  return resolve(data)}
    });
   })//promise
}

// ################################ insert data to db tables ######################################

function insertData(myquery){
    return new Promise((resolve,rejects)=>{
        sqldbc.query(myquery, function(error, data){

            if(error){ rejects(error) }
            else{ resolve(console.log("CHANGES HAS BEEN SAVED!"))}
        });
    })
}

module.exports = {fetchData,insertData}
