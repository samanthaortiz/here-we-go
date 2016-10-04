import React, { Component } from 'react';
import { Link } from 'react-router';
var router = require("express").Router();
var request = require('request');

module.exports = {

  getBudgetFormData: function(req, res, next) {
    console.log('>>>>>>>>>> DISPLAY FORM <<<<<<<<<<');
    
    // global.document.querySelector('.link-budget').onclick = function(){
    //   console.log('YES')
    //   // if(this.className.match('show_lb')) {
    //   //       this.className = 'btn';
    //   //   }
    //   //   else {
    //   //       this.className = 'btn btn_red';
    //   //   }
    // };
    next();
  }

};