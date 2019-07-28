'use strict';

var AWS    = require('aws-sdk');
var uuid   = require('uuid');

var s3     = new AWS.S3();

// var bucketName = 'node-sdk-sample-'+uuid.v4();
var bucketName = 'igor-sdk-sample-2b23e975-d7c8-48c3-bcb3-cdfd9f778373';
var keyName   = 'helloWorld.txt';

var buctekPromise = new AWS.S3({apiVersion: '2006-03-01'})
    .createBucket({Bucket: bucketName})
    .promise();

buctekPromise
    .then(function (data) {
      var objectParams  = {Bucket: bucketName, Key: keyName, Body: 'Hello Igorzt'};
      var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'})
          .putObject(objectParams).promise();
      uploadPromise.then(function (data) {
          console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      }).catch(function (err) {
          console.log('uploadPromise');
          console.error(err,err.stack);
      });
    }).catch(function (err) {
    console.log('uploadPromise');
    console.error(err,err.stack);
});

