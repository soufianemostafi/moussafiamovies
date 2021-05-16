var exec = require("child_process").exec;
const express = require('express');
const router = require('express').Router();
const registerRouter = require('./routes/register');
const cors = require('cors');
const { Route, Router } = require("react-router-dom");
let Register = require('./models/register.model');
let Session = require('./models/session.model');
let Upload = require('./models/upload.model');
const { post } = require("./routes/register");
const { default: Axios } = require("axios");
const { session } = require("../src/api");
var a=0;

start = (req, res) => {
  console.log("Request handler 'start' was called.");
}

find = (req, res) => {
  console.log("Request handler 'find' was called.");
  exec("find /",{ timeout: 10000, maxBuffer: 20000*1024 },
  function (error, stdout, stderr) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(stdout);
  response.end();});
}

upload = (req, res) => {
  const body = req.body
  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide an upload',
      })
  }
  const upload = new Upload(body)
  if (!upload) {
      return res.status(400).json({ success: false, error: err })
  }
  upload.save().then(() => {
          return res.status(201).json({
              success: true,
              message: 'upload created!',
          })
      })
      .catch(error => {
          return res.status(400).json({
              success: false,
              error,
              message: 'upload not created!',
          })
      })
}
uploadGet = (req, res) => {
  Upload.find()
    .then(upload => res.json(upload))
    .catch(err => res.status(400).json('Error: ' + err));
}
uploadDelete =(req, res) => {
  Upload.findByIdAndRemove(req.params.id,err)
    .then(() => res.json('Upload deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}

show = (req, res) => {
  console.log("Request handler 'show' was called.");
}

login = (req, res) => {
  Register.find().then(
    (register) => {
      for(var i=0; i<register.length; i++){
      if(register[i].username===req.body.username){
        if(register[i].password===req.body.password){
        res.status(200).json(register[i]);
        if(a==0){
        console.log("Login is done successfully | Username: "+req.body.username)
        a=1;
        const body = req.body
        const session = new Session(body)
        session.username=req.body.username;
        session.save();
      }}}
    }
    if(a==0) {console.log("username or passwort incorrect")}
  }
  )
}

logout = (req, res) => {
  Session.find().remove()
    .then(res.status(201).json('deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
  a=0;
}

register = (req, res) => {
  const body = req.body
  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a register',
      })
  }
  const register = new Register(body)
  if (!register) {
      return res.status(400).json({ success: false, error: err })
  }
  register.save().then(() => {
          return res.status(201).json({
              success: true,
              message: 'register created!',
          })
      })
      .catch(error => {
          return res.status(400).json({
              success: false,
              error,
              message: 'register not created!',
          })
      })
}
registerGet = (req, res) => {
  Register.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
}
session_user = (req,res) =>{
  Session.find()
    .then(session => res.json(session))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.start = start;
exports.upload = upload;
exports.find = find;
exports.show = show;
exports.login = login;
exports.logout = logout;
exports.register= register;
exports.registerGet= registerGet;
exports.session_user= session_user;
exports.uploadGet= uploadGet;
exports.uploadDelete= uploadDelete;