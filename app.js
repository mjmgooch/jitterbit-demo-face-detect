 const axios = require('axios');
 const express = require("express");
 const app = express();
 const path = require('path');

// *** GET Routes - display pages ***

 app.set("view engine", "ejs");
 app.use(express.static(path.join(__dirname, "public")));
 
 app.get("/", (req, res) => {
    res.render("index"); // index refers to index.ejs
 });

 app.get("/detect", (req, res) => {
    res.render("detect"); 
 });

 app.get("/create", (req, res) => {
    res.render("create"); 
 });

 app.get("/verify", (req, res) => {

    //get the salesforce users server side.
    getSFDCUsers( function(response)
        {
            var users = response.data;
            res.render("verify", {users: users});
        }        
    );
    
 });
 
 app.listen(3000, () => {
   console.log("server started on port 3000 - http://localhost:3000");
 });

// *** Functions ***

 function getSFDCUsers (callback) {

    axios
    .get('https://JitterbitTRIAL385622.jitterbit.eu/defaultUrlPrefix/1/getsalesforceusers')
    .then(res => {
        return callback(res);
    })
    .catch(error => {
        console.error(error);
    });

 }

