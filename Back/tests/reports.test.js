const client = require('../db/db')
const express = require('express');
const router = express.Router();
const MakeMedical = require('../controller/reports');
let unitTest = require('sql-unittest');


const { expect } = require('jest');

describe('Testing contacts select query', () => {
 
    let db;
    let testSelectQuery = 'SELECT * FROM medical_report';
    let testQueryResult;

    let schema= {
        phone_number:'text',
        name:'text',
        appoint_type:'text',
        report:'text',

    }; 

    let data= [
        {
            phone_number:'0526640140',
            name:'efrat',
            appoint_type:'test1',
            report:'test2',

        }
    ];

    before(async () => {  
 
        //instantiate a new db instance
        let db = unitTest.instantiateDb();
 
        //create table
        await unitTest.createTable(db, "test_medical", schema);
 
        //insert data in table
        await unitTest.insert(db, "test_medical", data);
 
        //Run the query being tested
        testQueryResult = await unitTest.runQuery(db, testQuery, []);
    });
    
    after(function(){
        unitTest.closeDb(db);
    });
 
    //Test Cases
    it('should verify that number of records returned by the testquery is 1', async() => {
        unitTest.AssertLength(testQueryResult,1);    
    });
 
    it('should contain the given user in the results from running test query', async() => {
        unitTest.AssertContains(testQueryResult, { phone_number:'0526640140', name:'efrat',appoint_type:'test1',report:'test2'});    
    });
 
   
});

   

module.exports = router;

