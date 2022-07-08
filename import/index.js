const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'klimbassignmentDB'

async function getdata() {
    let result = await  client.connect();
    let db = result.db(database);
    let collection = db.collection('klimbassignment');
    let response = await collection.find({}).toarray();
    console.log(response);
    console.log(response);
    async.eachSeries(all, getdata(database){
        check(database); 
    }

getdata();

const express = require("express");
const render = require("xlsx");

const file = render.readFile("../test.xls");

const app = express();
const port = 27017;

app.get("/", (req, res) =>
{
    const sheets = file.SheetNames;

    const data = [];
    for (let i = 0; i< sheets.length; i++)
    {
        const sheetname = sheets[i];

        const sheetData = render.utils.sheet_to_json(file.Sheets[sheetname]);

        sheetData.forEach((a) => {
            data.push(a);        
    });
}

res.send(data);
});

app.listen(port, () => {
    console.log('App running on port' +port);
    
}); 
